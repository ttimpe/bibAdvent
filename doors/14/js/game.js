var xmas = new Phaser.Game(1024, 576, Phaser.CANVAS, 'gc');
var musicLib, bgmusic_1, bgmusic_2, bgmusic_3, hohoho;
var trackNum;
var santa, cursor, lives = 3;
var coinsCollected = 0,starsCollected = 0,giftsCollected = 0,coins;
var santaSlideHeight, santaIdleHeight;
var menuText,menuHover;
var infoGameVersion, infoGameVersionInGame, infoPhaser, infoFreepik,
    infoGameVersionText = 'SAVE THE XMAS! (Demo Version)',
    infoPhaserText = 'Created using Phaser',
    infoFreepikText = 'Loading and menu images are designed by Freepik';
//var loadingText,settingsTextSound,settingsTextMusic,settingsTextFullscreen;
var loadingImageNum = 0;
var musicDisabledByUser = false;
var soundsDisabledByUser = false;
var musicText='Music: ON',soundsText='Sounds: ON',fullscreenText='Fullscreen: NO';

var prePrePreLoad = {
    preload: function(){
        xmas.load.image('loadingBackground', 'media/load/background.png');
        xmas.load.image('loadingChristmasTree', 'media/load/tree.png');
    },

    create: function(){
        xmas.state.start('load');
    }
};

var loadingScreen = {

    create: function(){
        //xmas.stage.backgroundColor = '#182d3b';
        this.loadingBackground = xmas.add.sprite(0,0,'loadingBackground');

        //  You can listen for each of these events from Phaser.Loader
        xmas.load.onLoadStart.add(this.loadStart, this);
        xmas.load.onFileComplete.add(this.fileComplete, this);
        xmas.load.onLoadComplete.add(this.loadComplete, this);
        //loadingText = xmas.add.text(xmas.world.width/2, 500, '', { font: '72px BeyondWonderland', fill: '#000000' });
        //loadingText.anchor.setTo(0.5);

        //music
        xmas.load.audio('bgmusic_1','media/sounds/music/music_1.mp3');
        xmas.load.audio('bgmusic_2','media/sounds/music/music_2.mp3');
        xmas.load.audio('bgmusic_3','media/sounds/music/music_3.mp3');

        //menu sounds
        xmas.load.audio('menuHover','media/sounds/menuHover.mp3');

        //menu images
        xmas.load.image('menuBackground', 'media/menu/background.png');
        xmas.load.image('menuBackgroundAbout', 'media/menu/backgroundAbout.png');
        xmas.load.image('menuButtonPlay', 'media/menu/start_196x316.png');
        xmas.load.image('menuButtonSettings', 'media/menu/settings_105x236.png');
        xmas.load.image('menuButtonAbout', 'media/menu/about_102x260.png');
        xmas.load.image('menuButtonBack', 'media/menu/back_103x250.png');
        xmas.load.image('menuButtonFullscreen', 'media/menu/fullscreen.png');

        //sounds
        xmas.load.audio('hohoho','media/sounds/hohoho.mp3');

        //all tiles
        xmas.load.atlasJSONHash('gameScene', 'media/player/json.png', 'media/player/json.json');
        xmas.load.tilemap('tilemap_1', 'media/tileset/tilemap.json', null, Phaser.Tilemap.TILED_JSON);
        xmas.load.image('tileset_1', 'media/tileset/tileset.png');

        //HUD
        xmas.load.image('hud_heart', 'media/hud/heart_40x40.png', 40, 40);
        xmas.load.image('hud_coin', 'media/hud/coin_40x40.png', 40, 40);
        xmas.load.image('hud_star', 'media/hud/star_40x40.png', 40, 40);

        //particles
        xmas.load.image('particle_0', 'media/particles/0_16x16.png');
        xmas.load.image('particle_1', 'media/particles/1_16x16.png');
        xmas.load.image('particle_2', 'media/particles/2_16x16.png');
        xmas.load.image('particle_3', 'media/particles/3_16x16.png');
        xmas.load.image('particle_4', 'media/particles/4_16x16.png');

        //gift boxes
        xmas.load.image('giftBox_0', 'media/items/gift_0.png');
        xmas.load.image('giftBox_1', 'media/items/gift_1.png');
        xmas.load.image('giftBox_2', 'media/items/gift_2.png');
        xmas.load.image('giftBox_3', 'media/items/gift_3.png');
        xmas.load.image('giftBox_4', 'media/items/gift_4.png');
        xmas.load.image('giftBox_5', 'media/items/gift_5.png');

        xmas.load.start();
    },

    loadStart: function(){
        //loadingText.setText("");
        loadingImageChristmasTree = xmas.add.image(xmas.world.width/2, 480, 'loadingChristmasTree');
        loadingImageChristmasTree.anchor.setTo(0.5,1);
        //loadingImageChristmasTree.scale.setTo(0.45);
    },

    //fileComplete: function(progress, cacheKey, success, totalLoaded, totalFiles){
    fileComplete: function(progress, cacheKey, success){
        //loadingText.setText(progress + "%");
        loadingImageChristmasTree.scale.setTo(progress/100);
        //xmas.world.bringToTop(loadingText);
    },

    loadComplete: function(){
        xmas.time.events.add(Phaser.Timer.SECOND * 2, function(){xmas.state.start('start');}, this);
        //xmas.state.start('start');
    }
};

