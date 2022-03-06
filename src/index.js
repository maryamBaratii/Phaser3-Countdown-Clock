import Phaser from 'phaser';
import blackLayer from './assets/black-layer.png';
import redLayer from './assets/red-layer.png';
import digitalPng from './assets/fonts/digital/digital-7.png';
import digitalXml from './assets/fonts/digital/digital-7.xml';
import {Timer} from "./timer";

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('black-layer', blackLayer);
        this.load.image('red-layer', redLayer);
        this.load.bitmapFont('digital-font', digitalPng, digitalXml)
    }

    create ()
    {
        this.timer = new Timer(this, 400, 300);
        this.timer.start(30);
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 800,
    scene: MyGame
};

const game = new Phaser.Game(config);
