var openedDoor = 0;
$(document).ready(function() {
    for (var i=1; i<25; i++)  {
        var d = new Date('2016-11-' + i);
        var currD = new Date();
        if (currD >= d) {
            // unlock door
            $("#doors").append('<li class="door unlocked" data-did="' + i + '">' + i + '</li>');
        } else {
            $("#doors").append('<li class="door locked" data-did="' + i + '">' + i + '</li>');
        }
    }
    $("#doors li.unlocked").click(function (e) {
        openDoor($(this).data('did'));

    });


});




function openDoor(i) {
    console.log('opening');


    $('#door-content').attr('src','api.php?action=openDoor&day='+i);
    $('#frame-wrapper').addClass('opened');

    openedDoor = i;

    $('body').addClass('covered');
    $('body.covered').click (function(e) {
        if (e.target == document.body && openedDoor > 0) {
            closeDoor();
        }
    });

}



function closeDoor() {
    console.log('closing door');
    $('#frame-wrapper').removeClass('opened');
    $('#frame-wrapper').addClass('closed');
    window.setTimeout(function() {
        $('#frame-wrapper').removeClass('closed');
    },1000);

    $('body').removeClass('covered');
    $('#door-content').attr('src', 'about:blank');
    openedDoor = 0;

}
