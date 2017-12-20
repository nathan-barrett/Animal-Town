var head = function(cheese){
  var canvas = document.getElementById('body');
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.crossOrigin="anonymous"
  img.src = cheese;
  ctx.clearRect(120, 100, 400, 400);
  ctx.drawImage(img, 120, 100, 400, 400);
}

var eye = function(jimbo){
  var canvas = document.getElementById('eye');
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.crossOrigin="anonymous"
  img.src = jimbo;
  ctx.clearRect(160, 110, 320, 320);
  ctx.drawImage(img, 160, 110, 320, 320);
}
var shirt = function(tuna){
  var canvas = document.getElementById('shirt');
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.src = tuna;
  ctx.clearRect(160, 110, 320, 320);
  ctx.drawImage(img, 160, 155, 320, 320);
}

var nose = function(dad){
  var canvas = document.getElementById('nose');
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.crossOrigin="anonymous"
  img.src = dad;
  ctx.clearRect(160, 120, 320, 320);
  ctx.drawImage(img, 160, 120, 320, 320);
}

var mouth = function(grasshopper){
  var canvas = document.getElementById('mouth');
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.crossOrigin="anonymous"
  img.src = grasshopper;
  ctx.clearRect(160, 135, 320, 320);
  ctx.drawImage(img, 160, 135, 320, 320);
}


