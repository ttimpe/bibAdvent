<?php
define('DOOR', 9);
include(dirname(__DIR__).'../../verify.php');
?>
<!DOCTYPE HTML>
<html lang="de">
	<head>
		<meta charset="utf-8">
		<title>3D-Objekte</title>
		<style>

			body
			{
				background-color: #1e1e1e;
				background-image: url('./Tisch.png');
				background-repeat: no-repeat;
				padding: 400px;
			}

			.wrap
			{
				perspective: 1000px;
				perspective-origin: 10% 0px;
			}

			.cylinder
			{
				transform-style: preserve-3d;
				position: relative;
				left: 150px;
				top: 0px;
				width: 200px;
				transform-origin: -5px 120px -200px;
				animation: rotate_cyl 5s linear infinite;
			}

			.cylinder div
			{
				width: 78.54px;
				height: 40px;
				position: absolute;
				transform-origin: center center -200px;
				background: radial-gradient(circle at 100px 100px, #AC9F68, #9D8F57);
			}

			.cylinder .bottom_cyl
			{
				background: none;
				transform-origin: center center;
				width: 400px;
				height: 400px;
				position: absolute;
				border-radius: 50%;
				border: 2px solid black;
				background-color: black;
				background-image: url('./Kopf.png');
				background-position: -40px -20px;
			}

			.cylinder .top_cyl
			{
				background: none;
				transform-origin: center center;
				width: 400px;
				height: 400px;
				position: absolute;
				border-radius: 50%;
				border: 2px solid black;
				background-color: #9E681C;
				background-image: url('./Zahl.png');
				background-position: -40px -20px;
			}

			.top_cyl
			{
				transform: translate3d(-162px, -86px, -200px) rotateY(0deg) rotateX(-90deg);

			}

			.bottom_cyl
			{
				transform: translate3d(-162px, -45px, -200px) rotateY(0deg) rotateX(-90deg);

			}


			.side1_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(22.5deg);
			}

			.side2_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(45deg);
			}

			.side3_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(67.5deg) rotateX(0deg);
			}

			.side4_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(90deg) rotateX(0deg);
			}

			.side5_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(112.5deg) rotateX(0deg);
			}

			.side6_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(135deg) rotateX(0deg);
			}

			.side7_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(157.5deg) rotateX(0deg);
			}

			.side8_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(180deg) rotateX(0deg);
			}

			.side9_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(202.5deg) rotateX(0deg);
			}

			.side10_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(225deg) rotateX(0deg);
			}

			.side11_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(247.5deg) rotateX(0deg);
			}

			.side12_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(270deg) rotateX(0deg);
			}

			.side13_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(292.5deg) rotateX(0deg);
			}

			.side14_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(315deg) rotateX(0deg);
			}

			.side15_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(337.5deg) rotateX(0deg);
			}

			.side16_cyl
			{
				transform: translate3d(0px, 115px, 0px) rotateY(360deg) rotateX(0deg);
			}

			@keyframes rotate_cyl
			{
				from {transform: rotateY(0deg) rotateX(91deg);}
				to {transform: rotateY(1080deg) rotateX(91deg);}
			}


		</style>
	</head>
	<body>
		<div class="wrap">
			<div class="cylinder">
				<div class="top_cyl"></div>
				<div class="bottom_cyl"></div>
				<div class="side1_cyl"></div>
				<div class="side2_cyl"></div>
				<div class="side3_cyl"></div>
				<div class="side4_cyl"></div>
				<div class="side5_cyl"></div>
				<div class="side6_cyl"></div>
				<div class="side7_cyl"></div>
				<div class="side8_cyl"></div>
				<div class="side9_cyl"></div>
				<div class="side10_cyl"></div>
				<div class="side11_cyl"></div>
				<div class="side12_cyl"></div>
				<div class="side13_cyl"></div>
				<div class="side14_cyl"></div>
				<div class="side15_cyl"></div>
				<div class="side16_cyl"></div>
			</div>
		</div>
	</body>
</html>
