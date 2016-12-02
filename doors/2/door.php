<?php
define('DOOR', 2);
include(dirname(__DIR__).'../../verify.php');
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>

<style type="text/css">
@font-face {
    font-family: 'english_scriptregular';
    src: url('english_script-webfont.woff2') format('woff2'),
         url('english_script-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

body{
  background: #000 url('bg.jpg');
  background-size: cover;
  color: white;
  color: #fff;
  font-family: Georgia;
  font-size: 1.3em;

}
article {
    padding: 5% 10%;
    line-height: 2em;
    background: rgba(0,0,0,0.3);
}
h1 {
    font-size: 3em;
    font-family: 'english_scriptregular';
    margin-bottom: 2em;

}

  .autor{
    color:grey;
  }

  #stars{
width: 100%;
height: 100%;
position: absolute;
left: 0;
top:0;
z-index:100;
  }
</style>

  </head>
  <body>
<div id="stars">
</div>
<article>
    <h1>Wird es dunkel vor dem Haus…</h1>
    <p>
    Wird es dunkel vor dem Haus,<br>
    kommt zu uns der Nikolaus.<br>
    Hat uns etwas mitgebracht,<br>
    schöner als wir ja gedacht.<br>
  </p>
  <p>
    Steht der Baum im Lichterschein,<br>
    gehen wir zu Tür hinein.<br>
    Weihnacht, Weihnacht - es ist wahr,<br>
    ist das schönste Fest im Jahr.<br>
  </p>
  <span class="autor">Autor: unbekannt</span>
</article>
  <script src="starfield.js"></script>
  <script>

          var container = document.getElementById('stars');
          var starfield = new Starfield();
          starfield.initialise(container);
          starfield.start();
  </script>
  </body>




</html>
