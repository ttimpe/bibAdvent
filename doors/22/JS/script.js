document.addEventListener("DOMContentLoaded", function(event){
  devSnow();
});

var devSnow = function(){

  (function() {
      var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
      function(callback) {
          window.setTimeout(callback, 1000 / 60);
      };
      window.requestAnimationFrame = requestAnimationFrame;
  })();


//Variablen

  var flakes = [];
  var canvas = document.getElementById("xmas");
  var context = canvas.getContext("2d");
  var parent = canvas.parentNode;
  var retina = window.devicePixelRatio > 1 ? 2 :1;
  var flakeCount = 450;

  // Weniger Flocken wenn das Fenster kleiner ist
  if(parent.offsetWidth < 767){
    flakeCount = 125;
  }

  canvas.width = parent.offsetWidth * retina;
  canvas.height = parent.offsetHeight * retina;

  function snowFrame(){
    context.clearRect(0 ,0 , canvas.width, canvas.height);
    for(var i = 0; i < flakeCount; i++){
      var flake = flakes[i];
      console.log(flake);
      var x = flake.x;
      var y = flake.y;



      flake.velX *= .98;
      if(flake.velY <= flake.speed){
        flake.velY = flake.speed
      }
      flake.velX += Math.cos(flake.step += 0.5) * flake.stepSize;

      context.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
      flake.y += flake.velY;
      flake.x += flake.velX;

      if(flake.y >= canvas.height || flake.y <= 0){
        reset(flake);
      }

      if(flake.x >= canvas.width || flake.x <= 0){
        reset(flake);
      }

      context.beginPath();
      context.arc(flake.x,flake.y, flake.size, 0, Math.PI * 2);
      context.fill();
    }
    requestAnimationFrame(snowFrame);
  };

  function reset(flake) {
    flake.x = Math.floor(Math.random() * canvas.width);
    flake.y = 0;
    flake.size = ((Math.random()* 3) + getRandomInt(2,4)) * retina;
    flake.speed = ((Math.random() * 1) + 0.2) * retina;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = (Math.random()* 0.5) + 0.4;
  }

  function init() {
    for (var i = 0; i< flakeCount; i++){
      var x = Math.floor(Math.random() * canvas.width);
      var y = Math.floor(Math.random() * canvas.height);
      var size = ((Math.random()* 3) + getRandomInt(2,4)) * retina;
      var speed = ((Math.random()*1) + 0.2) * retina;
      var opacity = (Math.random() * 0.5) + 0.4;

      flakes.push({

        speed: speed,
        velY : speed,
        velX : 0,
        x: x,
        y: y,
        size :size,
        stepSize: (Math.random()) / 30,
        step: 0,
        opacity: opacity
      });
      snowFrame();
    };
  }

  window.addEventListener("resize", function(){
    canvas.width = parent.offsetWidth * retina;
    canvas.height = parent.offsetHeight * retina;
  })
  init();
};

function getRandomInt(min,max) {
  return Math.floor(Math.random()* (max-min)) + min;
}
