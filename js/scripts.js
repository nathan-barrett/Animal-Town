$(document).ready(function(){
  $('#submit').click(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye");
    ctx.drawImage(img, 10, 10, 50, 50);
  });


});
