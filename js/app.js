var openedDoor = 0;
var doorOrder = [];
$(document).ready(function() {

    if (document.cookie == '') {
        for (var i=1; i<25; i++)  {
            doorOrder.push(i);
        }
        doorOrder = shuffle(doorOrder);
        setCookie('doorOrder',JSON.stringify(doorOrder));
    } else {
        doorOrder = JSON.parse(getCookie('doorOrder'));
    }
    for (var i=0; i<doorOrder.length; i++) {
        var doorId = doorOrder[i];
        d = new Date('2016-11-' + doorId);
        if (doorId < 10) {
            d = new Date('2016-11-0' + doorId);
        }

        var currD = new Date();
        if (currD >= d) {
            // unlock door
            $("#doors").append('<li class="door unlocked" data-did="' + doorId + '">' + doorId + '</li>');
        } else {
            $("#doors").append('<li class="door locked" data-did="' + doorId + '">' + doorId + '</li>');
        }
    }
    $("#doors li.unlocked").click(function (e) {
        openDoor($(this).data('did'));

    });
    $(".info-button").click(function(){
        showInfoData();
    });
    $("#closeInfoboxButton").click(function() {
        $("#info-box").css('display', 'none');
    })


});




function setCookie(k, v) {
    var cookies = getCookies();
    cookies[k] = v;
    var string = '';
    console.log(cookies);
    for (var key in cookies) {
        string = key + '=' + cookies[key] + '; ' + string;
    }
    document.cookie = string;
}

function getCookies() {
    var cookies = [];
    var splitCookies = document.cookie.split('; ');
    for (var i=0; i < splitCookies.length; i++) {
        var s = splitCookies[i].split('=');
        var k = s[0];
        var v = s[1];
        cookies[k] = v;
    }
    return cookies;
}

function getCookie(k) {
    var cookies = getCookies();
    if (cookies[k] !== undefined) {
        return cookies[k];
    }
    return false;
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function openDoor(i) {
    console.log('opening');

    $('#door-content').attr('src','api.php?action=openDoor&day='+i);
    getInfoData(i);
    $('#frame-wrapper').addClass('opened');


    $('#frame-wrapper').before('<div id="cover"></div>');
    $('#cover').click (function(e) {
        console.log(e.target);
            closeDoor();

    });
    openedDoor = i;


}

function getInfoData(i) {
    $.getJSON('api.php?action=getDoorInfo&day=' + i, function (data) {
        infoData = data;
        $("#door-author-picture").attr('src', data.profile_picture);
        $("#door-author-name").html(data.author_name);
        $("#door-author-name").attr('href', 'https://github.com/' + data.author);
        $("#door-title").html(data.content_title);
        $("#door-description").html(data.content_description);
    });

}

function showInfoData() {
    $("#info-box").css('display', 'block');
}



function closeDoor() {
    console.log('closing door');
    $('#frame-wrapper').removeClass('opened');
    $('#frame-wrapper').addClass('closed');
    window.setTimeout(function() {
        $('#frame-wrapper').removeClass('closed');
    },1000);

    $('#cover').remove();
    $('#door-content').attr('src', 'about:blank');
    openedDoor = 0;

}
