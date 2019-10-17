---
type: project
published: true
date: 2019-10-18
---

# Creative Embedded Systems

For Yale's Creative Embedded Systems course (CPSC 334), I created a number of digital systems with artistic or creative intent. I detail them below, and all source code is available on a GitHub monorepo.

<Button href="https://github.com/sarimabbas/sarim-cs334" external="true">GitHub</Button>

[[toc]]

## Generative art display

<YouTube src="https://www.youtube-nocookie.com/embed/qkOxWb4VdMY"/>

This project utilizes Yale [Becton Cafe's LED panel system](https://news.yale.edu/2013/03/04/led-caf-where-art-and-science-meet). The system is about 450 square feet, comprised of one large internal panel and 15 smaller units dispersed on the walls of the lobby.

The first step was to map the pixel layout of the panels, in other words, to find the relation between the physical and pixel dimensions. Next, I wrote software in Processing to generate emoji that rotate through the displays. A Raspberry Pi outputs Processing via HDMI to the panels. The objective of the art is to engage visitors in dialogue with the space, and viewers can imbue each string of colorful, playfully ambiguous emoji with their own interpreted meaning.

## Game controller

<YouTube src="https://www.youtube.com/embed/MQxkPw-gNHw"/>

This project pulled together many different resources. The controller is a 3D-printed enclosure, from an Adafruit design. Inside, an ESP32 microcontroller is connected to a two-axis joystick, a momentary button, and a single-pole switch. This sensor data is communicated by the ESP32 to a game console, capable of both WiFi and USB serial transmission.

The ESP32 is not HID capable. So, the controller inputs are interpreted by a Python program on the game console (in this case a Raspberry Pi), which transforms them into emulated keypresses. These are sent to the running game. The game itself is a platforming demo built with the Godot game engine and exported to WebAssembly.

The embedded YouTube video is created in a parody style. To view a less revolutionary video, you can [click here for an extended demo of the gameplay](https://www.youtube.com/watch?v=X9wXXtjV6eg).