$(document).ready(function(){

  $('#capture').click(function(){
    var canvas = document.getElementById("body");
    var body    = canvas.toDataURL("image/png");
    $('.wrapper').addClass('slide');
    $('.scene').addClass('show');
    $('.character').append('<img src="'+body+'"/>');
  });

  //HEAD SELECTION
    $('#head1').click(function(){
      $('#head1 img').css('background', 'rgba(209, 66, 41, .3)');
      $('#head2 img').css('background', 'none');
      $('#head3 img').css('background', 'none')
      $('.color-menu-1').css("display", "inline-flex");
      $('.color-menu-1').css("animation", "slide .4s linear");
      $('.color-menu-2').css("display", "none");
      $('.color-menu-3').css("display", "none");
    });
    //HEAD ONE RABBIT
    $('#head1 .orange').click(function(){
      head('https://i.imgur.com/3rpEnVF.png');
    });

    $('#head1 .red').click(function(){
      head('https://i.imgur.com/JOg96R0.png');
    });

    $('#head1 .green').click(function(){
      head('https://i.imgur.com/mVAc5te.png');
    });

    $('#head1 .blue').click(function(){
      head('https://i.imgur.com/0mtSDF7.png');
    });

    $('#head1 .pink').click(function(){
      head('https://i.imgur.com/EXv7oT3.png');
    });

    $('#head1 .purple').click(function(){
      head('https://i.imgur.com/qYAuw9z.png');
    });

    $('#head1 .yellow').click(function(){
      head('https://i.imgur.com/pcrr4xl.png');
    });

    $('#head1 .grey').click(function(){
      head('https://i.imgur.com/dU2Hjpn.png');
    });

    //CAT HEAD

    $('#head2').click(function(){
      $('#head1 img').css('background', 'none');
      $('#head2 img').css('background', 'rgba(209, 66, 41, .3)');
      $('#head3 img').css('background', 'none')
      $('.color-menu-2').css("animation", "slide .4s linear");
      $('.color-menu-2').css("display", "inline-flex");
      $('.color-menu-1').css("display", "none");
      $('.color-menu-3').css("display", "none");
    });

    $('#head2 .orange').click(function(){
      head('https://i.imgur.com/RsffoFT.png');
    });

    $('#head2 .red').click(function(){
      head('https://i.imgur.com/qfZerjP.png');
    });

    $('#head2 .green').click(function(){
      head('https://i.imgur.com/3BT4fXf.png');
    });

    $('#head2 .blue').click(function(){
      head('https://i.imgur.com/7C5vOsi.png');
    });

    $('#head2 .pink').click(function(){
      head('https://i.imgur.com/Kh1FoTt.png');
    });

    $('#head2 .purple').click(function(){
      head('https://i.imgur.com/CmlSywm.png');
    });

    $('#head2 .yellow').click(function(){
      head('https://i.imgur.com/kIAae41.png');
    });

    $('#head2 .grey').click(function(){
      head('https://i.imgur.com/RrbHcEq.png');
    });


    //DOG HEAD
    $('#head3').click(function(){
      $('#head1 img').css('background', 'none');
      $('#head3 img').css('background', 'rgba(209, 66, 41, .3)');
      $('#head2 img').css('background', 'none')
      $('.color-menu-3').css("display", "inline-flex");
      $('.color-menu-3').css("animation", "slide .4s linear");
      $('.color-menu-2').css("display", "none");
      $('.color-menu-1').css("display", "none");
    });

    $('#head3 .orange').click(function(){
      head('https://i.imgur.com/dblAKq4.png');
    });

    $('#head3 .red').click(function(){
      head('https://i.imgur.com/Eti9vul.png');
    });

    $('#head3 .green').click(function(){
      head('https://i.imgur.com/Xt4GVGN.png');
    });

    $('#head3 .blue').click(function(){
      head('https://i.imgur.com/YRrf8R3.png');
    });

    $('#head3 .pink').click(function(){
      head('https://i.imgur.com/3X1FhRi.png');
    });

    $('#head3 .purple').click(function(){
      head('https://i.imgur.com/Vf7B4QG.png');
    });

    $('#head3 .yellow').click(function(){
      head('https://i.imgur.com/0IfiGrL.png');
    });

    $('#head3 .grey').click(function(){
      head('https://i.imgur.com/l3P7lZs.png');
    });


//EYE SELECTION

  $('#eye1').click(function(){
    eye('https://i.imgur.com/gszkwue.png');
  });

  $('#eye2').click(function(){
    eye('https://i.imgur.com/cFlNEyS.png');
  });

  $('#eye3').click(function(){
    eye('https://i.imgur.com/zEjCYTn.png');
  });

  $('#eye4').click(function(){
    eye('https://i.imgur.com/uUbDcXr.png');
  });

  $('#eye5').click(function(){
    eye('https://i.imgur.com/pEVJzNY.png');
  });

  $('#eye6').click(function(){
    eye('https://i.imgur.com/sRmyNlo.png');
  });

  $('#eye7').click(function(){
    eye('https://i.imgur.com/13BN3Rn.png');
  });

  $('#eye8').click(function(){
    eye('https://i.imgur.com/Pb1Vb6u.png');
  });

  $('#eye9').click(function(){
    eye('https://i.imgur.com/0zKFFVo.png');
  });

  $('#eye10').click(function(){
    eye('https://i.imgur.com/FfFHDes.png');
  });

  $('#eye11').click(function(){
    eye('https://i.imgur.com/fV8BbW3.png');
  });

  $('#eye12').click(function(){
    eye('https://i.imgur.com/3FWMTdu.png');
  });

//NOSE SELECTION

  $('#nose1').click(function(){
    nose('https://i.imgur.com/a1lx2d5.png');
  });

  $('#nose2').click(function(){
    nose('https://i.imgur.com/b1FeHX5.png');
  });

  $('#nose3').click(function(){
    nose('https://i.imgur.com/m61kux4.png');
  });

  $('#nose4').click(function(){
    nose('https://i.imgur.com/yzXyGdw.png');
  });

  $('#nose5').click(function(){
    nose('https://i.imgur.com/ssINeX1.png');
  });

  $('#nose-a').click(function(){
    nose('https://i.imgur.com/jYmTNjN.png');
  });

  $('#nose-b').click(function(){
    nose('https://i.imgur.com/w3QA7pK.png');
  });

  $('#nose-c').click(function(){
    nose('https://i.imgur.com/bjHajTm.png');
  });

//MOUTH SELECTION

  $('#mouth1').click(function(){
    mouth('https://i.imgur.com/okyLRrW.png');
  });

  $('#mouth2').click(function(){
    mouth('https://i.imgur.com/vjcyaRc.png');
  });

  $('#mouth3').click(function(){
    mouth('https://i.imgur.com/ntF1nc5.png');
  });

  $('#mouth4').click(function(){
    mouth('https://i.imgur.com/RqgYTTj.png');
  });

  $('#mouth5').click(function(){
    mouth('https://i.imgur.com/I5KSrBF.png');
  });

  $('#mouth6').click(function(){
    mouth('png/mouth6.png');
  });

  $('#mouth7').click(function(){
    mouth('png/mouth7.png');
  });

  //shirt functions

  $('#shirt1').click(function(){
    shirt('https://i.imgur.com/IyrpjmT.png');
  });
  $('#shirt2').click(function(){
    shirt('https://i.imgur.com/vSVdF4R.png');
  });
  $('#shirt3').click(function(){
    shirt('https://i.imgur.com/7pC71ql.png');
  });
  $('#shirt4').click(function(){
    shirt('https://i.imgur.com/0a1M8cJ.png');
  });
  $('#shirt5').click(function(){
    shirt('https://i.imgur.com/k7ZHd4N.png');
  });
  $('#shirt6').click(function(){
    shirt('https://i.imgur.com/DDZqEHt.png');
  });
  $('#shirt7').click(function(){
    shirt('https://i.imgur.com/neteIWS.png');
  });
  $('#shirt8').click(function(){
    shirt('https://i.imgur.com/sgKcEyI.png');
  });
  $('#shirt9').click(function(){
    shirt('https://i.imgur.com/cA02aGN.png');
  });

});
