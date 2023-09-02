---
title: Docker Compose Cheat Sheet
date: 2023-09-01 00:00:00 -0500
last_modified_at : 2023-09-01 00:00:00 -0500
categories: [Cheat Sheet]
tags: [Docker Compose, Cheat Sheet]
pin: true
math: true
mermaid: true
img_path: /public/images/20230301/
style: sheet
---

### Basic example

```yaml
# docker-compose.yml
version: '3.8'

services:
  web:
    build:
    # build from Dockerfile
      context: ./dir
      dockerfile: Dockerfile
    ports:
     - "8080:80"
    volumes:
     - .:/code
  db:
    image: mysql
```

### Commands

#### docker compose - [link](https://docs.docker.com/engine/reference/commandline/compose/)
```sh
Usage:  docker compose [OPTIONS] COMMAND

Define and run multi-container applications with Docker.

Options:
      --ansi string                Control when to print ANSI control characters ("never"|"always"|"auto") (default "auto")
      --compatibility              Run compose in backward compatibility mode
      --env-file stringArray       Specify an alternate environment file.
  -f, --file stringArray           Compose configuration files
      --parallel int               Control max parallelism, -1 for unlimited (default -1)
      --profile stringArray        Specify a profile to enable
      --project-directory string   Specify an alternate working directory
                                   (default: the path of the, first specified, Compose file)
  -p, --project-name string        Project name

Commands:
  build       Build or rebuild services
  config      Parse, resolve and render compose file in canonical format
  cp          Copy files/folders between a service container and the local filesystem
  create      Creates containers for a service.
  down        Stop and remove containers, networks
  events      Receive real time events from containers.
  exec        Execute a command in a running container.
  images      List images used by the created containers
  kill        Force stop service containers.
  logs        View output from containers
  ls          List running compose projects
  pause       Pause services
  port        Print the public port for a port binding.
  ps          List containers
  pull        Pull service images
  push        Push service images
  restart     Restart service containers
  rm          Removes stopped service containers
  run         Run a one-off command on a service.
  start       Start services
  stop        Stop services
  top         Display the running processes
  unpause     Unpause services
  up          Create and start containers
  version     Show the Docker Compose version information
```

#### docker compose up - [link](https://docs.docker.com/engine/reference/commandline/compose_up/)
```sh
Usage:  docker compose up  [OPTIONS] COMMAND

Builds, (re)creates, starts, and attaches to containers for a service.

Options:
      --abort-on-container-exit    Stops all containers if any container was stopped. Incompatible with -d
      --always-recreate-deps       Recreate dependent containers. Incompatible with --no-recreate.
      --attach                     Attach to service output.
      --attach-dependencies        Attach to dependent containers.
      --build                      Build images before starting containers.
   -d, --detach                    Detached mode: Run containers in the background
      --exit-code-from             Return the exit code of the selected service container. Implies --abort-on-container-exit
      --force-recreate             Recreate containers even if their configuration and image haven't changed.
      --no-attach                  Don't attach to specified service.
      --no-build                   Don't build an image, even if it's missing.
      --no-color                   Produce monochrome output.
      --no-deps                    Don't start linked services.
      --no-log-prefix              Don't print prefix in logs.
      --no-recreate                If containers already exist, don't recreate them. Incompatible with --force-recreate.
      --no-start                   Don't start the services after creating them.
      --pull                       Pull image before running ("always"|"missing"|"never")
      --quiet-pull                 Pull without printing progress information.
      --remove-orphans             Remove containers for services not defined in the Compose file.
   -V, --renew-anon-volumes        Recreate anonymous volumes instead of retrieving data from the previous containers.
      --scale                      Scale SERVICE to NUM instances. Overrides the scale setting in the Compose file if present.
   -t, --timeout                   Use this timeout in seconds for container shutdown when attached or when containers are already running. (default 0)
      --timestamps                 Show timestamps.
      --wait                       Wait for services to be running|healthy. Implies detached mode.
      --wait-timeout               timeout waiting for application to be running|healthy. (default 0)
```

#### docker compose down - [link](https://docs.docker.com/engine/reference/commandline/compose_down/)
```sh
Usage:  docker compose down  [OPTIONS] COMMAND

Stops containers and remove containers, networks, volumes, and images created by up.

Options:
      --remove-orphans             Remove containers for services not defined in the Compose file.
      --rmi                        Remove images used by services. "local" remove only images that don't have a custom tag ("local"|"all")
   -t, --timeout                   Specify a shutdown timeout in seconds (default 0)
   -v, --volumes                   Remove named volumes declared in the "volumes" section of the Compose file and anonymous volumes attached to containers.
```

