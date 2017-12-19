$(document).ready(function(){
//EYE SELECTION
  $('#eye1').click(function(){
    var canvas = document.getElementById("eye");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye1");
    ctx.clearRect(250, 50, 250, 250);
    ctx.drawImage(img, 250, 50, 250, 250);
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
  $('#head1').click(function(){
    $('.color-menu-1').css("display", "inline-flex");
  });
  $('#head2').click(function(){
    $('.color-menu-2').css("display", "inline-flex");
  });
  $('#head3').click(function(){
    $('.color-menu-3').css("display", "inline-flex");
  });

  // $('#head2').click(function(){
  //   var canvas = document.getElementById("canvas");
  //   var ctx = canvas.getContext("2d");
  //   var img = new Image();
  //   img.src = "img/cat-head.svg";
  //   ctx.drawImage(img, 200, 100, 220, 250);
  // });
  $('#head3').click(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "img/rabbit-head.svg";
    ctx.drawImage(img, 180, 70, 250, 280);
  });
  $('#head4').click(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "img/dog-head.svg";
    ctx.drawImage(img, 180, 100, 250, 280);
  });
});
