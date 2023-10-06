---
title: Build and Publishing Docker Image via GitHub Workflow
date: 2023-10-01 00:00:00 -0500
last_modified_at : 2023-10-01 00:00:00 -0500
categories: [GitHub Workflow]
tags: [Docker Image, GitHub Workflow, Git]
pin: true
math: false
mermaid: false
img_path: /public/images/20231001-githubactiondockerimage/
style: sheet
---

## What is GitHub Actions and GitHub Workflows?

### GitHub Actions

GitHub Actions is a continuous integration and continuous delivery (CI/CD) platform that allows you to automate your build, test, and deployment pipeline. You can create workflows that build and test every pull request to your repository, or deploy merged pull requests to production.

GitHub Actions goes beyond just DevOps and lets you run workflows when other events happen in your repository. For example, you can run a workflow to automatically add the appropriate labels whenever someone creates a new issue in your repository.

GitHub provides Linux, Windows, and macOS virtual machines to run your workflows, or you can host your own self-hosted runners in your own data center or cloud infrastructure.

### GitHub Workflows

A workflow is a configurable automated process that will run one or more jobs. Workflows are defined by a YAML file checked in to your repository and will run when triggered by an event in your repository, or they can be triggered manually, or at a defined schedule.

Workflows are defined in the .github/workflows directory in a repository, and a repository can have multiple workflows, each of which can perform a different set of tasks. For example, you can have one workflow to build and test pull requests, another workflow to deploy your application every time a release is created, and still another workflow that adds a label every time someone opens a new issue.

## Let's Start

### 1. Create Dockerfile

To create Dockerfile and add it to GitHub repository 

1. Create a DockerFile with `ARG` variable.
2. Create two branchs - `latest`.

**Example:**

```dockerfile
ARG BUSYBOX_TAG
FROM busybox:${BUSYBOX_TAG}
```
{: file='Dockerfile'}

### 2. Create Workflow

To create workflow file

1. Create `.github/workflow` folder inside the GitHub repository.
2. Create `docker-image.yml` workflow file.
3. Copy and paste following code into `docker-image.yml` file.

**Example:**

```yml
{% raw %}
name: Docker Image CI

on:
  push:
    branches: [ "latest" ]

jobs:

  build:

    runs-on: ubuntu-latest
    
    steps:
    
    # Checkout a Git repository at a particular version
    - name: Checkput
      uses: actions/checkout@v3

    # Set up Docker Buildx
    - name: Docker Setup Buildx
      uses: docker/setup-buildx-action@v3.0.0
    
    # Login against a Docker registry
    - name: Docker Login
      if: github.event_name != 'pull_request'
      uses: docker/login-action@v3.0.0
      with:
        username: ${{ secrets.HUB_USERNAME }}
        password: ${{ secrets.HUB_ACCESS_TOKEN }}

    # Extract metadata (tags, labels) for Docker
    - name: Docker Metadata action
      uses: docker/metadata-action@v5.0.0
      with:
        images: ${{ vars.IMAGE_NAME }}
    
    # Build and push Docker images
    - name: Build and push Docker images
      uses: docker/build-push-action@v5.0.0
      with:
        build-args: BUSYBOX_TAG=${{ vars.BUSYBOX_TAG }}
        context: .
        file: ./Dockerfile
        labels: ${{ steps.meta.outputs.labels }}
        platforms: linux/amd64,linux/arm64,linux/arm/v6,linux/arm/v7
        push: ${{ github.event_name != 'pull_request' }}
        tags: ${{ vars.IMAGE_NAME }}:${{ vars.BUSYBOX_TAG }}

    # Update a Docker Hub repository description from README.md
    - name: Docker Hub Description
      uses: peter-evans/dockerhub-description@v3.4.2
      with:
        username: ${{ secrets.HUB_USERNAME }}
        password: ${{ secrets.HUB_ACCESS_TOKEN }}
        repository: ${{ vars.IMAGE_NAME }}
        short-description: Docker Image - My BusyBox
        readme-filepath: ./README.md
{% endraw %}
```
{: file='docker-image.yml'}

### 3. Create Secrets and Variables

### Secrets in GitHub workflow file

| Name | Description |
| :--- | :--- |
| secrets.HUB_USERNAME | Username used to log against the Docker registry | 
| secrets.HUB_ACCESS_TOKEN | Password or personal access token used to log against the Docker registry |

### Variables in GitHub workflow file

| Name | Description |
| :--- | :--- |
| vars.IMAGE_NAME | Base name of Docker images |
| vars.BUSYBOX_TAG | Tag of Docker images |

### Create Repository Secrets and Variables

1. Navigate to the main apge of repository.
2. Under your repository name, click `Settings`. If you cannot see the `Settings` tab, select the  dropdown menu, then click `Settings`.
3. In the `Security` section of the sidebar, select `Secrets and variables`, then click `Actions`.

**Create Secrets**
1. Click the `Secrets` tab.
2. Click `New repository secret`.
3. In the `Name` field, type a name for your secret.
4. In the `Secret` field, enter the value for your secret.
5. Click `Add secret`.

**Create Variables**
1. Click the `Variables` tab.
2. Click `New repository variable`.
3. In the `Name` field, type a name for your variable.
4. In the `Value` field, enter the value for your variable.
5. Click `Add variable`.

### Create Environment Secrets and Variables

1. Navigate to the main page of the repository.
2. Under your repository name, click `Settings`. If you cannot see the `Settings` tab, select the  dropdown menu, then click `Settings`.
3. In the left sidebar, click `Environments`.
4. Click on the environment that you want to add a secret to.

**Create Secrets**
1. Under `Environment secrets`, click `Add secret`.
2. Type a name for your secret in the `Name` input box.
3. Enter the `value` for your secret.
4. Click `Add secret`.

**Create Variables**
1. Under `Environment variables`, click `Add variable`.
2. Type a name for your secret in the `Name` input box.
3. Enter the `value` for your secret.
4. Click `Add variable`.

## 4. Test Workflow

1. Since workflow's trigger is a push event on `latest` branch.
2. Push a commit on `latest` branch.
3. Under your repository name, click `Actions`. If you cannot see the `Actions` tab, select the  dropdown menu, then click `Actions`.
4. The commit message for the push that triggered the workflow will be visible.
5. Once the workflow completed, click the commit message to check the status of workflow.

## 5. Check Docker Image on DockerHub

Now, the Docker image already push to your registry.

## References

- [GitHub Actions Documentation](https://docs.github.com/actions)

## About Myself

Please reach out to connect with me via [**Linkedin**](https://www.linkedin.com/in/jasonlws).