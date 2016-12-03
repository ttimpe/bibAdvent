<?php
define('DOOR', 3);
include(dirname(__DIR__).'../../verify.php');
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Chack-Chack</title>
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
    min-height: 100vh;
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
              <h1>Chak-Chak</h1>
              <h2>Zutaten</h2>
              <ul>
                  <li>17 g Butter</li>
                  <li>80 ml Milch</li>
                  <li>5 Eier</li>
                  <li>1kg Mehl</li>
                  <li>15 g Salz</li>
                  <li>50 g Zucker</li>
                  <li>1kg Butterschmalz zum Fritieren</li>
              </ul>
              <h3>Zutaten für den Sirup</h3>
              <ul>
                  <li>150 g Honig</li>
                  <li>2-3 Tassen Zucker</li>
              </ul>
          </section>
          <section class="page">
              <h2>Zubereitung</h2>
              <p>
                  Für den Teig die Eier trennen, die Eigelbe mit Zucker zerreiben bis die Masse weiß wird. Eiweiße steif schlagen.<br>
                  Die Eigelbe mit dem Eiweiß verrühren, gut vermischen. Salz mit Mehl vermischen, in die Eiermilchmasse zugeben, zu einem
                      festen Teig verarbeiten. Den Teig mit einem feuchten Geschirrtuch zudecken und 15-20 Min. ruhen lassen.<br>
                  Teig ausrollen und in dünne Nudeln schneiden.<br>
                  Den Butterschmalz erhitzen und die Nudeln darin goldbraun braten. Das Fett abtropfen und die Nudeln abkühlen lassen.<br>
                  Für die Sirupzubereitung in einem Kochtopf den Honig erhitzen, den Zucker hinzugeben,gut umrühren und zum Kochen bringen.Den Schaum abschöpfen und den Sirup paar Minuten kochen lassen bis der Zucker vollständig aufgelöst ist.<br>
                  Für die Mohn-Nuss-Mischung den Mohn mit dem kochenden Wasser für 3 Min. einweichen, dann in einem Mörser zerdrücken.
                      Mit zerkleinerten Nüssen vermischen und in einer zugedeckten Schüssel stehen lassen.(Optional)<br>
                      Die gebratenen Nudeln in noch heißen Sirup geben, vermischen und die Mohn-Nuss-Mischung hinzugeben.
                      Den fertigen Chak-Chak in einen befetteten tiefen Teller geben, mit feuchten Händen zusammendrücken und ein Häufchen formen.<br>
                  Abkühlen lassen und in große Stücke schneiden.
              </p>
          </section>
      </main>


  </body>
</html>
