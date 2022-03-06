# Phaser 3 Webpack Countdown Clock

<img src="https://github.com/maryamBaratii/Phaser-3-Countdown-Clock/blob/main/demo.gif" height="30%" width="30%" >

A Phaser 3 Countdown Clock with ES6 support via [Babel 7](https://babeljs.io/) and [Webpack 4](https://webpack.js.org/).

Easily add a countdown clock for your Phaser games.

## usage

 ```javascript
import {Timer} from "path/to/timer";
import blackLayer from 'path/to/black-layer.png';
import redLayer from 'path/to/red-layer.png';
import digitalPng from 'path/to/digital-7.png';
import digitalXml from 'path/to/digital-7.xml';

// in preload
this.load.image('black-layer', blackLayer);
this.load.image('red-layer', redLayer);
this.load.bitmapFont('digital-font', digitalPng, digitalXml);

// in create
 let timer = new Timer(this, 400, 300);
 timer.start(30);
 ```
This will show a countdown clock at (400, 300) and it'll start counting down as soon as you call start(seconds) on it.

## options
| Option | Description |
|---------|-------------|
| scene | (required) a reference to the Phaser.Scene object |
| x | (required) the x coordinate for the countdown clock |
| y | (required) the y coordinate for the countdown clock |

## Methods

| Method | Description |
|---------|-------------|
| start(seconds) | starts the timer ("seconds" is the time to count) |
| pause() | pauses the timer |
| resume() | resumes the timer after a pause |

### Graphics
The default timer provided is a red layer on a grey layer. 

![alt text](https://github.com/maryamBaratii/Phaser-3-Countdown-Clock/blob/main//src/assets/red-layer.png?raw=true)
![alt text](https://github.com/maryamBaratii/Phaser-3-Countdown-Clock/blob/main/src/assets/black-layer.png?raw=true)


You can create your own custom graphics: the first layer MUST be the top part, and the second layer is the background optionally.


I hope this helps you in building your game.
