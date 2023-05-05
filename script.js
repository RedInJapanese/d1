class Scene5 extends Phaser.Scene {
    constructor() {
        super('Scene5');
    }
    preload(){
        this.load.image('thin', './assets/pixil-frame-0.png');
        this.load.image('bg', './assets/bg.jpg')
        this.load.audio("song", ['./assets/song.mp3'])
    }
    create(){
        this.add.image(400,400,'bg')
        let bgm = this.sound.add("song", {loop: false})
        bgm.play()
        this.title = this.add.text(
            5000, //x
            320,//y
            "Computer Simulator", //text
            {
                font: "70px Impact",
                color: "#000000",
            } //style
        );
        this.play = this.add.text(
            5000, //x
            450,//y
            "Play", //text
            {
                font: "50px Impact",
                color: "#000000",
            } //style
        );
        this.settings = this.add.text(
            5000, //x
            550,//y
            "Settings", //text
            {
                font: "50px Impact",
                color: "#000000",
            } //style
        );
        this.quit = this.add.text(
            5000, //x
            650,//y
            "Quit", //text
            {
                font: "50px Impact",
                color: "#000000",
            } //style
        );
        this.tweens.add({
            targets: this.title,
            x:50,
            duration: 2000,
            ease: 'Linear',
            repeat: 0,
        });
        this.tweens.add({
            targets: this.play,
            x:50,
            duration: 3000,
            ease: 'Linear',
            repeat: 0,
        });
        this.tweens.add({
            targets: this.settings,
            x:50,
            duration: 4000,
            ease: 'Linear',
            repeat: 0,
        });
        this.tweens.add({
            targets: this.quit,
            x:50,
            duration: 5000,
            ease: 'Linear',
            repeat: 0,
        });
    }
    update(){}
}


class Scene4 extends Phaser.Scene {
    constructor() {
        super('Scene4');
    }
    preload(){
        this.load.image('thin', './assets/pixil-frame-0.png');
        this.load.image('bg', './assets/bg.jpg')
        this.load.image('paperclip', './assets/clip.png')
        this.load.audio("boom", ['./assets/boom.mp3'])
    }
    create(){
        this.graphics = this.add.graphics();
        // add shapes
        this.graphics.fillStyle(0xff0000, 1); //color, opacity
        this.graphics.fillTriangle(350, 150, 300, 250, 400, 250); //x1, y1, x2, y2, x3, y3
        this.graphics.fillTriangle(50, 150, 0, 250, 100, 250); //x1, y1, x2, y2, x3, y3

        this.add.image(400,400,'thin')
        let sprite = this.add.image(200,300,'paperclip')
        sprite.setScale(5)
  
        this.textObject = this.add.text(
            400, //x
            320,//y
            "Yeah.... You should start running... Like... Now", //text
            {
                font: "20px Arial",
                color: "#ffffff",
            } //style
        );
        this.cameras.main.fadeIn(6000);
        this.time.addEvent({
            delay: 3000, 
            loop:false,
            callback: () => {
                this.scene.start("Scene5")
            }
        })
    }
    update(){}
}



class Scene3 extends Phaser.Scene {
    constructor() {
        super('Scene3');
    }
    preload(){
        this.load.image('thin', './assets/pixil-frame-0.png');
        this.load.image('bg', './assets/bg.jpg')
        this.load.image('paperclip', './assets/clip.png')
        this.load.audio("boom", ['./assets/boom.mp3'])
    }
    create(){
        let effect = this.sound.add("boom", {loop: false})
        effect.play()
        this.add.image(400,400,'bg')
        this.add.image(400,400,'thin')
        let sprite = this.add.image(200,0,'paperclip')
        sprite.setScale(5)

        this.tweens.add({
            targets: sprite,
            y: 300,
            duration: 500,
            repeat: 0
        });
        this.time.addEvent({
            delay: 3000, 
            loop:false,
            callback: () => {
                this.scene.start("Scene4")
            }
        })
    }
    update(){}
}


class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }
    preload(){
        this.load.image('thin', './assets/pixil-frame-0.png');
        this.load.image('bg', './assets/bg.jpg')
    }
    create(){
        this.add.image(400,400,'bg')
        this.add.image(400,400,'thin')
        this.graphics = this.add.graphics();


        this.textObject = this.add.text(
            400, //x
            320,//y
            "To live in your computer?", //text
            {
                font: "20px Arial",
                color: "#000000",
            } //style
        );
        this.cameras.main.fadeIn(6000);
        this.time.addEvent({
            delay: 3000, 
            loop:false,
            callback: () => {
                this.scene.start("Scene3")
            }
        })
    }
    update(){}
}



class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
    }
    preload(){
        this.load.image('thin', './assets/pixil-frame-0.png');
    }
    create(){
        this.add.image(400,400,'thin')
        this.graphics = this.add.graphics();


        this.textObject = this.add.text(
            400, //x
            320,//y
            "Can you imagine what it would be like...", //text
            {
                font: "20px Arial",
                color: "#ffffff",
            } //style
        );
        this.cameras.main.fadeIn(6000);
        this.time.addEvent({
            delay: 3000, 
            loop:false,
            callback: () => {
                this.scene.start("Scene2")
            }
        })
    }
    update(){}
}


class Logo extends Phaser.Scene {
    constructor() {
        super('Logo');
    }
    preload(){
        this.load.image('thing', './assets/logo.png');
    }
    create(){
        this.add.image(600,500,'thing')
        this.graphics = this.add.graphics();


        this.textObject = this.add.text(
            500, //x
            590,//y
            "Fish Fish", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );
        this.textObject = this.add.text(
            510, //x
            630,//y
            "Games", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );
        this.textObject = this.add.text(
            500, //x
            680,//y
            "Presents", //text
            {
                font: "40px Arial",
                color: "#ffffff",
            } //style
        );
        this.cameras.main.fadeIn(6000);
        this.time.addEvent({
            delay: 3000, 
            loop:false,
            callback: () => {
                this.scene.start("Scene1")
            }
        })
    }
    update(){
    }
}



let config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 1000,
    scene: [
        Logo,
        Scene1,
        Scene2,
        Scene3,
        Scene4,
        Scene5
    ]
}

let game = new Phaser.Game(config)




