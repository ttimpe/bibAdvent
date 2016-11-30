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
  background-color: rgba(240,240 ,240 , .3);
}
    table,td,th{
      border:1px solid black;


    }
    table{

      height:60vh;
      width:30vw;


    }

    td,th{
      text-align: center;
      width:50%;

    }
	#Zubereitung
	{

	width:30vw;
	text-align:left;

	}
	#ecke{
	  width: 100%;
	  height: auto;
      border: 1px solid grey;
	}
  .beispiel{
    display: flex;
    width: 30%;
    height: 100%;
    flex-direction: column;
  }
  h3 {
    margin:0;
    text-align: center; }

@media screen and (max-height:640px){
  body {
    flex-direction: column;
  }
  
  table {
    width: 98vw;
  }
  
  #Zubereitung {
    width: 100vw;
  }
}


    </style>
  </head>
  <body>
<div id="Zubereitung">
	Teig: Aus den Zutaten einen Teig herstellen. Auf einem Backblech ausrollen.<br>
	2 EL Aprikosenmarmelade erhitzen und auf den Teig streichen.<br>
Belag: Butter, Zucker, Vanillezucker und Wasser in einem Topf aufkochen.<br>
gemahlene Nüsse mit in den Topf geben und zu einer glatten Masse verrühren.<br>
 Die Masse auf dem Teig verteilen. Bei 160°-180° 30 Minuten backen.<br>
 Den noch warmen Kuchen in Dreiecke schneiden.<br>
 Nussecken abkühlen lassen und mit Kuvertüre bestreichen oder Tauchen.<br>
</div>
    <table>
      <tr><th>Menge</th><th>Zutat</th></tr>
      <tr><td></td><th>Für den Teig :</th></tr>
      <tr><td>160 g</td><td>Butter</td></tr>
      <tr><td>300 g</td><td>Mehl</td></tr>
      <tr><td>1 Teelöffel</td><td>Backpulver</td></tr>
      <tr><td>130 g</td><td>Zucker</td></tr>
      <tr><td>3</td><td>Eier</td></tr>
      <tr><td>   </td><th>Zum Bestreichen:</th></tr>
      <tr><td>2 Esslöffel</td><td>z.B. Aprikosenkonfitüre</td></tr>
      <tr><td></td><th>Für den Belag:</th></tr>
      <tr><td>200 g</td><td>Butter</td></tr>
      <tr><td>200 g</td><td>Zucker</td></tr>
      <tr><td>2 Päckchen</td><td>Vanillezucker</td></tr>
      <tr><td>4 Esslöffel</td><td>Wasser</td></tr>
      <tr><td>400 g</td><td>gemahlene Nüsse</td></tr>
      <tr><td></td><td>Kuvertüre</td></tr>

    </table>
<div class="beispiel">
  <h3>Beispiel</h3>
  <img src="pictures/Nussecke.jpg" id="ecke">
</div>



  </body>
</html>
