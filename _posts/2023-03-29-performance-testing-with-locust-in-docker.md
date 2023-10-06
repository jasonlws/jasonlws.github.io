---
title: Performance Testing With Locust in Docker
date: 2023-03-29 00:00:00 -0500
last_modified_at : 2023-03-29 00:00:00 -0500
categories: [Software Testing]
tags: [Locust, Performance Testing, Python, Docker]
pin: false
math: true
mermaid: true
---

## Performance testing

Performance testing is a type of software testing that evaluates the system's ability to handle user traffic and workload.

- Identify bottlenecks and performance issues in the application.
- Simulate realistic user scenarios and loads to measure the application's response times, resource utilization, and other performance metrics.
- Helps ensure that the application is capable of delivering reliable and responsive performance to its users.

There are different types of performance testing:

- **Load Testing** - the performance under a predefined load.
- **Stress Testing** - the ability to handle heavy workloads beyond its capacity.
- **Endurance Testing** - the performance over a long period.
- **Spike Testing** - the ability to handle sudden spikes in user traffic.

## Locust

> Locust is an easy to use, scriptable and scalable performance testing tool.
>
> You define the behaviour of your users in regular Python code, instead of being stuck in a UI or restrictive domain specific language.
>
> This makes Locust infinitely expandable and very developer friendly.
>
> By Locust.io ([link](https://docs.locust.io/en/stable/what-is-locust.html#what-is-locust))

Scalable - Distributed load generation

> A single process running Locust can simulate a reasonably high throughput. For a simple test plan it should be able to make many hundreds of requests per second, thousands if you use FastHttpUser.
>
> But if your test plan is complex or you want to run even more load, you’ll need to scale out to mulitple processes, maybe even multiple machines.
>
> To do this, you start one instance of Locust in master mode using the –master flag and multiple worker instances using the –worker flag. If the workers are not on the same machine as the master you use –master-host to point them to the IP / hostname of the machine running the master.
>
> The master instance runs Locust’s web interface, and tells the workers when to spawn / stop Users. The workers run your Users and send back statistics to the master. The master instance doesn’t run any User itself.
> 
> Both the master and worker machines must have a copy of the locustfile when running Locust distributed.
> 
> By Locust.io ([link](https://docs.locust.io/en/stable/running-distributed.html#distributed-load-generation))

Therefore, if we would like to simulate BIGPANG traffic — 50k concurrent users access, we just prepare more worker instances. For example, one worker instance can simulate 5k concurrent users, so we need to scale up to 10 worker instances.

## Setting up Locust tests

### Prepare simple locustfile

1. Submit a GET method HTTP request to NGINX
2. Each user should wait between 1 and 5 seconds on every task execution

```python
from locust import between, task
from locust.contrib.fasthttp import FastHttpUser

class NginxTaskSet(FastHttpUser):

    wait_time = between(1, 5) # each user wait between 1 and 5 seconds between evey task execution

    @task
    def load_contents(self):
        self.client.get("http://nginx")
```
{: file='performance-testing-with-locust-in-docker/performance-testing-locustfile.py'}

### Prepare docker-compose file to start our testing environment

1\. master container

- same host port and container port - 8089
- mount simple locustfile to /mnt/locust/performance-testing-locustfile.py

2\. worker container

- mount simple locustfile to /mnt/locust/performance-testing-locustfile.py
- specify master host

3\. nginx container

- host port 8090 for external access

```yml
version: "3.7"
services:
  master:
    image: locustio/locust:2.15.1
    ports:
      - target: 8089
        published: 8089
        protocol: tcp
        mode: ingress
    volumes:
      - ./performance-testing-locustfile.py:/mnt/locust/locustfile.py
    command: -f /mnt/locust/locustfile.py --master -H http://master:8089
  
  worker:
    image: locustio/locust:2.15.1
    volumes:
      - ./performance-testing-locustfile.py:/mnt/locust/locustfile.py
    command: -f /mnt/locust/locustfile.py --worker --master-host master

  nginx:
    image: nginx:1.23.3
    ports:
      - target: 80
        published: 8090
        protocol: tcp
        mode: ingress
```
{: file='performance-testing-with-locust-in-docker/performance-testing-locust.yml'}

### Create and start containers

- Run following command in your console

```console
$ docker-compose -f performance-testing-locust.yml up –scale master=1 –scale worker=1 –scale nginx=1
```

- Open [http://127.0.0.1:8090](http://127.0.0.1:8090) to access nginx page.

![Nginx Page](/public/images/20230329/nginx_page.png){: width="700" height="205" }

- Open [http://127.0.0.1:8089](http://127.0.0.1:8089) to access your local Locust page.

![Locust Page](/public/images/20230329/locust_page.png){: width="700" height="419" }

- Under the Charts tab, you will find things like requests per second (RPS), response times and the number of running users.

![Locust Charts Page](/public/images/20230329/locust_charts_page.png){: width="700" height="855" }

- Stop and remove containers and network

```console
$ docker-compose -f performance-testing-locust.yml down -v
```

## Pros and Cons of using Locust

### Advantages

- All tests are coded in pure Python.
- Doesn't demand extensive resources.
- Easy to set up.
- Fast.
- Highly user-friendly
- Open-source - Free $$$$.
- Test any scenario.

### Disadvantages

- Demands an in-depth understanding of HTTP protocols.
- Lacks ramp-up capabilities.
- No capture and reply.
- Only uses a linear load model.
- You don't need to be a programmer to use Locust.

## References

- Repositories with sample code - [link](https://github.com/jasonlws/performance-testing-with-locust-in-docker)
- locust.io - [documentation](https://locust.io/)

## About Myself

Please reach out to connect with me via [**Linkedin**](https://www.linkedin.com/in/jasonlws).