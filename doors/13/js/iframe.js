$(document).ready(function(){
    var wrapper = window.top.$('#frame-wrapper');
    wrapper.css({
        'background': '',
        'background-color': 'black',
        'width': '1150px',
        'height': '800px',
        'left': '50% !important',
        'margin-left': '-575px',
        'margin-top': '-400px',
        'top': '50% !important',
        'position': 'absolute',
        'box-shadow': '0 0 10px 500px  rgba(0,0,0,0.7)',
        'background-image': 'none',
        'border-radius': '0',
        'border': 'none'
    });
    window.top.$('.info-button').css({
        'position': 'absolute',
        'right': '15px',
        'bottom': 'auto',
        'top': '15px',
        'padding': '5px 10px',
        'background': 'rgba(255,255,255,0.4)',
        'border-radius': '50%',
        'color': 'white',
        'font-size': '20px'
    });

    window.top.$('#info-box').css({
        'height': '414px',
        'width': '500px',
        'position': 'absolute',
        'left': '50%',
        'top': '50%',
        'margin-left': '-300px',
        'margin-top': '-150px',
        'background': 'transparent url("doors/13/img/info.png") no-repeat center center',
        'color': 'black',
        'border-radius': '0',
        'border': 'none',
        'box-shadow': '0 0 0 0 #000'
    });

    window.top.$('#door-title').css({
        'width': '300px',
        'overflow': 'hidden',
        'margin-left': '180px',
        'line-height': '120px'
        //'margin-top': '10px'
    });

    window.top.$('#door-description').css({
        'width': '260px',
        'overflow': 'hidden',
        'margin-left': '165px'
    });

    window.top.$('#door-author').css({
        'width': '300px',
        'overflow': 'hidden',
        'margin-left': '180px',
        'margin-bottom': '10px'
    });

    window.top.$('#door-author-name').css({
        'color': 'red',
        'width': '200px',
        'overflow': 'hidden'
    });


    window.top.$('#closeInfoboxButton').empty();
    window.top.$('#closeInfoboxButton').css({
        'width': '36px',
        'height': '36px',
        'position': 'absolute',
        'right': '-20px',
        'top': '-25px',
        'font-size': '30px',
        'color': 'white',
        'background': 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAA8FBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////l1cLhAAAAT3RSTlMAAQIDBAUGBwgJChUWFyAhIyQmMDc4OTw9P0BCQ0ZKVlddYmZxc3R1d3yAgoiLjJGUl5qeo6WorbCytbe5vMHFx8jMztfa4OLo6+/x8/X9YdgkywAAAPRJREFUGBllwQdDAWEAx+HfvdxJKtI4aWgqDUVDaaFllP/3/za9N5TxPMTmClev/c9medlhXKqika7Pv9y3xjwkifma9J4mtKRpbYPl9TXjAutIVsO7VWhzYSArA95QVhLnTtYWrMiqw6oCB+A0pG1IPMsaGqoK7YO53wHzpFCWF0X2wAHTVMSnp9guYO4VK9FT7BBIthQr8aLIMQG3rYhPVaEKONc+uB2FsqwpcAZOTfLBfZM1NHgKuHApy4d1WXWgLOsmca5QYXEgKwN4A82oEshpWscQKmrSxzyx/I/GNF3+pE410i0yIb1Ra/W/Hk/yDpFf5OBvqNMHDOIAAAAASUVORK5CYII=) no-repeat center center',
        'background-color': 'rgba(255,255,255,0.4)',
        'border-radius': '50%',
        'border': '0',
        'cursor': 'pointer'
    });
});