var startScreen = {

    create: function(){
        // Music -------------------------------------------------------------------------------------------------
        bgmusic_1 = xmas.add.audio('bgmusic_1');
        bgmusic_2 = xmas.add.audio('bgmusic_2');
        bgmusic_3 = xmas.add.audio('bgmusic_3');
        musicLib = [bgmusic_1, bgmusic_2, bgmusic_3];
        trackNum = xmas.rnd.integerInRange(0, musicLib.length-1);
        this.playMusic(trackNum);

        // sounds
        menuHover = xmas.add.audio('menuHover');

        this.menuBackground = xmas.add.sprite(0,0,'menuBackground');

        //text
        menuText = this.add.text(20, 480, 'Save the XMAS!!!',{
            font: '72px BeyondWonderland',
            fill: '#000', align: 'center'
        });

        //buttons
        this.aboutButton = xmas.add.button(160,115,'menuButtonAbout',this.aboutMenu,this);
        this.aboutButton.anchor.setTo(0.5);
        this.aboutButton.scale.setTo(0.9);
        this.aboutButton.onInputOver.add(function(){
            this.aboutButton.scale.setTo(1);
            menuText.text='About';
            //menuHover.play();
            this.hoverSound();
            this.sparkles();
        }, this);
        this.aboutButton.onInputOut.add(function(){
            this.aboutButton.scale.setTo(0.9);
            menuText.text='Save the XMAS!!!';
            //menuHover.play();
            this.hoverSound();
            //this.sparkles();
        }, this);
        this.playButton = xmas.add.button(520,140,'menuButtonPlay',this.playTheGame,this);
        this.playButton.anchor.setTo(0.5);
        this.playButton.scale.setTo(0.9);
        this.playButton.onInputOver.add(function(){
            this.playButton.scale.setTo(1);
            menuText.text='Start';
            //menuHover.play();
            this.hoverSound();
            this.sparkles();
        }, this);
        this.playButton.onInputOut.add(function(){
            this.playButton.scale.setTo(0.9);
            menuText.text='Save the XMAS!!!';
            //menuHover.play();
            this.hoverSound();
            //this.sparkles();
        }, this);
        this.settingsButton = xmas.add.button(820,100,'menuButtonSettings',this.settingsMenu,this);
        this.settingsButton.anchor.setTo(0.5);
        this.settingsButton.scale.setTo(0.9);
        this.settingsButton.onInputOver.add(function(){
            this.settingsButton.scale.setTo(1);
            menuText.text='Settings';
            //menuHover.play();
            this.hoverSound();
            this.sparkles();
        }, this);
        this.settingsButton.onInputOut.add(function(){
            this.settingsButton.scale.setTo(0.9);
            menuText.text='Save the XMAS!!!';
            //menuHover.play();
            this.hoverSound();
            //this.sparkles();
        }, this);

        //fullscreen
        //stretch to fill
        xmas.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
        //keep original size
        //xmas.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;
        //maintain aspect ratio
        //xmas.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        //xmas.input.onDown.add(this.goFullscreen, this);
    },

    sparkles: function(){
        emitter = xmas.add.emitter(xmas.input.mousePointer.x, xmas.input.mousePointer.y);
        emitter.makeParticles(['particle_0','particle_1','particle_2','particle_3','particle_4']);
        emitter.start(false, 666, 20, 10);
    },

    playMusic: function(trackNum){
        if(trackNum > musicLib.length-1){
            trackNum = 0;
        }
        if(!musicLib[trackNum].isPlaying && !musicDisabledByUser){
            musicLib[trackNum].play();
            musicLib[trackNum].volume = 0.5;
        }
        if(!musicDisabledByUser){
            musicLib[trackNum].onStop.addOnce(function(){this.playMusic(trackNum);}, this);
            trackNum++;
        }
    },

    aboutMenu: function(){
        this.background = xmas.add.sprite(0,0,'menuBackgroundAbout');
        this.menuButtonBack = xmas.add.button(160,110,'menuButtonBack',this.goBackFromAboutMenu,this);
        this.menuButtonBack.anchor.setTo(0.5);
        this.menuButtonBack.scale.setTo(0.9);
        this.menuButtonBack.onInputOver.add(function(){
            this.menuButtonBack.scale.setTo(1);
            menuHover.play();
            this.sparkles();
        }, this);
        this.menuButtonBack.onInputOut.add(function(){
            this.menuButtonBack.scale.setTo(0.9);
            menuHover.play();
            //this.sparkles();
        }, this);
        this.menuButtonBack.input.priorityID = 2;
        this.background.inputEnabled = true;
        this.background.input.priorityID = 1;
        //infoGameVersion
        infoGameVersion = xmas.add.text(xmas.world.width/2, 250,infoGameVersionText, { font: '42px BeyondWonderland', fill: '#000000' });
        infoGameVersion.anchor.setTo(0.5);
        infoGameVersion.inputEnabled = true;
        //infoPhaser
        infoPhaser = xmas.add.text(xmas.world.width/2, 300,infoPhaserText, { font: '42px BeyondWonderland', fill: '#000000' });
        infoPhaser.anchor.setTo(0.5);
        infoPhaser.events.onInputDown.add(function(){
            //goto Phaser page
            window.open("http://www.phaser.io","_blank");
        },this);
        infoPhaser.events.onInputOver.add(this.settingsMenuTextOver, this);
        infoPhaser.events.onInputOut.add(this.settingsMenuTextOut, this);
        infoPhaser.inputEnabled = true;
        infoPhaser.input.priorityID = 2;
        //infoFreepik
        infoFreepik = xmas.add.text(xmas.world.width/2, 350,infoFreepikText, { font: '42px BeyondWonderland', fill: '#000000' });
        infoFreepik.anchor.setTo(0.5);
        infoFreepik.inputEnabled = true;
        infoFreepik.input.priorityID = 2;
        infoFreepik.events.onInputDown.add(function(){
            //goto Freepik page
            window.open("http://www.freepik.com","_blank");
        },this);
        infoFreepik.events.onInputOver.add(this.settingsMenuTextOver, this);
        infoFreepik.events.onInputOut.add(this.settingsMenuTextOut, this);
    },

    settingsMenu: function(){
        this.background = xmas.add.sprite(0,0,'menuBackgroundAbout');
        //music button
        settingsTextMusic = xmas.add.text(xmas.world.width/2, 230, musicText, { font: '56px BeyondWonderland', fill: '#000000' });
        settingsTextMusic.anchor.setTo(0.5);
        settingsTextMusic.inputEnabled = true;
        settingsTextMusic.input.priorityID = 2;
        settingsTextMusic.events.onInputDown.add(function(){
            if(settingsTextMusic.text=='Music: ON'){
                musicText = 'Music: OFF';
                settingsTextMusic.text = musicText;
                musicDisabledByUser = true;
                musicLib[trackNum].stop();
            }else{
                musicText = 'Music: ON';
                settingsTextMusic.text = musicText;
                musicDisabledByUser = false;
                musicLib[trackNum].play();
            }
        },this);
        settingsTextMusic.events.onInputOver.add(this.settingsMenuTextOver, this);
        settingsTextMusic.events.onInputOut.add(this.settingsMenuTextOut, this);
        //sounds button
        settingsTextSound = xmas.add.text(xmas.world.width/2, 300, soundsText, { font: '56px BeyondWonderland', fill: '#000000' });
        settingsTextSound.anchor.setTo(0.5);
        settingsTextSound.inputEnabled = true;
        settingsTextSound.input.priorityID = 2;
        settingsTextSound.events.onInputDown.add(function(){
            if(settingsTextSound.text=='Sounds: ON'){
                soundsText = 'Sounds: OFF';
                settingsTextSound.text = soundsText;
                soundsDisabledByUser = true;
            }else{
                soundsText = 'Sounds: ON';
                settingsTextSound.text = soundsText;
                soundsDisabledByUser = false;
            }
        },this);
        settingsTextSound.events.onInputOver.add(this.settingsMenuTextOver, this);
        settingsTextSound.events.onInputOut.add(this.settingsMenuTextOut, this);
        //fullscreen button
        settingsTextFullscreen = xmas.add.text(xmas.world.width/2, 370,fullscreenText, { font: '56px BeyondWonderland', fill: '#000000' });
        settingsTextFullscreen.anchor.setTo(0.5);
        settingsTextFullscreen.inputEnabled = true;
        settingsTextFullscreen.input.priorityID = 2;
        settingsTextFullscreen.events.onInputDown.add(function(){
            this.goFullscreen();
            if(settingsTextFullscreen.text=='Fullscreen: YES'){
                fullscreenText = 'Fullscreen: NO';
                settingsTextFullscreen.text = fullscreenText;
            }else{
                fullscreenText = 'Fullscreen: YES';
                settingsTextFullscreen.text = fullscreenText;
            }
        },this);
        settingsTextFullscreen.events.onInputOver.add(this.settingsMenuTextOver, this);
        settingsTextFullscreen.events.onInputOut.add(this.settingsMenuTextOut, this);
        //back button
        this.menuButtonBack = xmas.add.button(160,110,'menuButtonBack',this.goBackFromSettingsMenu,this);
        this.menuButtonBack.anchor.setTo(0.5);
        this.menuButtonBack.scale.setTo(0.9);
        this.menuButtonBack.onInputOver.add(function(){
            this.menuButtonBack.scale.setTo(1);
            //menuHover.play();
            this.hoverSound();
            this.sparkles();
        }, this);
        this.menuButtonBack.onInputOut.add(function(){
            this.menuButtonBack.scale.setTo(0.9);
            //menuHover.play();
            this.hoverSound();
            //this.sparkles();
        }, this);
        this.menuButtonBack.input.priorityID = 2;
        this.background.inputEnabled = true;
        this.background.input.priorityID = 1;
    },

    settingsMenuTextOver: function(text){
        text.fill = "#ffffff";
    },

    settingsMenuTextOut: function(text){
        text.fill = "#000000";
    },

    hoverSound: function(){
        if(!soundsDisabledByUser){
            menuHover.play();
        }
    },

    goBackFromAboutMenu: function(){
        this.background.destroy();
        this.menuButtonBack.destroy();
        infoGameVersion.destroy();
        infoPhaser.destroy();
        infoFreepik.destroy();
    },

    goBackFromSettingsMenu: function(){
        this.background.destroy();
        this.menuButtonBack.destroy();
        settingsTextMusic.destroy();
        settingsTextSound.destroy();
        settingsTextFullscreen.destroy();
    },

    playTheGame: function(){
        xmas.state.start('main');
    },

    goFullscreen: function(){
        if(xmas.scale.isFullScreen){
            xmas.scale.stopFullScreen();
        }else{
            xmas.scale.startFullScreen(false);
        }
    }
};

