<?php
define('DOOR', 10);
include(dirname(__DIR__).'../../verify.php');
?>
<html>
	<head>

		<style type="Text/CSS">

			body
			{
				background-color: #882020;
				color: white;
			}

			h1
			{font-family: arial;}

			h2
			{font-family: arial;}

			h3
			{font-family: arial;}

			#happyWheels
			{
				width: 100px;
				height: 100px;
				border-radius: 90px 90px 90px 90px;
				background-color: #A4A4A4;
				animation: zufallsbewegung1 4s infinite;
				position: absolute;
			}

			#bloons
			{
				width: 100px;
				height: 100px;
				border-radius: 90px 90px 90px 90px;
				background-color: #FACC2E;
				animation: zufallsbewegung2 3.8s infinite;
				position: absolute;
			}

			#schwerterUndSandalen
			{
				width: 100px;
				height: 100px;
				border-radius: 90px 90px 90px 90px;
				background-color: #FFFFFF;
				animation: zufallsbewegung3 4.2s infinite;
				position: absolute;
			}


			@keyframes zufallsbewegung1
			{
			  0%
			  {
				margin-top: 400px;
				margin-left: 350px;
			  }

			  10%
			  {
				margin-top: 320px;
				margin-left: 120px;
			  }

			  20%
			  {
				margin-top: 260px;
				margin-left: 590px;
			  }

			  30%
			  {
				margin-top: 350px;
				margin-left: 940px;
			  }

			  40%
			  {
				margin-top: 430px;
				margin-left: 710px;
			  }

			  50%
			  {
				margin-top: 230px;
				margin-left: 560px;
			  }

			  60%
			  {
				margin-top: 100px;
				margin-left: 720px;
			  }

			  70%
			  {
				margin-top: 350px;
				margin-left: 450px;
			  }

			  80%
			  {
				margin-top: 430px;
				margin-left: 800px;
			  }

			  90%
			  {
				margin-top: 240px;
				margin-left: 550px;
			  }

			  100%
			  {
				margin-top: 400px;
				margin-left: 350px;
			  }
			}

			@keyframes zufallsbewegung2
			{
			  0%
			  {
				margin-top: 200px;
				margin-left: 450px;
			  }

			  10%
			  {
				margin-top: 520px;
				margin-left: 460px;
			  }

			  20%
			  {
				margin-top: 330px;
				margin-left: 230px;
			  }

			  30%
			  {
				margin-top: 630px;
				margin-left: 380px;
			  }

			  40%
			  {
				margin-top: 850px;
				margin-left: 500px;
			  }

			  50%
			  {
				margin-top: 700px;
				margin-left: 260px;
			  }

			  60%
			  {
				margin-top: 420px;
				margin-left: 360px;
			  }

			  70%
			  {
				margin-top: 740px;
				margin-left: 470px;
			  }

			  80%
			  {
				margin-top: 670px;
				margin-left: 600px;
			  }

			  90%
			  {
				margin-top: 450px;
				margin-left: 460px;
			  }

			  100%
			  {
				margin-top: 200px;
				margin-left: 450px;
			  }
			}

			@keyframes zufallsbewegung3
			{
			  0%
			  {
				margin-top: 750px;
				margin-left: 510px;
			  }

			  10%
			  {
				margin-top: 430px;
				margin-left: 320px;
			  }

			  20%
			  {
				margin-top: 640px;
				margin-left: 130px;
			  }

			  30%
			  {
				margin-top: 810px;
				margin-left: 70px;
			  }

			  40%
			  {
				margin-top: 660px;
				margin-left: 200px;
			  }

			  50%
			  {
				margin-top: 560px;
				margin-left: 500px;
			  }

			  60%
			  {
				margin-top: 290px;
				margin-left: 450px;
			  }

			  70%
			  {
				margin-top: 450px;
				margin-left: 700px;
			  }

			  80%
			  {
				margin-top: 500px;
				margin-left: 570px;
			  }

			  90%
			  {
				margin-top: 500px;
				margin-left: 400px;
			  }

			  100%
			  {
				margin-top: 750px;
				margin-left: 510px;
			  }
			}

		</style>
	</head>
	<body>
		<h1> Frohe Vorweihnachtszeit</h1>
		<h2> Jede Kugel verlinked zu einer anderen Spieleseite...</h2>
		<h3> ...versuch sie alle zu erwischen.</h3>
		<a id="happyWheels" target="blank" href="http://www.totaljerkface.com/happy_wheels.tjf"></a>
		<a id="bloons" target="blank" href="https://ninjakiwi.com/Games/Tower-Defense/Play/Bloons-Tower-Defense-5.html#.WC2xlLLhCUk"></a>
		<a id="schwerterUndSandalen" target="blank" href="http://www.spielkarussell.de/schwerter-und-sandalen-2.htm"></a>
	</body>
</html>
