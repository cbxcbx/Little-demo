var data = ['Phone5', 'Ipad', '三星笔记本', '佳能相机', '惠普打印机', '谢谢参与', '50元充值卡', '1000元超市购物券'],
   timer = null,
   flag = 0;

window.onload = function () {
   var playbtn = document.getElementById('play'),
      stopbtn = document.getElementById('stop'),
      title = document.getElementById('title')
   playbtn.onclick = playFun;
   stopbtn.onclick = stopFun;
   document.onkeyup = function (e) {
      e = event || window.event
      if (e.keyCode == 13) {
         if (flag == 0) {
            playFun()
            flag = 1
         }
         else {
            stopFun()
            flag = 0
         }
      }
   }
}

function playFun() {
   clearInterval(timer)
   timer = setInterval(function () {
      var random = Math.floor(Math.random() * data.length)
      title.innerHTML = data[random]
   }, 50)
   play.style.background = '#999';

}

function stopFun() {
   clearInterval(timer);
   play.style.background = '#036';
}