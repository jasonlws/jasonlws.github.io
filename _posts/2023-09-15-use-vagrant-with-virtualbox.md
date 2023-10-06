---
title: Use Vagrant with VirtualBox
date: 2023-09-15 00:00:00 -0500
last_modified_at : 2023-09-15 00:00:00 -0500
categories: [Virtual Machine]
tags: [Vagrant, VirtualBox]
pin: true
math: false
mermaid: false
style: sheet
---

# Use Vagrant with VirtualBox

## What is Vagrant?

> Single workflow to build and manage virtual machine environments - Vagrant is designed for everyone as the simplest and fastest way to create a virtualized environment.

From [Vagent](https://www.vagrantup.com/)

## What is VirtualBox?

> VirtualBox is a powerful x86 and AMD64/Intel64 virtualization product for enterprise as well as home use. Not only is VirtualBox an extremely feature rich, high performance product for enterprise customers, it is also the only professional solution that is freely available as Open Source Software under the terms of the GNU General Public License (GPL) version 3.

From [VirtualBox](https://www.virtualbox.org/)

## Download and Install Vagrant and VirtualBox

1. Download and Install Vagrant - [download link](https://developer.hashicorp.com/vagrant/downloads)

2. Download and Install VirtualBox - [download link](https://www.virtualbox.org/wiki/Downloads)

## How to use Vagrant

### Install and Specify a Box

Instead of building a virtual machine from scratch, which would be a slow and tedious process, Vagrant uses a base image to quickly clone a virtual machine. These base images are known as "boxes" in Vagrant, and specifying the box to use for your Vagrant environment is always the first step after creating a new Vagrantfile.

### Install a Box

If you ran the commands in the last tutorial you do not need to add a box; Vagrant installed one when you initialized your project. Sometimes you may want to install a box without creating a new Vagrantfile. For this you would use the `box add` subcommand.

You can add a box to Vagrant with `vagrant box add`. This stores the box under a specific name so that multiple Vagrant environments can re-use it. If you have not added a box yet, do so now. Vagrant will prompt you to select a provider. Type `2` and press Enter to select `Virtualbox`.

```
vagrant box add generic/ubuntu2004
```

This will download the box named `generic/ubuntu2004` from HashiCorp's Vagrant Cloud box catalog, where you can find and host boxes.

### Use a Box

Now you've added a box to Vagrant either by initializing or adding it explicitly, you need to configure your project to use it as a base. Open the `Vagrantfile` and replace the contents with the following.

```
Vagrant.configure("2") do |config|
  config.vm.box = "generic/ubuntu2004"
end
```

### Bring up a virtual machine

Run the following from your terminal:

```
vagrant up
```

In less than a minute, this command will finish and you will have a virtual machine running Ubuntu.

### Destroy a virtual machine

Run the following from your terminal:

```
vagrant destroy XXXXXXX
```

Reference: Vagrant Commands (CLI) (https://developer.hashicorp.com/vagrant/docs/cli)

## Prepared Vagrantfile List

- [Environment: Ubuntu 20.04 with MicroK8S installed](https://github.com/jasonlws/vagrant/tree/main/ubuntu2004_microk8s)

## About Myself

Please reach out to connect with me via [**Linkedin**](https://www.linkedin.com/in/jasonlws).
