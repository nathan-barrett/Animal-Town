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
      
      var canvas = document.getElementById("body");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = "png/bunny-yellow.png";
      ctx.clearRect(20, 100, 400, 400);
      ctx.drawImage(img, 20, 100, 400, 400);
    });
    $('#head1 .red').click(function(){
      var canvas = document.getElementById("body");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = "png/bunny-red.png";
      ctx.clearRect(20, 100, 400, 400);
      ctx.drawImage(img, 20, 100, 400, 400);
    });
    $('#head1 .green').click(function(){
      var canvas = document.getElementById("body");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = "png/bunny-green.png";
      ctx.clearRect(20, 100, 400, 400);
      ctx.drawImage(img, 20, 100, 400, 400);
    });
    $('#head1 .blue').click(function(){
      var canvas = document.getElementById("body");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = "png/bunny-blue.png";
      ctx.clearRect(20, 100, 400, 400);
      ctx.drawImage(img, 20, 100, 400, 400);
    });

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
      var canvas = document.getElementById("body");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = "png/cat-yellow.png";
      ctx.clearRect(20, 100, 400, 400);
      ctx.drawImage(img, 20, 100, 400, 400);
    });
    $('#head2 .red').click(function(){
      var canvas = document.getElementById("body");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = "png/cat-red.png";
      ctx.clearRect(20, 100, 400, 400);
      ctx.drawImage(img, 20, 100, 400, 400);
    });
    $('#head2 .green').click(function(){
      var canvas = document.getElementById("body");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = "png/cat-green.png";
      ctx.clearRect(20, 100, 400, 400);
      ctx.drawImage(img, 20, 100, 400, 400);
    });
    $('#head2 .blue').click(function(){
      var canvas = document.getElementById("body");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = "png/cat-blue.png";
      ctx.clearRect(20, 100, 400, 400);
      ctx.drawImage(img, 20, 100, 400, 400);
    });

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
      var canvas = document.getElementById("body");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = "png/dog-yellow.png";
      ctx.clearRect(20, 100, 400, 400);
      ctx.drawImage(img, 20, 100, 400, 400);
    });
    $('#head3 .red').click(function(){
      var canvas = document.getElementById("body");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = "png/dog-red.png";
      ctx.clearRect(20, 100, 400, 400);
      ctx.drawImage(img, 20, 100, 400, 400);
    });
    $('#head3 .green').click(function(){
      var canvas = document.getElementById("body");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = "png/dog-green.png";
      ctx.clearRect(20, 100, 400, 400);
      ctx.drawImage(img, 20, 100, 400, 400);
    });
    $('#head3 .blue').click(function(){
      var canvas = document.getElementById("body");
      var ctx = canvas.getContext("2d");
      var img = new Image();
      img.src = "png/dog-blue.png";
      ctx.clearRect(20, 100, 400, 400);
      ctx.drawImage(img, 20, 100, 400, 400);
    });

//EYE SELECTION
  $('#eye1').click(function(){
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye1");
    ctx.clearRect(250, 50, 250, 250);
    ctx.drawImage(img, 40, 120, 250, 250);
  });

  $('#eye2').click(function(){
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye2");
    ctx.clearRect(250, 50, 50, 50);
    ctx.drawImage(img, 250, 50, 50, 50);
  });

  $('#eye3').click(function(){
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye3");
    ctx.clearRect(250, 200, 50, 50);
    ctx.clearRect(320, 200, 50, 50);
    ctx.rect(250, 200, 50, 50);
    ctx.rect(320, 200, 50, 50);
    ctx.fillStyle = "#fa807200";
    ctx.fill();
    ctx.drawImage(img, 250, 200, 50, 50);
    ctx.drawImage(img, 320, 200, 50, 50);
  });
  $('#eye4').click(function(){
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye4");
    ctx.clearRect(250, 50, 50, 50);
    ctx.drawImage(img, 250, 50, 50, 50);
  });

  $('#eye5').click(function(){
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye5");
    ctx.clearRect(250, 50, 50, 50);
    ctx.drawImage(img, 250, 50, 50, 50);
  });

  $('#eye6').click(function(){
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye6");
    ctx.clearRect(250, 50, 50, 50);
    ctx.drawImage(img, 250, 50, 50, 50);
  });

  $('#eye7').click(function(){
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye7");
    ctx.clearRect(250, 50, 50, 50);
    ctx.drawImage(img, 250, 50, 50, 50);
  });
//NOSE SELECTION
//MOUTH SELECTION

});
