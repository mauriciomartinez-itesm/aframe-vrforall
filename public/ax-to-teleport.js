AFRAME.registerComponent('ax-listener', {
  init: function () {
    var targetEl = this.el;
    var count = 0
    
    // you could also initialize the shake instance here
    window.addEventListener('abuttondown', function () {
      if (++count % 2) {
        targetEl.emit('paddown')
      } else {
        targetEl.emit('padup')
      }
    })
    
     window.addEventListener('xbuttondown', function () {
      if (++count % 2) {
        targetEl.emit('paddown')
      } else {
        targetEl.emit('padup')
      }
    })
    
  }
});