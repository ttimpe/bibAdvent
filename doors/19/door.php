<?php
define('DOOR', 19);
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

			canvas
			{border: 1px solid black;}

		</style>
				<script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
				<script src="jquery.hotkeys.js"></script>
				<script src="sprite.js"></script>
	</head>
	<body>
		<canvas id="canvas" width="480" height="320"></canvas>
		<script src="game.js"></script>
	</body>
</html>
