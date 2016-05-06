window.onload = function() {
  'use strict';
  if(Math.random() > 0.5) {
    var a = 'hello world!<br>',
        b = 'to be or not to be<br>',
        c = '<input style="width: 2rem; height: 2rem;" type="checkbox">';
    poper.open({
      content: a + b + c,
      yes: function() {
        console.log('confess OK')
      }
    });
  } else {
    poper.open({
      content: '确认取消吗？',
      shadeClose: true,
      btn: ['确认','取消'],
      yes: function() {
        poper.close();
        console.log("yeah");
      },
      no: function() {
        console.log('well~~')
      }
    });
  }
}
