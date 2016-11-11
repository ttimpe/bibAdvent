<link href="https://fonts.googleapis.com/css?family=Changa+One" rel="stylesheet">
<canvas id="c" width="1024" height="768">
</canvas>
<script>
var c = document.getElementById('c');
var ctx = c.getContext('2d');
var GAME_TITLE = 'Ice Invaders';
var ballX = 0;
var ballY = 0;

var cannonX = 0;
var files = ['background', 'snowball', 'cannon'];

var textures = [];

/* STATES
0: STARTSCREEN
1: INGAME
2: ENDSCREEN
*/
var tIndex = 0;

var gameState = 0;


var mouseX = 0;
var mouseY = 0;

var cannonAngle = 0;


var objects = [];

var startButton = new Button('START', c.width*0.2, 450, c.width * 0.6, 130);
objects.push(startButton);

loadTexture(0);

function init() {
    document.addEventListener('keydown', keyDown);
    c.addEventListener('mousemove', mouseMove);
    drawFrame();

}

function findObjectAtPosition(x, y) {
    for (o in objects) {
        // Check if we are on object
        if (x >= o.x && x <= (o.x + o.width) && y >= o.y && y <= (o.y+o.height)) {
            return o;
        }
    }
}


function keyDown(e) {
    switch (e.keyCode) {
        // FIRE SNOWBALL
        case 20:

        break;

    }
}

function mouseMove(e) {

    var rect = c.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    setCannonAngle();
}

function drawFrame() {
    drawBackground();
    switch (gameState) {
        case 0:
        drawStartScreen();
        break;
        case 1:
        drawEnimies();
        drawBall();
        drawCannon();
        drawGUI();
        break;
        case 2:
        drawEndScreen();
        break;
    }
    requestAnimationFrame(drawFrame);
}

function drawBackground() {
    ctx.drawImage(textures.background,0,0);
}
function drawEnimies() {

}
function drawBall() {
    ctx.drawImage(textures.snowball,ballX,ballY);
}
function drawCannon() {
    // get angle
    var leftPosition = c.width/2 - (textures.cannon.width/2);
    /*ctx.save();
    ctx.translate(textures.cannon.width/2, textures.cannon.height);
    ctx.rotate(cannonAngle * Math.PI/180);
    ctx.translate(textures.cannon.width/2, textures.cannon.height);
    ctx.drawImage(textures.cannon, -(textures.cannon.width/2), -(textures.cannon.height) , textures.cannon.width, textures.height );
    ctx.restore();
    */
    ctx.drawImage(textures.cannon, leftPosition, c.height - textures.cannon.height);
}
function drawGUI() {

}

function drawStartScreen() {
    // Draw logo
    // Draw Start Button
    ctx.font = '100px Changa One';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.strokeText = '#000';
    ctx.lineWidth = 3;
    ctx.fillText(GAME_TITLE, c.width/2,300);
    //ctx.strokeText(GAME_TITLE, c.width/2,300);
    ctx.stroke();

    ctx.fillRect(c.width*0.2, 450, c.width*0.6, 130);
}
function drawEndScreen() {
    // Draw win or lose
    // Draw score
    // Draw Again
}


function setCannonAngle() {
    // Set angle based on X position
    //console.log('width is ' + c.width + ' and mouseX is ' + mouseX);
    var percentage = mouseX / c.width  * 100;
    if (percentage < 50) {
        cannonAngle = -90 * percentage / 100;
    } else {
        cannonAngle = 90 * percentage / 100;
    }
    console.log('cannon angle ' + cannonAngle + ' percent');
}

function fireSnowball() {

}


function loadTexture(index) {
    var img = new Image();
    img.src = 'images/' + files[index] + '.png';

    img.onload = function() {
        textures[files[index]] = img;
        if (tIndex < (files.length -1)) {
            tIndex = tIndex + 1;
            loadTexture(tIndex);

        } else {
            init();
        }
    }
}

function drawObjects() {
    for (var o in objects) {
        o.draw();
    }
}

function startGame() {
    gameState = 1;
}

function showStartScreen() {
    gameState = 0;
}
function showEndScreen() {
    gameState = 2;
}

</script>
