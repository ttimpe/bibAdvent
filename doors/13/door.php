<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Christmas Magic</title>
    <link href="https://fonts.googleapis.com/css?family=Mountains+of+Christmas" rel="stylesheet">
    <link rel="stylesheet" href="css/progress.css">
  </head>
  <body>
    <h1>Loading New Year...</h1>
    <div class="progressbar" data-perc="0">
      <div class="bar blue"><span></span></div>
      <div class="label"><span></span></div>
    </div>
    <div class="video">
    <iframe width="800" height="600" src="https://www.youtube.com/embed/shZafPmUVPg?controls=1&amp;showinfo=0&amp;autoplay=1&amp;loop=1" frameborder="0" allowfullscreen></iframe>
  </div>
  </body>
</html>
<script src="//code.jquery.com/jquery.min.js"></script>
<script type="text/javascript" src="js/iframe.js"></script>
<script>
  $(document).ready(function(){

    function secondsEl(){
      var t1 = new Date(2016, 01, 01, 0, 0, 0, 0);
      var t2 = new Date(2017, 01, 01, 0, 0, 0, 0);
      var nowDate = new Date();
      var dif = t1.getTime() - nowDate.getTime();
      var dif2 = (t1.getTime() - t2.getTime()) / 1000;

      var Seconds_from_T1_to_T2 = dif / 1000;
      var Seconds_Between_Dates = Math.abs(Math.floor(Seconds_from_T1_to_T2));
      $('.progressbar').attr('data-perc',Seconds_Between_Dates*100/Math.abs(Math.floor(dif2)));
      setTimeout(secondsEl, 10000);
      $('.progressbar').each(function(){
      var t = $(this);
      var dataperc = t.attr('data-perc'),
          barperc = Math.round(dataperc*5.56);
      t.find('.bar').animate({width:barperc}, dataperc*25);

      function perc() {
        var length = t.find('.bar').css('width'),
          perc = Math.round(parseInt(length)/5.56),
          labelpos = (parseInt(length)-2);
        t.find('.label').css('left', labelpos);
        t.find('.label').text(perc+'%');
      }
      perc();
      setInterval(perc, 0);
      });
    }
    secondsEl();

  window.top.$("<link/>", {
    rel: "stylesheet",
    type: "text/css",
    href: "doors/13/css/css.css"
  }).appendTo("head");

  //add table
  if(window.top.$('#tabby').length == 0){
    window.top.$('ul').append('<table id="tabby" style="width: 800px;"><tbody><tr><td id="1" style="width: auto;"></td><td id="2" style="width: auto;"></td><td id="3" style="width: auto;"></td><td id="4" style="width: auto;"></td><td id="5" style="width: auto;"></td><td id="6" style="width: auto;"></td><td id="7" style="width: auto;"></td></tr><tr><td id="24" style="width: auto;"></td><td id="25" style="width: auto;" align="center" valign="bottom" colspan="5" rowspan="5"></td><td id="8" style="width: auto;"></td></tr><tr><td id="23" style="width: auto;"></td><td id="9" style="width: auto;"></td></tr><tr><td id="22" style="width: auto;"></td><td id="10" style="width: auto;"></td></tr><tr><td id="21" style="width: auto;"></td><td id="11" style="width: auto;"></td></tr><tr><td id="20" style="width: auto;"></td><td id="12" style="width: auto;"></td></tr><tr><td id="19" style="width: auto;"></td><td id="18" style="width: auto;"></td><td id="17" style="width: auto;"></td><td id="16" style="width: auto;"></td><td id="15" style="width: auto;"></td><td id="14" style="width: auto;"></td><td id="13" style="width: auto;"></td></tr></tbody></table>');
    //arrange doors from 1 to 24
    /*
    var $wrapper = window.top.$('ul'),
        $door = $wrapper.children('li');
    $door.sort(function(a, b){
      return +$(a).data('did') - +$(b).data('did');
    })
    .each(function(){
      $wrapper.append(this);
    });
*/
    //add doors to table
    var d,b;
    for(var i=0;i<=24;i++){
      d = window.top.$("ul").find("[data-did='" + i + "']");
      d.detach();
      b = window.top.$("td#"+i);
      d.appendTo(b);
    }
    window.top.$('td#25').empty();
    window.top.$('td#25').css({
      'padding': '0'
    });

    window.top.$('ul').css({
      'position': 'absolute',
      'top': '50%',
      'left': '50%',
      'transform': 'translate(-50%, -50%);',
      '-webkit-transform': 'translate(-50%, -50%)',
      '-moz-transform': 'translate(-50%, -50%)',
      '-ms-transform': 'translate(-50%, -50%)'
    });
    window.top.$('td#25').append('<div id="fire_container"><img id="fire" src="doors/13/img/fire.gif" alt=""><img id="fireplace" src="doors/13/img/fireplace.png" alt=""><div id="freepik"></div></div>');


    window.top.$('#freepik').append('<a href="http://www.freepik.com">Designed by Freepik</a>');
    window.top.$('#freepik').css({
      'position': 'absolute',
      'height': '38px',
      'width': '98%',
      'bottom': '0',
      'left': '0',
      'text-align': 'right',
      'line-height': '38px',
      'vertical-align': 'middle'
    });

    window.top.$('#fire_container').css({
      'position': 'relative',
      'top': '0',
      'left': '0',
      'padding': '0',
      'margin': '0',
      'overflow': 'hidden',
      'height': '578px',
      'width': '578px'
    });

    window.top.$('#fire_container').addClass("snow");

    window.top.$('#fireplace').css({
      'position': 'relative',
      'height': '100%',
      'width': '100%'
    });
    window.top.$('#fire').css({
      'position': 'absolute',
      'width': '25%',
      'bottom': '0',
      'left': '220px',
      'margin-bottom': '50px'
    });

    //centering table
    window.top.$('table').css({
      'margin': '0 auto'
    });

    //position doors
    window.top.$('body').css({
      'height': '100%',
      'width': '100%'
    });

    window.top.$('ul').css({
      'margin': '0',
      'padding': '0'
    });

    window.top.$('li').css({
      'border': '1px solid #000',
      'padding': '30px',
      'margin': '1px',
      'height': '50px',
      'width': '50px',
      'list-style': 'none',
      'color': 'black',
      'text-shadow': '3px 3px 0 #fff,-1px -1px 0 #fff,1px -1px 0 #fff,-1px 1px 0 #fff,1px 1px 0 #fff'
    });
  }


    //hide footer
    window.top.$("footer").hide();
    //change background image
    window.top.$("html").css("background-image","url('doors/13/img/x.png')");
    window.top.$("html").css("background-color","black");

  });
</script>