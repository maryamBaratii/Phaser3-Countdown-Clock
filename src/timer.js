export class Timer {
    constructor(scene, x, y) {
        this.scene = scene;

        this.blackLayer = this.scene.add.sprite(x, y, 'black-layer');
        this.redLayer = this.scene.add.sprite(x, y, 'red-layer');

        this.shape = this.scene.make.graphics();
        this.shape.fillStyle(0xffffff);
        this.shape.slice(this.redLayer.x, this.redLayer.y, this.redLayer.displayWidth / 2, Phaser.Math.DegToRad(270), Phaser.Math.DegToRad(0), true);
        this.shape.fillPath();

        this.mask = this.shape.createGeometryMask();
        this.redLayer.setMask(this.mask);

        this.seconds = 30;
        this.timerText = this.scene.add.bitmapText(x, y, 'digital-font', this.seconds).setScale(1.5).setOrigin(0.5);
        this.timerText.setTint(0xFE0101);

        this.timeEvent = scene.time.addEvent({
            delay: 1000,                // ms
            callback: this.timeEventCallback,
            callbackScope: this,
            repeat: - 1
        });
        this.timeEvent.paused = true;

        this.counter = {};
    }

    timeEventCallback(){
        this.seconds--;
        this.timerText.setText(this.seconds >= 10 ? this.seconds : `0${this.seconds}`);
        if(this.seconds === 0) {
            this.timeEvent.paused = true;
            this.seconds = 30;
            this.shape.clear();
            this.shape.slice(this.redLayer.x, this.redLayer.y, this.redLayer.displayWidth / 2, Phaser.Math.DegToRad(270), Phaser.Math.DegToRad(0), true);
            this.shape.fillPath();
        }
    }

    start(seconds) {
        this.timeEvent.paused = false;
        this.seconds = seconds;
        this.timerText.setText(this.seconds);
        this.counter = this.scene.tweens.addCounter({
            from: 0,
            to: 359,
            duration: this.seconds * 1000,
            onUpdate: (tween) => {
                let t = tween.getValue();
                this.shape.clear();
                this.shape.slice(this.redLayer.x, this.redLayer.y, this.redLayer.displayWidth / 2, Phaser.Math.DegToRad(270), Phaser.Math.DegToRad(270 + t), true);
                this.shape.fillPath();
            }
        });
    }
    pause(){
        this.timeEvent.paused = true;
        this.counter.pause();
    }
    resume(){
        this.timeEvent.paused = false;
        this.counter.resume();
    }
}
