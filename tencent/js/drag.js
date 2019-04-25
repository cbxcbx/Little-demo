window.onload = drag;

function drag(params) {
  var loginPanel = getId('loginPanel'),
    closebtn = getId('ui_boxyClose'),
    login_logo = getByClass('login_logo_webqq', 'loginPanel')[0];
  // 拖曳
  login_logo.onmousedown = fnDown;
  // 关闭
  closebtn.onclick = function () {
    loginPanel.style.display = 'none';
  }
  // 切换状态
  var loginState = getId('loginState'),
    loginStateShow = getId('loginStateShow'),
    login_state = getId('login2qq_state_txt'),
    loginStatePanel = getId('loginStatePanel'),
    stateli = getByClass('statePanel_li')

  loginState.onclick = function (e) {
    e = eventUtil.getEvent(e);
    eventUtil.stopPropagation(e)
    loginStatePanel.style.display = 'block';

  }
  // 鼠标滑过、离开和点击状态列表时
  for (let i = 0, l = stateli.length; i < l; i++) {
    stateli[i].onmouseover = function () {
      this.style.background = '#567';
    }
    stateli[i].onmouseout = function () {
      this.style.background = '#FFF';
    }
    stateli[i].onclick = function (e) {
      e = eventUtil.getEvent(e);
      eventUtil.stopPropagation(e)
      loginStatePanel.style.display = 'none';
      var id = this.id;
      login_state.innerHTML = getByClass('stateSelect_text', id)[0].innerHTML
      loginStateShow.className = '';
      loginStateShow.className = 'login-state-show ' + id;
    }
  }

  document.onclick = function (e) {
    e = eventUtil.getEvent(e);
    loginStatePanel.style.display = 'none';
  }
}

function getId(id) {
  var idDom = document.getElementById(id);
  return idDom
}

function getByClass(clsName, parent) {
  var oParent = parent ? getId(parent) : document;
  var elements = oParent.getElementsByTagName('*');
  var res = [];
  for (let i = 0, l = elements.length; i < l; i++) {
    if (elements[i].className == clsName) {
      res.push(elements[i])
    }
  }
  return res
}

function fnDown(event) {
  event = eventUtil.getEvent(event);
  var loginPanel = getId('loginPanel'),
    // 光标按下时光标和面板之间的距离
    margin_x = event.clientX - loginPanel.offsetLeft,
    margin_y = event.clientY - loginPanel.offsetTop;
  // 移动
  document.onmousemove = function (event) {
    event = eventUtil.getEvent(event);
    fnMove(event, margin_x, margin_y);
  }
  // 释放鼠标
  document.onmouseup = function () {
    document.onmousemove = null;
    document.onmouseup = null;
  }

}

function fnMove(event, x, y) {
  var loginPanel = getId('loginPanel');
  var maxW = (document.documentElement.clientWidth || document.body.clientWidth) - loginPanel.offsetWidth - 10;
  var maxH = (document.documentElement.clientHeight || document.body.clientHeight) - loginPanel.offsetHeight;
  var posX = event.clientX - x;
  var posY = event.clientY - y;
  if (posX < 0) {
    posX = 0
  }
  else if (posX > maxW) {
    posX = maxW
  }
  if (posY < 0) {
    posY = 10
  }
  else if (posY > maxH) {
    posY = maxH
  }
  loginPanel.style.left = posX + 'px';
  loginPanel.style.top = posY + 'px';
}