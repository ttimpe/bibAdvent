<?php
define('DOOR', 8);
include(dirname(__DIR__).'../../verify.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/app.css">
</head>
<body>
    <main class="rack">
<div id="mixer-container">
    <div id="song-tracks">
    </div>
    <section class="track master-track">
        <span class="fader-knob" style="bottom: 178px;"></span>
    <input type="range" id="masterFader" class="fader" orient="vertical" value="80">
    <span class="track-label">MASTER</span>
    </div>
</div>
<div id="player-container">
    <div class="analyzer-container">
    </div>
    <ul class="track-selector-buttons">
        <li><button>POWER</button></li>
        <li><button>1</button></li>
        <li><button>2</button></li>
        <li><button>3</button></li>
        <li><button>4</button></li>
        <li><button>5</button></li>
        <li><button>6</button></li>
        <li><button>7</button></li>
        <li><button>8</button></li>
    </ul>

    <div class="tape-slot"><div class="tape"><span class="tape-label"></span></div></div>
    <div class="display-container">
        <span class="display-line">LOADING</span>
        <span class="display-line">SONG</span>
    </div>
    <ul class="transport-container">
        <li><button id="rewindButton">REWIND</button><span><i class="fa fa-backward" aria-hidden="true"></i></span></li>
        <li><button id="fastForwardButton">FAST FWD</button><span><i class="fa fa-forward" aria-hidden="true"></i></span></li>
        <li><button id="stopButton">STOP</button><span><i class="fa fa-stop" aria-hidden="true"></i></span></li>
        <li><button id="playButton">PLAY</button><span class="green"><i class="fa fa-play" aria-hidden="true"></i></span></li>
        <li><button>RECORD</button><span><i class="fa fa-circle" aria-hidden="true"></i></span></li>
        <li><button id="ejectButton">EJECT</button><span><i class="fa fa-eject" aria-hidden="true"></i></span></li>
    </div>


</div>
</main>
<script src="js/Instrument.js"></script>
<script src="js/DrumMachine.js"></script>
<script src="js/Bass.js"></script>
<script src="js/ArpBass.js"></script>
<script src="js/BellSynth.js"></script>
<script src="js/LeadSynth.js"></script>
<script src="js/Pattern.js"></script>
<script src="js/DrumPattern.js"></script>
<script src="js/Mixer.js"></script>
<script src="js/Track.js"></script>
<script src="js/Player.js"></script>
<script src="js/app.js"></script>
<script>init();</script>
</body>
</html>
