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
    $('#door-content').addClass('opened');

    openedDoor = i;

    $('body').addClass('covered');
    $('body.covered').click (function(e) {
        if (e.target == document.body) {
            closeDoor();
        }
    });

}



function closeDoor() {
    console.log('closing door');
    $('#door-content').removeClass('opened');
    $('body').removeClass('covered');

}