## Reference
{: .-three-column}

### [Build](https://docs.docker.com/compose/compose-file/compose-file-v3/#build)

`build` can be specified either as a string containing a path to the build context:
```yaml
version: "3.8"
services:
  webapp:
    build: ./dir
```

Or, as an object with path specified under context and optionally Dockerfile and args:
```yaml
version: "3.8"
services:
  webapp:
    build:
      context: ./dir
      dockerfile: Dockerfile-alternate
      args:
        buildno: 1
```

Specify the image to start the container from. Can either be a repository/tag or a partial image ID.
```yaml
version: "3.8"
services:
  webapp:
    image: ubuntu:22.04
```

### [ports](https://docs.docker.com/compose/compose-file/compose-file-v3/#ports)

#### Short syntax 
There are three options:
- Specify both ports (HOST:CONTAINER)
- Specify just the container port (an ephemeral host port is chosen for the host port).
- Specify the host IP address to bind to AND both ports (the default is 0.0.0.0, meaning all interfaces): (IPADDR:HOSTPORT:CONTAINERPORT). If HOSTPORT is empty (for example 127.0.0.1::80), an ephemeral port is chosen to bind to on the host.

```yaml
  ports:
    - "8080:80"
    - "3000"
    - "127.0.0.1:8001:8001"
```

#### Long syntax 
The long form syntax allows the configuration of additional fields that can't be expressed in the short form.
- target: the port inside the container
- published: the publicly exposed port
- protocol: the port protocol (tcp or udp)
- mode: host for publishing a host port on each node, or ingress for a swarm mode port to be load balanced.

```yaml
ports:
  - target: 80
    published: 8080
    protocol: tcp
    mode: host
```

### [command](https://docs.docker.com/compose/compose-file/compose-file-v3/#command)

Override the default command. And the command can also be a list, in a manner similar to Dockerfile.
```yaml
  # command to execute
  command: bundle exec thin -p 3000
  command: ["bundle", "exec", "thin", "-p", "3000"]
```

### [entrypoint](https://docs.docker.com/compose/compose-file/compose-file-v3/#entrypoint)

Override the default entrypoint, And the entrypoint can also be a list, in a manner similar to Dockerfile.
```yaml
  # override the entrypoint
  entrypoint: /app/start.sh
  entrypoint: ["php", "-d", "vendor/bin/phpunit"]
```

### [environment](https://docs.docker.com/compose/compose-file/compose-file-v3/#environment)

Add environment variables. You can use either an array or a dictionary. Any boolean values (true, false, yes, no) need to be enclosed in quotes to ensure they are not converted to True or False by the YML parser.

```yaml
  environment:
    RACK_ENV: development
    SHOW: 'true'
```

```yaml
  environment:
    - RACK_ENV=development
```

### [depends_on](https://docs.docker.com/compose/compose-file/compose-file-v3/#depends_on)

Express dependency between services. Service dependencies cause the following behaviors:

- `docker-compose up` starts services in dependency order. In the following example, `db` and `redis` are started before `web`.
- `docker-compose up SERVICE` automatically includes `SERVICE`'s dependencies. In the example below, `docker-compose up web` also creates and starts `db` and `redis`.
- `docker-compose stop` stops services in dependency order. In the following example, `web` is stopped before `db` and `redis`.
- 
Simple example:

```yaml
version: "3.8"
services:
  web:
    build: .
    depends_on:
      - db
      - redis
  redis:
    image: redis
  db:
    image: postgres
```

### [volumes](https://docs.docker.com/compose/compose-file/compose-file-v3/#volumes)

Mount host paths or named volumes, specified as sub-options to a service.

You can mount a host path as part of a definition for a single service, and there is no need to define it in the top level `volumes` key.

But, if you want to reuse a volume across multiple services, then define a named volume in the top-level volumes key. Use named volumes with services, swarms, and stack files.

This example shows a named volume (`mydata`) being used by the `web` service, and a bind mount defined for a single service (first path under `db` service `volumes`). The `db` service also uses a named volume called `dbdata` (second path under `db` service `volumes`), but defines it using the old string format for mounting a named volume. Named volumes must be listed under the top-level `volumes` key, as shown.

