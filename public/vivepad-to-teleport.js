AFRAME.registerComponent('pad-listener', {
  init: function () {
    var targetEl = this.el;
    var count = 0
    
    // you could also initialize the shake instance here
    window.addEventListener('trackpaddown', function () {
      if (++count % 2) {
        targetEl.emit('paddown')
      } else {
        targetEl.emit('padup')
      }
    })
    
  }
});