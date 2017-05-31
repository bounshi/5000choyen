// rare25氏のソースを少し変えたものです。
//fork先 https://github.com/bounshi/5000choyen
// 問題があれば連絡お願いします。
//
// Last modified 5/31
var canvas, ctx , textbox;

window.onload = function () {
  canvas = document.getElementById("canvas");
  textbox = document.getElementById("textbox");
  ctx = canvas.getContext('2d');
  ctx.font = '100px mplus-1p-black';
  ctx.lineJoin = 'round';
  ctx.setTransform(1,0,-0.4,1,0,0);
};
function saveImage(){
    vdata = canvas.toDataURL("image/png");
    img_url = canvas.toDataURL("image/png").replace(new RegExp("data:image/png;base64,"),"");
    $.post("post.php",{"upload_data":img_url},function(data){ alert("生成完了しました。"); },"html");
    document.getElementById("result").src = vdata;
    document.getElementById("can-download").href = canvas.toDataURL();
}
function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var posx = 70;
  var posy = 100;
  var text = textbox.value;
  //銀色
  for (var i = 0; i < 10; i++) {
    {
      var grad = ctx.createLinearGradient(0, 20, 0, 100);
      grad.addColorStop(0, 'rgb(' + 10 * i + ', ' + 10 * i + ', ' + 10 * i + ')');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 26;
      ctx.strokeText(text, posx - 3 + i, posy + 2);
    }
  }

  {
    var width = ctx.measureText(text).width;
    var grad = ctx.createLinearGradient(0, 0, width + 80, 0);
    var value = width==0?1:1 - 0.1 * (380 / width);
    grad.addColorStop(value<0?0:value, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(0,0,0,255)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 26;
    ctx.strokeText(text, posx + 7, posy + 2);
  }

  //黒色
  {
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 20;
    ctx.strokeText(text, posx, posy);
  }
  //金色
  {
    var grad = ctx.createLinearGradient(0, 20, 0, 100);
    grad.addColorStop(0.3, 'rgb(255, 255, 255)');
    grad.addColorStop(0.5, 'rgb(240, 180, 5)');
    grad.addColorStop(0.8, 'rgb(89, 33, 0)');
    grad.addColorStop(1, 'rgb(240, 180, 5)');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 17;
    ctx.strokeText(text, posx, posy);
  }

  //白
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#FFFFFF';
  ctx.strokeText(text, posx, posy - 3);

  //赤
  {
    var grad = ctx.createLinearGradient(0, 20, 0, 100);
    grad.addColorStop(0, 'rgb(230, 0, 0)');
    grad.addColorStop(0.5, 'rgb(123, 0, 0)');
    grad.addColorStop(0.51, 'rgb(240, 0, 0)');
    grad.addColorStop(1, 'rgb(5, 0, 0)');
    ctx.lineWidth = 2;
    ctx.strokeStyle = grad;
    ctx.strokeText(text, posx, posy - 3);
  }


  //赤
  {
    var grad = ctx.createLinearGradient(0, 20, 0, 100);
    grad.addColorStop(0, 'rgb(230, 0, 0)');
    grad.addColorStop(0.5, 'rgb(123, 0, 0)');
    grad.addColorStop(0.51, 'rgb(240, 0, 0)');
    grad.addColorStop(1, 'rgb(5, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillText(text, posx, posy - 3);
  }
}