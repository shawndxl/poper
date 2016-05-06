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
    style.innerHTML = /*<jdists encoding="less,autoprefixer,clean-css,quoted" import="../css/poper.less" />*/ ;
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