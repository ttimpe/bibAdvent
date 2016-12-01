<?php
define('DOOR', 1);
include(dirname(__DIR__).'../../verify.php');
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>

    <style type="text/css">

body{
  display:flex;
  margin: 0;
  flex-direction:row;
  justify-content:space-around;
  padding:2%;
  background-color: #fff;
}

main {
    width: 1024px;
    height: 768px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -512px;
    margin-top: -384px;
    display: flex;
    background: #ffffff;
    background: -moz-linear-gradient(left, #ffffff 0%, #f7f7f7 40%, #e5e5e5 47%, #d3d3d3 50%, #e5e5e5 52%, #f7f7f7 60%, #ffffff 100%);
    background: -webkit-linear-gradient(left, #ffffff 0%,#f7f7f7 40%,#e5e5e5 47%,#d3d3d3 50%,#e5e5e5 52%,#f7f7f7 60%,#ffffff 100%);
    background: linear-gradient(to right, #ffffff 0%,#f7f7f7 40%,#e5e5e5 47%,#d3d3d3 50%,#e5e5e5 52%,#f7f7f7 60%,#ffffff 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff',GradientType=1);
    box-shadow: 15px 15px 30px rgba(0,0,0,0.3), 0 0 10px rgba(0,0,0,0.2);

}
main .page {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    line-height: 1.7em;
    font-family: 'Georgia';
    margin: 0 5%;
}

h1 {
    margin-top: 50px;
}

h2 {
    font-size: 1.3em;
}
h3 {
    font-size: 1.1em;
    margin:0;
}
main .page p {
    text-align: justify;
}
img {
    width: 100%;
    height: auto;
}
ul {
    list-style-type: square;
}

@media screen and (max-height:640px){
  body {
    flex-direction: column;
  }


}


    </style>
  </head>
  <body>
     <main>
    <section class="page">
        <h1>Nussecken</h1>
        <h2>Zutaten:</h2>
        <h3>Für den Teig:</h3>
        <ul>
            <li>160g Butter</li>
            <li>300g Mehl</li>
            <li>1 TL Backpulver</li>
            <li>130g Zucker</li>
            <li>3 Eier</li>
        </ul>
        <h3>Für den Belag:</h3>
        <ul>
            <li>200g Butter</li>
            <li>200g Zucker</li>
            <li>2 Päckchen Vanillezucker</li>
            <li>4 EL Wasser</li>
            <li>400g gemahlene Nüsse</li>
            <li>Kuvertüre</li>
        </ul>
        <h3>Zum Bestreichen:</h3>
        <ul>
            <li>2 EL z.B. Aprikosenkonfitüre</li>
        </ul>
    </section>
    <section class="page">
        <img src="pictures/nussecke.png">

        <h2>Zubereitung</h2>
        <h3>Teig:</h3>
        <p>
        Aus den Zutaten einen Teig herstellen. Auf einem Backblech ausrollen.<br>
    	2 EL Aprikosenmarmelade erhitzen und auf den Teig streichen.<br>
        </p>
    <h3>Belag:</h3>
    <p>
    Butter, Zucker, Vanillezucker und Wasser in einem Topf aufkochen. Gemahlene Nüsse mit in den Topf geben und zu einer glatten Masse verrühren. Die Masse auf dem Teig verteilen.<br>Bei 160-180°C 30 Minuten backen. Den noch warmen Kuchen in Dreiecke schneiden. Nussecken abkühlen lassen und mit Kuvertüre bestreichen oder Tauchen.<br>
    </p>
 </section>
 </main>
  </body>
</html>
