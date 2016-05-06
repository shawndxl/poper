var poper = (function() {
  'use strict';
  function _createDiv(defaults) {
    var btn = defaults.btn;
    var btnElement;
    if (btn) {
      if (btn[1]) {
        btnElement = '<div class="poper-btn">' + (btn[0] || 'OK') + '</div>' + '<div class="poper-btn">' + btn[1] + '</div>';
      } else {
        btnElement = '<div class="poper-btn">' + (btn[0] || 'OK') + '</div>';
      }
    } else {
      btnElement = '<div class="poper-btn">OK</div>';
    }
    var html =
      '<div class="poper-box">' +
        '<div class="poper-content">' + (defaults.content || '确认吗？') + '</div>' +
        '<div class="poper-btnbar">' + btnElement + '</div>' +
      '</div>';
    var pop_container = document.createElement('div');
    pop_container.id = 'poper_container';
    pop_container.innerHTML = html;
    document.body.appendChild(pop_container);
  };
  function _init() {
    var style = document.createElement('style');
    style.id = 'poper_style';
    style.innerHTML = "body{background:#333}#poper_container{position:fixed;width:100%;height:100%;text-align:center;font-family:STHeiTi,Tahoma,Helvetica,Arial,sans-serif;font-size:1.4rem;z-index:9999}#poper_container *{box-sizing:border-box;margin:0;padding:0}#poper_container .poper-box{display:inline-block;margin-top:50%;min-width:15rem;max-width:18rem;min-height:3rem;max-height:80%;border:1px solid #eee;border-radius:.3rem;padding:1rem;background:#fff;color:#333}#poper_container .poper-box .poper-content{line-height:2rem;text-align:center;margin-bottom:.8rem}#poper_container .poper-box .poper-btnbar{border-top:1px dotted #aaa}#poper_container .poper-box .poper-btnbar div{display:inline-block;width:50%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;height:2.4rem;line-height:2rem;padding:.2rem}#poper_container .poper-box .poper-btnbar div:nth-of-type(2){border-right:1px solid #aaa;float:left}" ;
    document.head.appendChild(style);
  }
  function _addBtnListen(index, fn) {
    document.getElementsByClassName('poper-btn')[index].
    addEventListener('touchend', fn);
  }
  function _addShadeClose() {
    document.getElementsByClassName('poper-box')[0].
    addEventListener('touchend', function(e) {
      //e.preventdefault;
      e.stopPropagation();
    })
    document.getElementById('poper_container').
    addEventListener('touchend', function(e){
      Poper.prototype.close();
    });
  }
  function _open(defaults) {
    if (document.getElementById('poper_container')) { return; }
    if (!document.getElementById('poper_style')) {
      _init();
    }
    _createDiv(defaults);
    if (defaults.shadeClose) {
      _addShadeClose();
    }
    if (document.getElementsByClassName('poper-btn').length == 1) {
      document.getElementsByClassName('poper-btn')[0].
      addEventListener('touchend', function() {
        Poper.prototype.close();
      });
      if (defaults['yes']) {
        _addBtnListen(0, defaults['yes']);
      }
    } else {
      _addBtnListen(1, function() {
        Poper.prototype.close();
      })
      if (defaults['yes']) {
        _addBtnListen(0, defaults['yes']);
      }
      if (defaults['no']) {
        _addBtnListen(1, defaults['no']);
      }
    }
  }
  function Poper() {}
  Poper.prototype = {
    open: function(defaults) {
      _open(defaults);
    },
    close: function() {
      var poper_container = document.getElementById('poper_container');
      if (poper_container) {
        document.body.removeChild(poper_container);
      }
    }
  }
  return new Poper();
})()
