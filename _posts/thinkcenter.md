---
title: Thinkcenter
heading: Getting small machines to create a Proxmox cluster
date: 2025-03-14T23:22:38.962Z
lastmod: 2025-04-07T19:56:12.173Z
author: Mike Thomas
description: Making old outdated machines do modern things.
preview: /assets/blog/thinkcenter/thinkcenter-hero.jpg
slug: /projects/thinkcenter
related:
  - /projects/thinkpad
draft: false
tags:
  - Computers
categories:
  - Electronics
  - Software
keywords:
  - Computers
  - Lenovo
  - Thinkcenter
---

# Table of contents

# Intro

My first Thinkcenter was bought to replace my old “Shed Server” an old HP 3ghz pentium 4 pc with 1gb of ram that I rescued from e-waste from work.

I upgraded it with a 320GB Western digital raptor drive and installed a student edition of windows server 2008 to run my website via IIS before I used to host it on GitHub Pages.

It was affectionately called the “Shed Server” as it was installed in my garden shed and connected to the internet via WiFi in my flat whilst I was in University.

It was likely due to this, why it eventually went to [Silicon Heaven](https://www.youtube.com/watch?v=lm6YnAqPv4w), probably due to the extreme changes in temperature, humidity or by being a home to many a spider.

The replacement for "Shed Server" was named "Lenny" (just because it is a Lenovo) and going forward my Proxmox cluster name of Thinkcenter Tinys has inherited the Monika.

# The Machines

## Small Form Factor

| CPU           | Case     | Flashed with        | Bluetooth | Wifi                           | Extra | HDD                  | Memory             | Notes |
| ------------- | -------- | ------------------- | --------- | ------------------------------ | ----- | -------------------- | ------------------ | ----- |
| Core2Duo-6600 | A55 9638 | Windows Server 2008 |           | TP-Link Wireless-N PCI Adapter |       | 320GB WD Raptor 3.5" | 4GB Samsung 666MHz |       |

## Tiny 1L

| CPU      | Case  | Flashed with                           | Bluetooth                | Wifi                             | Extra                                     | NVME SDD                         | Memory                | Notes                                          |
| -------- | ----- | -------------------------------------- | ------------------------ | -------------------------------- | ----------------------------------------- | -------------------------------- | --------------------- | ---------------------------------------------- |
| i5-8500T | M720Q | [Proxmox VE](https://www.proxmox.com/) |                          |                                  | Intel PRO I350 Quad Port Gigabit Ethernet | 1TB Crucial P3 Plus M.2 NVME SSD | 16GB Ramaxel 2666MHz  | With Lenovo VESA Mount to mount to wall        |
| i5-8500T | M720Q | [Proxmox VE](https://www.proxmox.com/) | Intel Bluetooth wireless | Intel Wireless 8265, No Antenna  | 1TB WD Black 2.5" SATA HDD                | 256GB WD Black M.2 NVME SSD      | 32GB Hypertec 2400MHz | Will be installed in [10" Rack](homelab#rack)  |
| i5-8500T | M720Q | [Proxmox VE](https://www.proxmox.com/) | Intel Bluetooth wireless | Intel Wireless 8265, No Antenna  | 256GB Samsung 2.5" SATA SSD               |                                  | 32GB Hypertec 2400MHz | Will be installed in [10" Rack](homelab#rack)  |
| i5-8500T | M720Q | [Proxmox VE](https://www.proxmox.com/) | Intel Bluetooth wireless | Intel Wireless 8265, No Antenna  | 256GB Samsung 2.5" SATA SSD               |                                  | 32GB Hypertec 2400MHz | Will be installed in [10" Rack](homelab#rack)  |
| i5-8400T | M720Q | Windows 11 Pro 64                      |                          |                                  | 256GB Micron 1300 2.5" SATA SSD           |                                  | 16GB Micron 2133MHz   |                                                |
| i5-8400T | M720Q | Windows 11 Pro 64                      | Intel Bluetooth wireless | Intel Wireless 8265              | 256GB Micron 1300 2.5" SATA SSD           |                                  | 16GB SK Hynix 2400MHz |                                                |
| i5-9400T | M720Q | Windows 11 Pro 64                      |                          |                                  | 256GB Micron 1300 2.5" SATA SSD           |                                  | 16GB SK Hynix 2666MHz |                                                |
| i5-9400T | M720Q | Windows 11 Pro 64                      | Intel Bluetooth wireless | Intel Wireless 8265              | 256GB Micron 1300 2.5" SATA SSD           |                                  | 16GB SK Hynix 2666MHz |                                                |
| i7-7700T | M710Q | Windows 10 Pro 64                      | Intel Bluetooth wireless | Intel Dual Band Wireless-AC 3165 | 1TB WD Blue 2.5" SATA HDD                 | 512GB Micron 3400 M.2 NVME SSD   | 16GB Micron 2666MHz   | Currently using as a basic desktop replacement |
