var head = function(cheese){
  var canvas = document.getElementById('body');
  var ctx = canvas.getContext("2d");
  var img = new Image();
  img.src = cheese;
  ctx.clearRect(120, 100, 400, 400);
  ctx.drawImage(img, 120, 100, 400, 400);
}

$(document).ready(function(){

  //HEAD SELECTION
    $('#head1').click(function(){
      $('.color-menu-1').css("display", "inline-flex");
    });

    $('#head1 .orange').click(function(){
      head('png/bunny-yellow.png');
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
      $('.color-menu-2').css("display", "inline-flex");
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
      $('.color-menu-3').css("display", "inline-flex");
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
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye1");
    ctx.clearRect(160, 110, 320, 320);
    ctx.drawImage(img, 160, 110, 320, 320);
  });

  $('#eye2').click(function(){
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye2");
    ctx.clearRect(160, 110, 320, 320);
    ctx.drawImage(img, 160, 110, 320, 320);
  });

  $('#eye3').click(function(){
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye3");
    ctx.clearRect(160, 110, 320, 320);
    ctx.drawImage(img, 160, 110, 320, 320);
  });


  $('#eye4').click(function(){
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye4");
    ctx.clearRect(160, 110, 320, 320);
    ctx.drawImage(img, 160, 110, 320, 320);
  });

  $('#eye5').click(function(){
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye5");
    ctx.clearRect(160, 110, 320, 320);
    ctx.drawImage(img, 160, 110, 320, 320);
  });

  $('#eye6').click(function(){
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye6");
    ctx.clearRect(160, 110, 320, 320);
    ctx.drawImage(img, 160, 110, 320, 320);
  });

  $('#eye7').click(function(){
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye7");
    ctx.clearRect(160, 110, 320, 320);
    ctx.drawImage(img, 160, 110, 320, 320);
  });
//NOSE SELECTION
//MOUTH SELECTION

});