```yaml
version: "3.8"
services:
  web:
    image: nginx:alpine
    volumes:
      - type: volume
        source: mydata
        target: /data
        volume:
          nocopy: true
      - type: bind
        source: ./static
        target: /opt/app/static

  db:
    image: postgres:latest
    volumes:
      - "/var/run/postgres/postgres.sock:/var/run/postgres/postgres.sock"
      - "dbdata:/var/lib/postgresql/data"

volumes:
  mydata:
  dbdata:
```

#### Short syntax

The short syntax uses the generic `[SOURCE:]TARGET[:MODE]` format, where `SOURCE` can be either a host path or volume name. `TARGET` is the container path where the volume is mounted. Standard modes are `ro` for read-only and `rw` for read-write (default).

You can mount a relative path on the host, which expands relative to the directory of the Compose configuration file being used. Relative paths should always begin with `.` or `..`.

```yaml
volumes:
  # Just specify a path and let the Engine create a volume
  - /var/lib/mysql

  # Specify an absolute path mapping
  - /opt/data:/var/lib/mysql

  # Path on the host, relative to the Compose file
  - ./cache:/tmp/cache

  # User-relative path
  - ~/configs:/etc/configs/:ro

  # Named volume
  - datavolume:/var/lib/mysql
```

#### Long syntax 

The long form syntax allows the configuration of additional fields that can't be expressed in the short form.

- `type`: the mount type `volume`, `bind`, `tmpfs` or `npipe`
- `source`: the source of the mount, a path on the host for a bind mount, or the name of a volume defined in the top-level volumes key. Not applicable for a tmpfs mount.
- `target`: the path in the container where the volume is mounted
- `read_only`: flag to set the volume as read-only
- `bind`: configure additional bind options
  - `propagation`: the propagation mode used for the bind
- `volume`: configure additional volume options
  - `nocopy`: flag to disable copying of data from a container when a volume is created
- `tmpfs`: configure additional tmpfs options
  - `size`: the size for the tmpfs mount in bytes

```yaml
version: "3.8"
services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - type: volume
        source: mydata
        target: /data
        volume:
          nocopy: true
      - type: bind
        source: ./static
        target: /opt/app/static

networks:
  webnet:

volumes:
  mydata:
```

### [labels](https://docs.docker.com/compose/compose-file/compose-file-v3/#labels)

Add metadata to containers using Docker labels. You can use either an array or a dictionary.

It's recommended that you use reverse-DNS notation to prevent your labels from conflicting with those used by other software.

```yaml
services:
  web:
    labels:
      com.example.description: "Accounting webapp"
```

### [dns](https://docs.docker.com/compose/compose-file/compose-file-v3/#dns)

Custom DNS servers. Can be a single value or a list.

```yaml
services:
  web:
    dns:
      - 8.8.8.8
      - 8.8.4.4
```

### [external_links](https://docs.docker.com/compose/compose-file/compose-file-v3/#external_links)

Link to containers started outside this docker-compose.yml or even outside of Compose, especially for containers that provide shared or common services. external_links follow semantics similar to the legacy option links when specifying both the container name and the link alias (CONTAINER:ALIAS).

```yaml
services:
  web:
    external_links:
      - redis_1
      - project_db_1:mysql
```

### [healthcheck](https://docs.docker.com/compose/compose-file/compose-file-v3/#healthcheck)

Configure a check that's run to determine whether or not containers for this service are "healthy". See the docs for the [HEALTHCHECK Dockerfile instruction](https://docs.docker.com/engine/reference/builder/#healthcheck) for details on how healthchecks work.

```yaml
    # declare service healthy when `test` command succeed
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost"]
      interval: 1m30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

### [extra_hosts](https://docs.docker.com/compose/compose-file/compose-file-v3/#extra_hosts)

Add hostname mappings. Use the same values as the docker client `--add-host` parameter.

```yaml
services:
  web:
    extra_hosts:
      - "somehost:192.168.1.100"
```

### [networks](https://docs.docker.com/compose/compose-file/compose-file-v3/#networks)

Networks to join, referencing entries under the [top-level `networks` key](https://docs.docker.com/compose/compose-file/compose-file-v3/#network-configuration-reference).
```yaml
services:
  some-service:
    networks:
     - some-network
     - other-network
```

## About Myself

Please reach out to connect with me via [**Linkedin**](https://www.linkedin.com/in/jasonlws).