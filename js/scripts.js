var head = function(cheese){
  var canvas = document.getElementById('body');
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.src = cheese;
  ctx.clearRect(120, 100, 400, 400);
  ctx.drawImage(img, 120, 100, 400, 400);
}

var eye = function(jimbo){
  var canvas = document.getElementById('eye');
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.src = jimbo;
  ctx.clearRect(160, 110, 320, 320);
  ctx.drawImage(img, 160, 110, 320, 320);
}

var nose = function(dad){
  var canvas = document.getElementById('nose');
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.src = dad;
  ctx.clearRect(160, 120, 320, 320);
  ctx.drawImage(img, 160, 120, 320, 320);
}

var mouth = function(grasshopper){
  var canvas = document.getElementById('mouth');
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.src = grasshopper;
  ctx.clearRect(160, 135, 320, 320);
  ctx.drawImage(img, 160, 135, 320, 320);
}


$(document).ready(function(){

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

    $('#head1 .orange').click(function(){
      head('https://nathan-barrett.github.io/animal-town/png/bunny-yellow.png');

    });

    $('#head1 .red').click(function(){
      head('png/bunny-red.png');
    });

    $('#head1 .green').click(function(){
      head('png/bunny-green.png');
    });

    $('#head1 .blue').click(function(){
      head('png/bunny-blue.png');
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
      head('png/cat-yellow.png');
    });

    $('#head2 .red').click(function(){
      head('png/cat-red.png');
    });

    $('#head2 .green').click(function(){
      head('png/cat-green.png');
    });

    $('#head2 .blue').click(function(){
      head('png/cat-blue.png');
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
      head('png/dog-yellow.png');
    });

    $('#head3 .red').click(function(){
      head('png/dog-red.png');
    });

    $('#head3 .green').click(function(){
      head('png/dog-green.png');
    });

    $('#head3 .blue').click(function(){
      head('png/dog-blue.png');
    });


//EYE SELECTION

  $('#eye1').click(function(){
    eye('png/eyes1.png');
  });

  $('#eye2').click(function(){
    eye('png/eyes2.png');
  });

  $('#eye3').click(function(){
    eye('png/eyes3.png');
  });

  $('#eye4').click(function(){
    eye('png/eyes4.png');
  });

  $('#eye5').click(function(){
    eye('png/eyes5.png');
  });

  $('#eye6').click(function(){
    eye('png/eyes6.png');
  });

  $('#eye7').click(function(){
    eye('png/eyes7.png');
  });

//NOSE SELECTION

  $('#nose1').click(function(){
    nose('png/nose1.png');
  });

  $('#nose2').click(function(){
    nose('png/nose2.png');
  });

  $('#nose3').click(function(){
    nose('png/nose2.png');
  });

  $('#nose4').click(function(){
    nose('png/nose4.png');
  });

  $('#nose5').click(function(){
    nose('png/nose5.png');
  });

//MOUTH SELECTION

  $('#mouth1').click(function(){
    mouth('png/mouth1.png');
  });

  $('#mouth2').click(function(){
    mouth('png/mouth2.png');
  });

  $('#mouth3').click(function(){
    mouth('png/mouth3.png');
  });

  $('#mouth4').click(function(){
    mouth('png/mouth4.png');
  });

  $('#mouth5').click(function(){
    mouth('png/mouth5.png');
  });

  $('#mouth6').click(function(){
    mouth('png/mouth6.png');
  });

  $('#mouth7').click(function(){
    mouth('png/mouth7.png');
  });

});
