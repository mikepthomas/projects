---
title: Thinkcenter
heading: Getting small machines to create a Proxmox cluster
date: 2025-03-14T23:22:38.962Z
lastmod: 2025-08-28T16:41:34.471Z
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

### Router

| CPU      | Case  | Flashed with                                    | Bluetooth | Wifi | Extra                                                                   | NVME SDD                       | Memory               | Notes                                   |
| -------- | ----- | ----------------------------------------------- | --------- | ---- | ----------------------------------------------------------------------- | ------------------------------ | -------------------- | --------------------------------------- |
| i5-8500T | M720Q | [Proxmox VE (8.4.11)](https://www.proxmox.com/) |           |      | 256GB Sandisk 2.5" SATA SSD & Intel PRO I350 Quad Port Gigabit Ethernet | 512GB Micron 3400 M.2 NVME SSD | 16GB Ramaxel 2666MHz | With Lenovo VESA Mount to mount to wall |

> [!NOTE]
> This machine will not be part of the main Proxmox cluster but will replace my main router with a OPNsense VM, and will also host VMs for [Proxmox Datacenter Manager](https://www.proxmox.com/en/about/company-details/press-releases/proxmox-datacenter-manager-alpha) and [Sonatype Nexus Repository Community Edition](https://www.sonatype.com/products/nexus-community-edition-download)

### Proxmox Cluster

| CPU      | Case  | Flashed with                                    | Bluetooth                | Wifi                            | Extra                                                                   | NVME SDD                         | Memory                | Notes                                         |
| -------- | ----- | ----------------------------------------------- | ------------------------ | ------------------------------- | ----------------------------------------------------------------------- | -------------------------------- | --------------------- | --------------------------------------------- |
| i5-8500T | M720Q | [Proxmox VE (8.4.11)](https://www.proxmox.com/) | Intel Bluetooth wireless | Intel Wireless 8265, No Antenna | 256GB Sandisk 2.5" SATA SSD & Intel PRO I350 Quad Port Gigabit Ethernet | 1TB Crucial P3 Plus M.2 NVME SSD | 32GB Hypertec 2400MHz | Will be installed in [10" Rack](homelab#rack) |
| i5-8500T | M720Q | [Proxmox VE (8.4.11)](https://www.proxmox.com/) | Intel Bluetooth wireless | Intel Wireless 8265, No Antenna | 256GB Samsung 2.5" SATA SSD                                             | 1TB Crucial P3 Plus M.2 NVME SSD | 32GB Hypertec 2400MHz | Will be installed in [10" Rack](homelab#rack) |
| i5-8500T | M720Q | [Proxmox VE (8.4.11)](https://www.proxmox.com/) | Intel Bluetooth wireless | Intel Wireless 8265, No Antenna | 256GB Samsung 2.5" SATA SSD                                             | 1TB Crucial P3 Plus M.2 NVME SSD | 32GB Hypertec 2400MHz | Will be installed in [10" Rack](homelab#rack) |

### Desktops

| CPU      | Case  | Flashed with                                   | Bluetooth                | Wifi                             | Extra                           | NVME SDD                    | Memory                | Notes                                                           |
| -------- | ----- | ---------------------------------------------- | ------------------------ | -------------------------------- | ------------------------------- | --------------------------- | --------------------- | --------------------------------------------------------------- |
| i5-8400T | M720Q | Windows 11 Pro 64                              |                          |                                  | 256GB Micron 1300 2.5" SATA SSD |                             | 16GB Micron 2133MHz   |                                                                 |
| i5-8400T | M720Q | Windows 11 Pro 64                              | Intel Bluetooth wireless | Intel Wireless 8265              | 256GB Micron 1300 2.5" SATA SSD |                             | 16GB Micron 2666MHz   |                                                                 |
| i5-9400T | M720Q | Windows 11 Pro 64                              |                          |                                  | 256GB Micron 1300 2.5" SATA SSD |                             | 16GB SK Hynix 2666MHz |                                                                 |
| i5-9400T | M720Q | Windows 11 Pro 64                              | Intel Bluetooth wireless | Intel Wireless 8265              | 256GB Micron 1300 2.5" SATA SSD |                             | 16GB SK Hynix 2666MHz |                                                                 |
| i7-7700T | M710Q | [Proxmox VE (9.0.5)](https://www.proxmox.com/) | Intel Bluetooth wireless | Intel Dual Band Wireless-AC 3165 | 1TB WD Black 2.5" SATA HDD      | 256GB WD Black M.2 NVME SSD | 16GB SK Hynix 2400MHz | Currently using to test upgrade to Proxmox 9 with Debian Trixie |

# Sonatype Nexus Repository

As most of the Operating Systems I use are based upon Debian I have chosen to install Nexus to host APT proxies for the main Debian repositories so that updates will only be downloaded once and each machine can then retrieve the local copy from Nexus rather than having to re-download the updates from the internet.

## Download Nexus and Install to `/srv`

```sh
cd Downloads/
wget https://download.sonatype.com/nexus/3/nexus-3.83.1-03-linux-x86_64.tar.gz
tar xvf nexus-3.83.1-03-linux-x86_64.tar.gz
sudo mv nexus-3.83.1-03 /srv
sudo mv sonatype-work/ /srv
sudo adduser nexus --system
sudo chown -R nexus:nogroup /srv/nexus-3.83.1-03/
sudo chown -R nexus:nogroup /srv/sonatype-work/
```

## Update Config

Add the following to `/srv/nexus-3.83.1-03/bin/nexus.rc`:

```
run_as_user="nexus"
```

Add the following to `/srv/nexus-3.83.1-03/bin/nexus.vmoptions`:

```
# Updated Memory Size
  -Xms1200m
  -Xmx1200m
  -XX:MaxDirectMemorySize=2G
# Added User Root to fix file permissions error on nexus boot
-Djava.util.prefs.userRoot=../sonatype-work/nexus3/javaprefs
```

## Install As Service

Create a symbolic link to the binary of the latest Nexus version:

```sh
sudo ln -s /srv/nexus-3.83.1-03/bin/nexus /etc/init.d/nexus
```

Create the file `/etc/systemd/system/nexus.service` with the content:

```
[Unit]
Description=nexus service
After=network.target

[Service]
Type=forking
LimitNOFILE=65536
ExecStart=/etc/init.d/nexus start
ExecStop=/etc/init.d/nexus stop
User=nexus
Restart=on-abort
TimeoutSec=600

[Install]
WantedBy=multi-user.target
```

Enable and start the service and check the logs:

```sh
sudo systemctl daemon-reload
sudo systemctl enable nexus.service
sudo systemctl start nexus.service
journalctl -xeu nexus.service
tail -f /srv/sonatype-work/nexus3/log/nexus.log
cat /srv/sonatype-work/nexus3/log/nexus.log | grep ERROR
cat /srv/sonatype-work/nexus3/log/nexus.log | grep WARN
```

## Nexus Frontend

```sh
cat /opt/sonatype-work/nexus3/admin.password
```

- Visit http://localhost:8081/
- Change Admin Password
- Add APT Proxies
  - [adoptium](https://packages.adoptium.net/artifactory/deb)
  - [debian](http://deb.debian.org/debian/)
  - [debian-security](http://security.debian.org/debian-security/)
  - [docker-debian](https://download.docker.com/linux/debian)
  - [docker-raspbian](https://download.docker.com/linux/raspbian)
  - [mozilla](https://packages.mozilla.org/apt)
  - [openmediavault-packages](https://openmediavault.github.io/packages/)
  - [openmediavault-public](http://packages.openmediavault.org/public/)
  - [pi-top-os](https://packages.pi-top.com/pi-top-os/debian/)
  - [proxmox-bs](http://download.proxmox.com/debian/pbs)
  - [proxmox-dm](http://download.proxmox.com/debian/pdm)
  - [proxmox-ve](http://download.proxmox.com/debian/pve)
  - [raspbian](http://raspbian.raspberrypi.org/raspbian/)
  - [raspi](http://archive.raspberrypi.com/debian/)

# Proxmox Virtual Environment (VE)

Each of the nodes that I want to run Proxmox on will be set up with the following config.

## Proxmox VE Post Install Script

```sh
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/tools/pve/post-pve-install.sh)"
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/tools/pve/scaling-governor.sh)"
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/tools/pve/microcode.sh)"
```

## Update APT Repositories

```sh
nano /etc/apt/auth.conf.d/nexus.mikethomas.info.conf
nano /etc/apt/sources.list
nano /etc/apt/sources.list.d/ceph.list
nano /etc/apt/sources.list.d/pve-enterprise.list
nano /etc/apt/sources.list.d/pbs-enterprise.list
nano /etc/apt/sources.list.d/pve-install-repo.list
nano /etc/apt/sources.list.d/pbs-install-repo.list
nano /etc/apt/sources.list.d/pvetest-for-beta.list
nano /etc/apt/sources.list.d/pbstest-for-beta.list
```

## Install Useful tools

```sh
apt update
apt install avahi-daemon htop net-tools
systemctl status avahi-daemon
htop
ifconfig
```

## Microcode

### AMD

```sh
apt list --installed | grep microcode
apt install amd64-microcode
dmesg | grep microcode
```

### Intel

```sh
apt list --installed | grep microcode
apt install intel-microcode
dmesg | grep microcode
```

## Sensors

```sh
apt install lm-sensors
modprobe nct6683 force=on
sensors
```

## Update Container images

```sh
pveam update
```

## HDMI audio crackling fix

```sh
echo "options snd-hda-intel enable_msi=1" >> /etc/modprobe.d/snd-hda-intel.conf
```

## PCI(e) Passthrough

### Verify IOMMU is enabled

```sh
dmesg | grep -e AMD -e DMAR -e IOMMU
```

There should be a line that looks like "DMAR: IOMMU enabled". If there is no output, something is wrong.

### Verify IOMMU interrupt remapping is enabled

```sh
dmesg | grep 'remapping'
```

You should see one of the following lines:

```
AMD-Vi: Interrupt remapping enabled
DMAR-IR: Enabled IRQ remapping in x2apic mode ('x2apic' can be different on old CPUs, but should still work)
```

### Enable IOMMU

#### AMD

update to the following in /etc/default/grub:

```
GRUB_CMDLINE_LINUX="iommu=pt pcie_acs_override=downstream initcall_blacklist=sysfb_init"
```

#### Intel

update to the following in /etc/default/grub:

```
GRUB_CMDLINE_LINUX="intel_iommu=on iommu=pt initcall_blacklist=sysfb_init"
```

#### Update grub

```sh
update-grub
reboot
cat /proc/cmdline
```

### VFIO

```sh
echo "vfio" >> /etc/modules
echo "vfio_iommu_type1" >> /etc/modules
echo "vfio_pci" >> /etc/modules
update-initramfs -u -k all
```

#### Get Hardware IDs

```sh
lspci -nnk | grep -e 'AMD' -e 'Intel'
pvesh get /nodes/{nodename}/hardware/pci --pci-class-blacklist ""
```

#### AMD

```sh
echo "options vfio-pci ids=1002:67df,1002:aaf0 disable_vga=1" >> /etc/modprobe.d/vfio.conf
echo "softdep radeon pre: vfio-pci" >> /etc/modprobe.d/vfio.conf
echo "softdep amdgpu pre: vfio-pci" >> /etc/modprobe.d/vfio.conf
```

#### Intel

```sh
echo "options vfio-pci ids=8086:5912,8086:a2f0 disable_vga=1" >> /etc/modprobe.d/vfio.conf
echo "softdep i915 pre: vfio-pci" >> /etc/modprobe.d/vfio.conf
echo "softdep snd_hda_intel pre: vfio-pci" >> /etc/modprobe.d/vfio.conf
echo "softdep snd_hda_codec_hdmi pre: vfio-pci" >> /etc/modprobe.d/vfio.conf
```

#### Verify Enabled

```sh
reboot
dmesg | grep -i vfio
lsmod | grep vfio
```

### Dump GPU BIOS

```sh
cd /sys/bus/pci/devices/0000:01:00.0/
echo 1 > rom
cat rom > /usr/share/kvm/r9270.bin
echo 0 > rom
```

### Mediated Devices (vGPU, GVT-g)

```sh
echo "i915.enable_gvt=1" >> /etc/modules
ls /sys/bus/pci/devices/0000:00:02.0/mdev_supported_types
lsmod | grep kvmgt
dmesg | grep -iE "gvt"
cat /sys/module/kvm_intel/parameters/nested
```

# Proxmox Backup Server (BS)

## Proxmox BS Post Install Script

```sh
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/tools/pve/post-pbs-install.sh)"
bash -c "$(curl -fsSL https://raw.githubusercontent.com/community-scripts/ProxmoxVE/main/tools/pve/pbs_microcode.sh)"
```

## Create Datastore

- Navigate to https://{hostname}.local:8007
- login
- Add Datastore

# Setup Virtual Environment Nodes

## Setup Network

- Node -> System -> Network -> Linux Bridge -> Edit -> VLAN aware
- Node -> System -> Network -> DNS
  - Add 8.8.8.8
  - Add 8.8.4.4

## Add Resource Mappings

- Datacenter -> Resource Mappings -> PCI Devices -> Add
  - GPU1 = 0000:00:02.0
  - Sound = 0000:00:1f.3
  - WiFi = 0000:02:00.0

- Datacenter -> Resource Mappings -> USB Devices -> Add
  - Bluetooth = 8087:0a2a
  - Keyboard1 = 05af:8277
  - Mouse1 = 045e:076c

## Connect to Grafana

- Datacenter -> Metric Server -> Add -> InfluxDB
  - Name = cbridge
  - Enabled = Yes
  - Server = cbridge.local
  - Port = 8089

## Add Remote Storage

### Proxmox Backup Server

- Datacenter -> Storage -> Add -> Proxmox Backup Server
- Remove `VZDump backup` file from `local` Directory storage

### NAS

- Datacenter -> Storage -> Add -> NFS
  - Remove `Disk image` and Add `ISO image` and `Container template`
- Upload ISO images
  - Debian 13 KDE
  - Windows 10
  - Windows 11
  - Virtio Windows Drivers
- Download Container templates
  - debian-12-standard
  - ubuntu-24.04-standard
