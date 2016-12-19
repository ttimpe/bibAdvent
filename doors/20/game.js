$(function() {
  window.keydown = {};

  function keyName(event) {
    return jQuery.hotkeys.specialKeys[event.which] ||
      String.fromCharCode(event.which).toLowerCase();
  }

  $(document).bind("keydown", function(event) {
    keydown[keyName(event)] = true;
  });

  $(document).bind("keyup", function(event) {
    keydown[keyName(event)] = false;
  });
});

var SCORE = 0;

var CANVAS_WIDTH = 480;
var CANVAS_HEIGHT = 320;

var canvasElement = document.getElementById("canvas");


if(canvasElement.getContext){

var ctx = canvasElement.getContext("2d");

var FPS = 30;
setInterval(function() {
  update();
  draw();
}, 1000/FPS);


var textX = 50;
var textY = 50;

var textX = 50;
var textY = 50;
ctx.font ="20px Helvetica";
ctx.fillText("Score:-",50,50);

function drawText(){
  ctx.font ="20px Helvetica";
  ctx.fillText("score: " + SCORE,10,25);
}

$(document).bind("keydown", "left", function() {});

function update(){
  if(keydown.left){
    player.x -= 5;
  }
  if(keydown.right){
    player.x += 5;
  }

  player.x = player.x.clamp(0, CANVAS_WIDTH - player.width);



  enemies.forEach(function(enemy){
    enemy.update();
  });

  enemies = enemies.filter(function(enemy){
    return enemy.active;
  });

  if(Math.random() < 0.06){
    enemies.push(Enemy());
  }

  handleCollisions();



};

function draw(){
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  player.draw();

  enemies.forEach(function(enemy){
    enemy.draw();
  });

  drawText();

};

}else{
  alert("Dein Browser unterstützt das <canvas> Element nicht");
}

var player = {
    color: "#00A",
    x: 220,
    y: 270,
    width: 64,
    height: 64,
    draw: function(){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

Number.prototype.clamp = function(min, max){
  return Math.min(Math.max(this,min), max);
};




player.sprite = Sprite("santa");

player.draw = function(){
  this.sprite.draw(ctx, this.x , this.y);
};






player.midpoint = function(){
  return{
    x: this.x + this.width/2,
    y: this.y + this.height/2
  }
};

player.explode = function() {
  this.active = false;
  SCORE++;
};

enemies = [];


function Enemy(I){
  I = I || {};

  I.active = true;
  I.age = Math.floor(Math.random() * 128);

  I.color = "#A2B";

  I.x = CANVAS_WIDTH / 4 + Math.random() * CANVAS_WIDTH / 2;
  I.y = 0;
  I.xVelocity = 0;
  I.yVelocity = 2;

  I.width = 64;
  I.height = 64;

  I.inBounds = function(){
    return I.x >= 0 && I.x <= CANVAS_WIDTH && I.y >= 0 && I.y <= CANVAS_HEIGHT;
  };

  I.sprite = Sprite("present");

  I.draw = function(){
    /*ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y,this.width,this.height);*/
    this.sprite.draw(ctx, this.x , this.y);
  };

  I.update = function(){
    I.x += I.xVelocity;
    I.y += I.yVelocity;

    I.xVelocity = 3 * Math.sin(I.age * Math.PI / 64);

    I.age++;

    if(I.active && I.inBounds()){
      I.active = true;
    }else{
      if(I.inBounds() == false){
        SCORE--;
      }
      I.active = false;
    }

    //I.active = I.active && I.inBounds;

  };



  I.explode = function(){
    this.active = false;
  };

return I;
};

function collides(a, b){
  return a.x < b.x + b.width &&
         a.x + a.width > b.x &&
         a.y < b.y + b.height &&
         a.y + a.height > b.y;
}

function handleCollisions(){

  enemies.forEach(function(enemy){
    if(collides(enemy, player)){
      enemy.explode();
      player.explode();
    }

  });
}
