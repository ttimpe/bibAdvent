<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>b.i.b. Adventskalender</title>
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <link rel="stylesheet" href="css/app.css">
    </head>
    <body>
        <main>
            <ul id="doors">
            </ul>
        </main>
        <footer>
            <p>Ein Projekt der IBA3H14B</p>
        </footer>
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
        <script src="//code.jquery.com/jquery.min.js"></script>
        <script src="js/app.js"></script>
    </body>
</html>
