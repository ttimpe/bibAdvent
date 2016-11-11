<link href="https://fonts.googleapis.com/css?family=Changa+One" rel="stylesheet">
<canvas id="c" width="1024" height="768">
</canvas>
<script src="js/Button.js"></script>
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


loadTexture(0);

function init() {
    document.addEventListener('keydown', keyDown);
    c.addEventListener('mousemove', mouseMove);
    c.addEventListener('mousedown', mouseDown);
    c.addEventListener('mouseup', mouseUp);
    c.addEventListener('click', mouseClick);

    showStartScreen();
    drawFrame();


}

function findObjectAtPosition(x, y) {
    for (var i=0; i<objects.length; i++) {
        // Check if we are on object
        if (x >= objects[i].left && x <= (objects[i].left + objects[i].width) && y >= objects[i].top && y <= (objects[i].top+objects[i].height)) {
            return objects[i];
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

    unhoverAllObjects();
    var hoveredObject = findObjectAtPosition(mouseX, mouseY);
    if (hoveredObject) {
        console.log(hoveredObject);
        hoveredObject.state = 1;
    }
    setCannonAngle();
}

function mouseDown(e) {
    var rect = c.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    unhoverAllObjects();
    var hoveredObject = findObjectAtPosition(mouseX, mouseY);
    if (hoveredObject) {
        hoveredObject.state = 2;
    }
}

function mouseUp(e) {
    var rect = c.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    unhoverAllObjects();
    var hoveredObject = findObjectAtPosition(mouseX, mouseY);
    if (hoveredObject) {
        hoveredObject.state = 1;
    }
}
function mouseClick(e) {
    var hoveredObject = findObjectAtPosition(mouseX, mouseY);
    if(hoveredObject) {
        hoveredObject.click();
    }
}

function drawFrame() {
    drawBackground();
    switch (gameState) {
        case 0:
        drawStartScreen();
        break;
        case 1:
        drawEnemies();
        drawBall();
        drawCannon();
        break;
        case 2:
        drawEndScreen();
        break;
    }
    drawGUI();

    requestAnimationFrame(drawFrame);
}

function drawBackground() {
    ctx.drawImage(textures.background,0,0);
}
function drawEnemies() {

}
function drawBall() {
    ctx.drawImage(textures.snowball,ballX,ballY);
}
function drawCannon() {
    // get angle
    var leftPosition = c.width/2 - (textures.cannon.width/2);
    ctx.save();
    ctx.translate(-textures.cannon.width/2, -textures.cannon.height);
    ctx.rotate(cannonAngle * Math.PI/180);
    ctx.translate(textures.cannon.width/2, textures.cannon.height);

    ctx.drawImage(textures.cannon, -(textures.cannon.width/2), -(textures.cannon.height) , textures.cannon.width, textures.height );
    ctx.restore();

    //ctx.drawImage(textures.cannon, leftPosition, c.height - textures.cannon.height);
}
function drawGUI() {
    drawObjects();
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
    var cAngle = 180 / 100 * percentage -90;
    if (cAngle > -45 && cAngle < 45) {
        cannonAngle = cAngle;
    }
    console.log('cannon angle ' + cannonAngle + ' degrees');
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
    for (var i=0; i< objects.length; i++) {
        objects[i].draw(ctx);
    }
}

function unhoverAllObjects() {
    for (var i=0; i< objects.length; i++) {
        objects[i].state = 0;
    }
}

function startGame() {
    setGameState(1);
    objects = [startButton];
}

function setGameState(i) {
    objects = [];
    gameState = i;
}

function showStartScreen() {
    setGameState(0);
    var startButton = new Button('START', 0, 450, c.width * 0.6, 130);
    startButton.click = function() { alert('Button'); }
    centerObject(startButton);
    objects = [startButton];
    
}
function showEndScreen() {
    setGameState(2);
}

function centerObject(o) {
    o.left = (c.width / 2) - (o.width / 2);
}

</script>
