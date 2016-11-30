<?php
define('DOOR', 11);
include(dirname(__DIR__).'../../verify.php');
?>
<!DOCTYPE html>
<html lang="de">
	<head>
		<meta charset="utf-8">
		<title>Geschenk</title>
		<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
		<style type="text/css">
			body
			{
				background-color: #1a1a1a;
				font-family: 'Open Sans', sans-serif;
				background-image: url('pics/snow3.png');
				animation: snow 5s linear infinite;
			}

			a
			{
				color: #d9d9d9;
				position: absolute;
				bottom: 18%;
				left: 44%;
			}

			.wrapper
			{
				width: 200px;
				height: 200px;
				perspective: 1000px;
				position: relative;
				left: 40%;
				top: 200px;
				cursor: pointer;
			}

			.cube
			{
				width: 100%;
				height: 100%;
				transform-style: preserve-3d;
				position: absolute;
				/*animation: testRotation 10s linear forwards;*/
				transform: rotateX(-30deg) rotateY(45deg);
			}

			.cube .front, .back, .right, .left, .bottom
			{
				background-color: #b30000;
				margin: 0;
				width: 200px;
				height: 200px;
				text-align: center;
				line-height: 120px;
				font-family: verdana;
				font-size: 160%;
				position: absolute;
				border: 1px solid black;
			}

			.top
			{
				margin: 0;
				width: 200px;
				height: 200px;
				position: absolute;
				transform-style: preserve-3d;
			}

			.cube .top .topBack, .topFront, .topLeft, .topRight
			{
				width: 200px;
				height: 100px;
				margin: 0;
				border: 1px solid black;
				background-color: #b30000;
				position: absolute;
			}

			.cube .top .topLeft
			{
				transform-origin: bottom center;
				transform: translateX(-100px) rotateZ(90deg) rotateX(0deg);
			}

			.cube .top .topRight
			{
				background-color: #800000;
				transform-origin: bottom center;
				transform: translateX(100px) rotateY(180deg) rotateZ(90deg);
				/*animation: open 5s infinite forwards;*/
			}

			.cube .top .topBack
			{
				transform-origin: bottom center;
				transform: translateY(-100px) rotateX(180deg) translateZ(1px);
				/*animation: open 5s infinite forwards;*/
			}

			.cube .top .topFront
			{
				transform-origin: bottom center;
				transform: translateY(98px) translateZ(-1px);
				/*animation: open 5s infinite forwards;*/
			}

			.letter
			{
				background-color: #d9b38c;
				width: 140px;
				height: 60px;
				padding: 10px;
				font-family: 'Open Sans', sans-serif;
				font-size: 70%;
				border: 3px #bf8040 dashed;
				transform-origin: center center;
				transform: translateY(120px) translateX(10px) rotateX(90deg);
			}

			.front
			{
				transform: rotateY(0deg) translateZ(100px);
			}

			.back
			{
				background-color: #800000;
				transform: rotateY(180deg) translateZ(100px);
			}

			.right
			{
				background-color: #800000;
				transform: rotateY(90deg) translateZ(100px);
			}

			.left
			{
				transform: rotateY(-90deg) translateZ(100px);
			}

			.top
			{
				transform: rotateX(90deg) translateZ(100px);
			}

			.bottom
			{
				background-color: #800000;
				transform: rotateX(-90deg) translateZ(100px);
			}

			.open .topRight
			{
				animation: open_right 5s cubic-bezier(.38,.59,.27,.95) forwards;
			}

			.open .topLeft
			{
				animation: open_left 5s cubic-bezier(.38,.59,.27,.95) forwards;
			}

			.open .topBack
			{
				animation: open_back 5s 1.5s cubic-bezier(.38,.59,.27,.95) forwards;
			}

			.open .topFront
			{
				animation: open_front 5s 1.5s cubic-bezier(.38,.59,.27,.95) forwards;
			}

			.open .cube
			{
				animation: rotateCube 1s 5s linear forwards;
			}

			.open .letter
			{
				animation: dropLetter 1s 6s linear forwards;
			}

			@keyframes open_left
			{
				0% {transform: translateX(-100px) rotateZ(90deg) rotateX(0deg);}
				100% {transform: translateX(-100px) rotateZ(90deg) rotateX(-160deg);}
			}

			@keyframes open_right
			{
				0% {transform: translateX(100px) rotateY(180deg) rotateZ(90deg) rotateX(0deg);}
				100% {transform: translateX(100px) rotateY(180deg) rotateZ(90deg) rotateX(160deg);}
			}

			@keyframes open_front
			{
				0% {transform: translateY(100px) translateZ(-1px) rotateX(0deg);}
				100% {transform: translateY(98px) translateZ(-1px) rotateX(-160deg);}
			}

			@keyframes open_back
			{
				0% {transform: translateY(-100px) rotateX(180deg) translateZ(1px) rotateX(0deg);}
				100% {transform: translateY(-100px) rotateX(180deg) translateZ(1px) rotateX(160deg);}
			}

			@keyframes rotateCube
			{
				0% {transform: translateZ(0) rotateX(-30deg) rotateY(45deg);}
				100% {transform: translateZ(160px) rotateX(-60deg) rotateY(45deg);}
			}

			@keyframes snow
			{
				0% {background-position: 0px 0px;}
				100% {background-position: 300px 300px;}
			}

			@keyframes dropLetter
			{
				0% {transform: translateY(120px) translateX(10px) rotateX(90deg);}
				75% {transform: translateY(-180px) translateX(10px) rotateX(90deg);}
				100% {transform: translateY(-180px) translateX(10px) rotateX(90deg) rotateZ(45deg);}
			}

		</style>
		<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
		<script type="text/javascript">

			var clickOnce = true;
			var contents = Array(5);

			function init()
			{
				/*var wrapper = document.getElementsByClassName('wrapper')[0];

				wrapper.style.cursor = 'pointer';
				wrapper.onclick = function () {
					wrapper.toggleClass("open");

				};*/



				$(".wrapper").click(function () {

					if(clickOnce)
					{
						contents[0] = 'Fröhliche Weihnachten<br>Deutsch';
						contents[1] = 'Merry Christmas<br>Englisch';
						contents[2] = 'Joyeux noël<br>Französisch';
						contents[3] = 'Buon natale<br>Italienisch';
						contents[4] = '¡Feliz navidad<br>Spanisch';

						var letter = document.getElementsByClassName('letter')[0];
						var rand = Math.round(Math.random() * (contents.length-1));
						letter.innerHTML = contents[rand];
						document.getElementsByClassName('wrapper')[0].style.cursor = 'default';

						$(this).toggleClass("open");
						clickOnce = false;
					}
				});
			}

		</script>

	</head>

	<body onload="init()">

		<div class="wrapper">
			<div class="cube">
				<div class="front"></div>
				<div class="back"></div>
				<div class="right"></div>
				<div class="left"></div>
				<div class="top">
					<div class="topLeft"></div>
					<div class="topRight"></div>
					<div class="topFront"></div>
					<div class="topBack"></div>
				</div>
				<div class="bottom"></div>
				<div class="letter"></div>
			</div>
		</div>
		<a>Click the box!</a>
	</body>
</html>
