---
title: Homelab
heading: Putting together my homelab
date: 2025-03-14T23:22:38.962Z
author: Mike Thomas
description: Just a few things I use hardware and software for within my homelab.
preview: /assets/blog/homelab/homelab-hero.jpg
slug: /projects/homelab
related:
  - /projects/thinkcenter
  - /projects/thinkpad
  - /projects/single-board-computers
draft: false
tags:
  - Computers
  - Raspberry Pi
categories:
  - Electronics
  - Software
keywords:
  - Computers
  - Raspberry Pi
---

# Table of contents

# Flight Tracker

![FlightAware setup for tracking aircraft](/assets/blog/homelab/flight-tracker.jpg)

As I live fairly close to Cardiff International Airport and notice many aircraft flying over my house I have set up a flight tracker find out some more information about the planes and contribute the flight tracking information to [FlightAware](https://flightaware.com/adsb/stats/user/mikepthomas) for others to benefit from the information too.

# Keyboard, Video, and Mouse Switch (KVM)

![A Raspberry Pi powered KVM Switch](/assets/blog/homelab/pikvm.jpg)

I use a Raspberry Pi 4 under my desk as a KVM switch using [PiKVM](https://pikvm.org/) alongside an [Ezcoo EZ-SW41HA-KVMU3L](https://docs.pikvm.org/ezcoo/) to access 4 machines over my network.

# Network Attached Storage (NAS)

## General Storage

![NAS based on an Odroid XU4](/assets/blog/homelab/odroid-cloudshell2.jpg)

I purchased the [Odroid XU4 and CloudShell enclosure](single-board-computers#hardkernel) to use as a Network Attached Storage (NAS) server to replace an old outdated and failing 1TB Western Digital MyBook World edition NAS.

It also used to be used to run a handful of Docker containers, however, since many containers have dropped 32bit ARM support [I have moved them to their own cluster](#current).

## Backups and Media

- 2TB 2.5" Western Digital Blue £30.00
- 32GB Corsair Vengeance 3000MHz £37.99
- Generic PCIe SATA 3.0 Expansion Card £7.50
- MSI H310M PRO-M2 PLUS for £43.39
- Stone Small Factor case with 250W PSU for £14.12

# Raspberry Pi Clusters

## Original

![My original Raspberry Pi cluster](/assets/blog/homelab/raspberry-pi-2-cluster.jpg)

This was my original Raspberry Pi cluster, It was originally 4 layers however I managed to find a case that fit perfectly to add an additional layer. If you look hard enough, you will see that the fan of the bottom layer is in a slightly different place and the standoffs are slightly shorter.

The cluster was later repurposed to learn [Ansible](https://www.ansible.com) when the Raspberry Pi 2s became a little too slow to run Docker.

## Upgraded

![Updated Raspberry Pi cluster for Docker Swarm](/assets/blog/homelab/raspberry-pi-3-cluster.jpg)

I got this case from eBay, it was not in the best shape, very dusty and scratched, it cost me £68.55 but it did contain 3 Raspberry Pi 3s (including one with broken Wifi and Bluetooth) and a few Micro USB Chargers Ethernet cables. The case also came with a switch that fits at the bottom perfectly.

I cleaned it up with some isopropyl alcohol and re-assembled it with some new screws as some of them were quite rusted.

I assembled this cluster to learn all about Containerization using [Docker Swarm mode](https://docs.docker.com/engine/swarm) and eventually, Kubernetes using [MicroK8s](https://microk8s.io/), however the Raspberry Pi 3s are a little too slow to fully run a K8s cluster with more than a handful of containers.

## Current

![8086 Cluster Hat with 4 Raspberry Pi Zeros](/assets/blog/homelab/raspberry-pi-zero-cluster.jpg)

My Raspberry Pi Zero cluster was assembled using a 8086 Cluster Hat that is quite cool due to it using USB gadget mode of the Raspberry Pi Zero to boot up the Raspberry Pis over USB therefore they do not require their own MicroSD cards and can share the storage of the controller Pi... However after some testing, adding their own SD cards speeds up disk reads and writes considerably under load.

# Rack

## Modular 10" Server Rack

| Item                                                                      | Quantity | Material                                             | Size | Weight | Cost | Printed | Notes |
| ------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [1U_40mm_Fans_MOD10](https://www.printables.com/model/1225275)            | 1        | [eSun ABS+ (Red)](printer-filament#esun-abs-red)     |      |        |      |   :x:   |       |
| [8_Port_Keystone_MOD10](https://www.printables.com/model/1225275)         | 1        | [eSun ABS+ (Red)](printer-filament#esun-abs-red)     |      |        |      |   :x:   |       |
| [Handle_MOD10](https://www.printables.com/model/1225275)                  | 2        | [eSun ABS+ (Red)](printer-filament#esun-abs-red)     |      |        |      |   :x:   |       |
| [Lid_Solid_MOD10](https://www.printables.com/model/1225275)               | 1        | [eSun ABS+ (Red)](printer-filament#esun-abs-red)     |      |        |      |   :x:   |       |
| [Lid_Vented_MOD10](https://www.printables.com/model/1225275)              | 1        | [eSun ABS+ (Red)](printer-filament#esun-abs-red)     |      |        |      |   :x:   |       |
| [Mod_10_Foot](https://www.printables.com/model/1225275)                   | 4        | [Ziro TPU (Black)](printer-filament#ziro-tpu-black)  |      |        |      |   :x:   |       |
| [MOD10_Crossmembers](https://www.printables.com/model/1225275)            | 4        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |      |        |      |   :x:   |       |
| [MOD10_Front_Back_Connectors](https://www.printables.com/model/1225275)   | 8        | [eSun ABS+ (Red)](printer-filament#esun-abs-red)     |      |        |      |   :x:   |       |
| [MOD10_Mid_Modular_Sections_2U](https://www.printables.com/model/1225275) | 2        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |      |        |      |   :x:   |       |
| [MOD10_Side_Connectors](https://www.printables.com/model/1225275)         | 8        | [eSun ABS+ (Red)](printer-filament#esun-abs-red)     |      |        |      |   :x:   |       |
| [MOD10_Top_Bottom_2U](https://www.printables.com/model/1225275)           | 4        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |      |        |      |   :x:   |       |

## M970Q 10" Rack Mount

| Item                                                                              | Quantity | Material                                         | Size | Weight | Cost | Printed | Notes |
| --------------------------------------------------------------------------------- | -------- | ------------------------------------------------ | ---- | ------ | ---- | :-----: | ----- |
| [Lenovo Thinkcentre Tiny 1U Rack Mount](https://www.printables.com/model/1040412) | 2        | [eSun ABS+ (Red)](printer-filament#esun-abs-red) |      |        |      |   :x:   |       |

## Raspberry Pi 10" Rack Mount

| Item                                                                         | Quantity | Material                                             | Size | Weight | Cost | Printed | Notes |
| ---------------------------------------------------------------------------- | -------- | ---------------------------------------------------- | ---- | ------ | ---- | :-----: | ----- |
| [10' - 1U - 3 RPI - Base](https://www.printables.com/model/952392)           | 2        | [eSun ABS+ (Red)](printer-filament#esun-abs-red)     |      |        |      |   :x:   |       |
| [10' - 1U - 3 RPI - RPI 4 - Left](https://www.printables.com/model/952392)   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |      |        |      |   :x:   |       |
| [10' - 1U - 3 RPI - RPI 4 - Middle](https://www.printables.com/model/952392) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |      |        |      |   :x:   |       |
| [10' - 1U - 3 RPI - RPI 4 - Right](https://www.printables.com/model/952392)  | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |      |        |      |   :x:   |       |
| [10' - 1U - 3 RPI - RPI 5 - Left](https://www.printables.com/model/952392)   | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |      |        |      |   :x:   |       |
| [10' - 1U - 3 RPI - RPI 5 - Middle](https://www.printables.com/model/952392) | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |      |        |      |   :x:   |       |
| [10' - 1U - 3 RPI - RPI 5 - Right](https://www.printables.com/model/952392)  | 1        | [eSun ABS+ (Black)](printer-filament#esun-abs-black) |      |        |      |   :x:   |       |

# Gaming PC

![My water cooled gaming PC](/assets/blog/homelab/gaming-pc.jpg)

My current gaming PC is starting to show it's age now, it's still running the 40th anniversary limited-edition Core i7-8086K and a Nvidia GeForce GTX 1080 cooled by water with EK water blocks.

# VR Room

![The first iteration of the VR Room](/assets/blog/homelab/vr-room-mk1.jpg)

The first iteration of the VR room designed to be able to compose me playing VR games in real time in a third person view to be streamed on twitch.

![Getting a larger green screen to be able to record further away](/assets/blog/homelab/vr-room-mk2.jpeg)

The first creen was a little small to film anything other than me standing in front of, to allow a full third person view I needed to purchase a wider screen to allow me to be filmed from further back.

![The final iteration of the VR room](/assets/blog/homelab/vr-room-mk3.jpg)

When I moved house I had a larger space to play with therefore I decided to extend the screen accross another wall to allow better angles.

![Lighting and Camera setup to record myself in front of the green screen](/assets/blog/homelab/lighting.jpg)

I also invested in a few umbrella lights to fully illuminate the screen properly. I ended up with 3 of these umbrella lights, 2 to illuminate the screen and one to illuminate my whilst I played.
Eventually I upgraded the bulbs to hue colour changing ones to allow me to sync the colours being projected on my with what was happening on screen.

![Beat Saber in front of a green screen](/assets/blog/homelab/beat-saber.jpg)

An early example of what the video looked like after composition.
