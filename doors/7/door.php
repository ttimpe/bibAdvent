<canvas id="c" width="1024" height="768">
</canvas>
<script>
var c = document.getElementById('c');
var ctx = c.getContext('2d');

var ballX = 0;
var ballY = 0;

var cannonX = 0;

var textures = [];

/* STATES
0: STARTSCREEN
1: INGAME
2: ENDSCREEN
*/

var gameState = 0;

function init() {
    document.addEventListener('keydown', keyDown);
    document.addEventListener('mousemove', mouseMove);
    loadTexture('background');
    loadTexture('cannon');
    loadTexture('snowball');
    drawFrame();

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
    var x = e.clientX - rect.left;
    setCannonAngle(x);
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
    ctx.drawImage(textures['background'],0,0);
}
function drawEnimies() {

}
function drawBall() {
    ctx.drawImage(textures['snowball'],ballX,ballY);
}
function drawCannon() {
    var leftPosition = c.width/2 - (textures['cannon'].width/2);

    ctx.drawImage(textures['cannon'], leftPosition, c.height

}
function drawGUI() {

}

function drawStartScreen() {

}
function drawEndScreen() {

}


function setCannonAngle(x) {
    // Set angle based on X position

}

function fireSnowball() {

}

function loadTexture(name) {
    var img = document.createElement('img');
    img.src = 'images/' + name + '.png';
    textures[name] = img;
}

init();
</script>
