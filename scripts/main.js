function fb_hover(element) {
  element.setAttribute('src', 'image/fb-icon-touch.png');
}

function fb_unhover(element) {
  element.setAttribute('src', 'image/fb-icon.png');
}

function ig_hover(element) {
  element.setAttribute('src', 'image/ig-icon-touch.png');
}

function ig_unhover(element) {
  element.setAttribute('src', 'image/ig-icon.png');
}

function g_hover(element) {
  element.setAttribute('src', 'image/gmail-icon-touch.png');
}

function g_unhover(element) {
  element.setAttribute('src', 'image/gmail-icon.png');
}

function ShowTime(){
  var NowDate = new Date();
  var h = NowDate.getHours();
  var min = NowDate.getMinutes();
  var s = NowDate.getSeconds();
  var y = NowDate.getFullYear();
  var mon = NowDate.getMonth()+1;
  var d = NowDate.getDate();
  document.getElementById('showtime').innerHTML = "現在時間："+y+'年'+mon+'月'+d+'日'+ h+'時'+min+'分'+s+'秒';
  setTimeout('ShowTime()',1000);
}