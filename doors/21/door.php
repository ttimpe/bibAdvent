<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
     <link rel="stylesheet" href="CSS/style.css" title="no title" charset="utf-8">
     <script src="sylvester/sylvester.js" type="text/javascript"></script>
     <script src="JS/demo.js" type="text/javascript"></script>
     <script src="JS/glUtils.js" type="text/javascript"></script>
     <!-- Fragment shader program-->
     <script id="shader-fs" type="x-shader/x-fragment">
       varying highp vec2 vTextureCoord;

        uniform sampler2D uSampler;

        void main(void) {
          gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));
        }
        </script>
       <!-- Vertex shader program -->

     <script id="shader-vs" type="x-shader/x-vertex">
         attribute vec3 aVertexPosition;
         attribute vec2 aTextureCoord;

         uniform mat4 uMVMatrix;
         uniform mat4 uPMatrix;

         varying vec2 vTextureCoord;

       void main(void) {
         gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
         vTextureCoord = aTextureCoord;
       }
     </script>
  </head>
  <body onload="start()">
    <div id="centerOuter">
      <div id="centerInner">
        <canvas id="glcanvas" style="background: url('winterlandschaft-1247517.jpg')" width="609" height="440">Test</canvas>
      </div>
    </div>
  </body>
</html>
