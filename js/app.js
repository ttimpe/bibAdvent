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
    var t = $('.door[data-did=' + i +']')[0].offsetTop;
    var l = $('.door[data-did=' + i +']')[0].offsetLeft;
    var w = $('.door[data-did=' + i +']')[0].offsetWidth;
    var h = $('.door[data-did=' + i +']')[0].offsetHeight;
    console.log('position at x ' + l + 'px, y ' + t + 'px');

    $('#door-content').css('top', t + 'px');
    $('#door-content').css('left', l + 'px');
    $('#door-content').css('width', w + 'px');
    $('#door-content').css('height', h + 'px');


    $('#door-content').attr('src','api.php?action=openDoor&day='+i);

    $('#door-content').css('width', '1024px');
    $('#door-content').css('height', '768px');
    $('#door-content').css('left', '50%');
    $('#door-content').css('top', '50%');
    $('#door-content').css('margin-left', '-512px');
    $('#door-content').css('margin-top', '-384px');

    $('body').addClass('covered');

}
