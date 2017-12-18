$(document).ready(function(){
  window.onload = function(){
   var canvas = document.getElementById("canvas");
   var ctx = canvas.getContext("2d");
   var img = document.getElementById("body");
   ctx.drawImage(img, 25, 150, 400, 400);
 };
window.onload();

  $('#eye1').click(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye1");
    ctx.clearRect(10, 10, 50, 50);
    ctx.clearRect(60, 10, 50, 50);
    ctx.drawImage(img, 10, 10, 50, 50);
    ctx.drawImage(img, 60, 10, 50, 50);
  });
  $('#eye2').click(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye2");
    ctx.clearRect(10, 10, 50, 50);
    ctx.clearRect(60, 10, 50, 50);
    ctx.drawImage(img, 10, 10, 50, 50);
    ctx.drawImage(img, 60, 10, 50, 50);
  });


});
