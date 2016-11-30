<?php
define('TITLE', 'Start');
include 'header.php'; ?>
        <main>
            <ul id="doors">
            </ul>
        </main>

        <div id="frame-wrapper">
	        <iframe id="door-content"></iframe>
	        <a href="#" class="info-button"><i class="fa fa-info-circle" aria-hidden="true"></i></a>
        </div>

        <div id="info-box">
            <span id="door-title"></span>
            <p id="door-description"></p>
            <div id="door-author">
                <img id="door-author-picture">
                <a id="door-author-name"></a>
            </div>
        	<button id="closeInfoboxButton"><i class="fa fa-window-close-o" aria-hidden="true"></i></button>
        </div>
<?php include 'footer.php'; ?>
<script src="js/app.js"></script>