var mainState = {
    create: function(){
        hohoho = xmas.add.audio('hohoho');
        xmas.stage.backgroundColor = '#3498db';
        xmas.physics.startSystem(Phaser.Physics.ARCADE);

        this.map = xmas.add.tilemap('tilemap_1');
        this.map.addTilesetImage('winter_tileset', 'tileset_1');

        this.worldBackground = this.map.createLayer('worldBackground');
        this.worldForeground = this.map.createLayer('worldForeground');
        this.coin = this.map.createLayer('coins');
        this.star = this.map.createLayer('stars');
        this.gift = this.map.createLayer('gifts');
        this.ground = this.map.createLayer('ground');
        this.map.setCollisionBetween(1,100, true, this.ground);


        // Text -------------------------------------------------------------------------------------------------
        this.instructions = this.add.text( 11000, 600, 'SAVE THE XMAS! \n  Liked the game? Want more? \n Come back tomorrow, there will be more... Maybe... \n And don\'t forget to buy me a coffee! ;)',
        {
            font: '30px monospace',
            fill: '#fff', align: 'center'
        });
        this.instructions.anchor.setTo(0.5, 0.5);
        //this.instExpire = this.time.now + 1000;

        xmas.world.setBounds(0, 0, 64000, 1024);

        // Santa -------------------------------------------------------------------------------------------------
        santa = xmas.add.sprite(200, 380, 'gameScene', 'santa/idle/001');
        //santa.scale.setTo(0.5,0.5);
        santa.anchor.setTo(1.5, 0.5);
        //santa.pivot.x = 0.5 * santa.width;
        xmas.physics.arcade.enable(santa);
        santa.body.offset.setTo(santa.width, 12);
        santa.body.gravity.y = 500;
        santa.body.collideWorldBounds = true;
        santaFacing = 'facingRight';
        santaState = 'stateIdle';
        santaSlideHeight = santa.height/2;
        santaIdleHeight = santa.height;
        santa.animations.add('santaIdle', Phaser.Animation.generateFrameNames('santa/idle/', 1, 16, '', 3), 11, true, false);
        santa.animations.add('santaRun', Phaser.Animation.generateFrameNames('santa/run/', 1, 11, '', 3), 18, true, false);
        santa.animations.add('santaJump', Phaser.Animation.generateFrameNames('santa/jump/', 1, 16, '', 3), 10, true, false);
        santa.animations.add('santaSlide', Phaser.Animation.generateFrameNames('santa/slide/', 1, 11, '', 3), 10, true, false);
        this.camera.follow(santa);
        xmas.camera.deadzone = new Phaser.Rectangle(xmas.camera.width/2-50, xmas.camera.height/5, xmas.camera.width/8, 100);
        this.cursor = cursor;
        cursor = xmas.input.keyboard.createCursorKeys();
        //DEMO!!!
        infoGameVersionInGame = xmas.add.text(40, 760,'< DEMO VERSION >\n\n < Help Santa to find all gifts >\n\n < Make Christmas Great Again >', { font: '42px BeyondWonderland', fill: '#dddddd' });
        //infoGameVersionInGame.anchor.setTo(0.5);
        //HUD
        //mini-santa
        miniSanta = xmas.add.sprite(0, 10, 'gameScene', 'santa/idle/001');
        miniSanta.fixedToCamera = true;
        miniSanta.scale.setTo(0.4);

        //heart
/*
        hudHeart = xmas.add.sprite(0, 0, 'hud_heart');
        hudHeart.fixedToCamera = true;
        hudHeart.cameraOffset.x = 10;
        hudHeart.cameraOffset.y = 10
*/
        hudHeart = xmas.add.group();
        hudHeart.fixedToCamera = true;
        lives = 3;
        hudHeart.create(xmas.camera.width-60, 10, 'hud_heart');
        hudHeart.create(xmas.camera.width-102, 10, 'hud_heart');
        hudHeart.create(xmas.camera.width-144, 10, 'hud_heart');

        //coin
        hudCoin = xmas.add.sprite(0, 0, 'hud_coin');
        hudCoin.fixedToCamera = true;
        hudCoin.cameraOffset.x = 350;
        hudCoin.cameraOffset.y = 10
        coinsCollected = 0;
        hudCoinText = xmas.add.text(0, 0, coinsCollected,
        {
            font: '40px monospace',
            fill: '#fff'
        });
        hudCoinText.fixedToCamera = true;
        hudCoinText.cameraOffset.x = 400;
        hudCoinText.cameraOffset.y = 10

        //star
        hudStar = xmas.add.sprite(0, 0, 'hud_star');
        hudStar.fixedToCamera = true;
        hudStar.cameraOffset.x = 650;
        hudStar.cameraOffset.y = 10
        starsCollected = 0;
        hudStarText = xmas.add.text(0, 0, starsCollected,
        {
            font: '40px monospace',
            fill: '#fff'
        });
        hudStarText.fixedToCamera = true;
        hudStarText.cameraOffset.x = 700;
        hudStarText.cameraOffset.y = 10


        //collectible
        //coins
        coins = xmas.add.group();
        coins.enableBody = true;
        this.map.createFromObjects('coins', 60, 'hud_coin', 0, true, false, coins);
        //stars
        stars = xmas.add.group();
        stars.enableBody = true;
        this.map.createFromObjects('stars', 70, 'hud_star', 0, true, false, stars);
        //gift boxes
        gifts = xmas.add.group();
        gifts.enableBody = true;
        this.map.createFromObjects('gifts', 80, 'giftBox_'+xmas.rnd.integerInRange(0,5), 0, true, false, gifts);
    },

    update: function(){
        //move mini-santa
        miniSanta.cameraOffset.x = 200/xmas.world.width*santa.x;
        xmas.physics.arcade.collide(santa, this.ground);
        this.moveSanta();
        //collect coins,stars,gifts
        xmas.physics.arcade.overlap(santa, coins, this.collectCoins, null, this);
        xmas.physics.arcade.overlap(santa, stars, this.collectStars, null, this);
        xmas.physics.arcade.overlap(santa, gifts, this.collectGifts, null, this);
        //debug box
/*
        xmas.debug.body(santa, "#00ff00", false);
        xmas.debug.text('Anchor X: ' + santa.anchor.x.toFixed(1) + ' Y: ' + santa.anchor.y.toFixed(1), 32, 32);
        xmas.debug.text('Sprite X: ' + santa.x + ' Y: ' + santa.y, 32, 64);
        xmas.debug.text('Santa width: ' + santa.width + ' height: ' + santa.height, 32, 96);
        xmas.debug.text('Santa bounds: ' + santa.getBounds(), 32, 128);
*/
    },
/*
    render: function(){

        var zone = xmas.camera.deadzone;
        xmas.context.fillStyle = 'rgba(255,200,100,0.6)';
        xmas.context.fillRect(zone.x, zone.y, zone.width, zone.height);

    },
*/
    moveSanta: function(){
        santa.body.velocity.x = 0;
        //run left
        if(cursor.left.isDown){
            if(santaFacing == 'facingRight'){
                santa.scale.x =-1;
            }
            if(santaState != 'stateJump'){
                santa.animations.play('santaRun');
            }
            santa.body.velocity.x = -150;
            santaFacing = 'facingLeft';
        }
        //run right
        else if(cursor.right.isDown){
            if(santaFacing == 'facingLeft'){
                santa.scale.x = 1;
            }
            if(santaState != 'stateJump'){
                santa.animations.play('santaRun');
            }
            santa.body.velocity.x = 150;
            santaFacing = 'facingRight';
        }
        //slide
        else if(cursor.down.isDown && santa.body.onFloor()){
            if(santaFacing == 'facingRight'){
                santa.body.velocity.x = 200;
            }else{
                santa.body.velocity.x = -200;
            }
            santa.animations.play('santaSlide');
            //santa.body.setSize(santa.width, santaSlideHeight);
            if(!hohoho.isPlaying && !soundsDisabledByUser){
                hohoho.play();
                hohoho.volume = 1.5;
            }
            //santa.anchor.setTo(1.5, 0.5);
            //santa.body.setSize(santa.width, santa.height-32, santa.width, 12);
        }
        //idle or in air
        else{
            if(santaState == 'stateIdle'){
                santa.animations.play('santaIdle');
            }
            else if(santaState == 'stateJump'){
                santa.animations.play('santaJump');
            }
        }
        if(!santa.body.onFloor()){
            //santa.body.setSize(santa.width, santaIdleHeight);

        }
        //jump
        if(santa.body.onFloor()){
                santaState = 'stateIdle'
            if(cursor.up.isDown){
                santa.animations.stop();
                santa.animations.play('santaJump');
                santa.body.velocity.y = -372;
                santaState = 'stateJump';
            }
        }
    },

    hohoho: function(){
        hohoho.play();
    },

    collectCoins: function(player, coins){
        coinsCollected += 1;
        hudCoinText.text = coinsCollected;
        emitter = xmas.add.emitter(coins.position.x+16, coins.position.y+16);
        emitter.makeParticles(['particle_0','particle_1','particle_2','particle_3','particle_4']);
        emitter.start(false, 666, 20, 10);
        coins.kill();
    },

    collectStars: function(player, stars){
        starsCollected += 1;
        hudStarText.text = starsCollected;
        emitter = xmas.add.emitter(stars.position.x+16, stars.position.y+16);
        emitter.makeParticles(['particle_0','particle_1','particle_2','particle_3','particle_4']);
        emitter.start(false, 666, 20, 10);
        stars.kill();
    },

    collectGifts: function(player, gifts){
        giftsCollected += 1;
        //hudStarText.text = starsCollected;
        emitter = xmas.add.emitter(gifts.position.x+16, gifts.position.y+16);
        emitter.makeParticles(['particle_0','particle_1','particle_2','particle_3','particle_4']);
        emitter.start(false, 666, 20, 10);
        gifts.kill();
    },

    pause: function(){

    }
}

xmas.state.add('preload', prePrePreLoad);
xmas.state.add('load', loadingScreen);
xmas.state.add('start', startScreen);
xmas.state.add('main', mainState);
//xmas.state.start('start');
xmas.state.start('preload');