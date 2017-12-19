$(document).ready(function(){

  //HEAD SELECTION
    $('#head1').click(function(){
      $('.color-menu-1').css("display", "inline-flex");
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
      $('.color-menu-2').css("display", "inline-flex");
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
      $('.color-menu-3').css("display", "inline-flex");
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
    ctx.clearRect(250, 50, 50, 50);
    ctx.drawImage(img, 250, 50, 50, 50);
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
