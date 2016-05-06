(function() {
  var percentAge = 12 / 360;
  setRootFontSize();
  function setRootFontSize() {
    document.documentElement.style.fontSize = (document.body.clientWidth * percentAge) + 'px';
  }
  window.onresize = function() {
    setRootFontSize();
  }
})();