<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>

<style type="text/css">

  .content{
    text-align: center;
    animation: xmas 2s alternate infinite;
    animation-delay: 0s;
    position:absolute;
    width:100%;
    background-color: #090954;
  }
body{
  background-color: #090954;
  font-family: arial;
}

  @keyframes xmas {
    0%{

      color:red;
    }
100%{
  color:green;
}

  }

  .autor{
    color:grey;
    font-size: 7pt;
  }

  #stars{
width: 100%;
height: 100%;
position: absolute;
left: 0px;
top:0px;
z-index:-1;
  }
</style>

  </head>
  <body>
<div id="stars">
<script scr="starfield.js">

        var container = document.getElementById('container');
        var starfield = new Starfield();
        starfield.initialise(container);
        starfield.start();


</script>
    <div class="content">
    <h1>Wir es dunkel vor dem Haus</h1>
    <p>
    Wird es dunkel vor dem Haus,<br>
    kommt zu uns der Nikolaus.<br>
    Hat uns etwas mitgebracht,<br>
    schöner als wir ja gedacht.
  </p>
  <p>
    Steht der Baum im Lichterschein,<br>
    gehen wir zu Tür hinein.<br>
    Weihnacht, Weihnacht - es ist wahr,<br>
    ist das schönste Fest im Jahr.
  </p>
  <span class="autor">Autor: unbekannt</span>
</div>
  </div>
  </body>




</html>
