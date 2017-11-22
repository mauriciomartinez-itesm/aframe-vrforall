AFRAME.registerComponent('shake-listener', {
  init: function () {
    var targetEl = this.el;
    var count = 0
    
    // you could also initialize the shake instance here
    window.addEventListener('shake', function () {
      if (++count % 2) {
        targetEl.emit('shakestart')
      } else {
        targetEl.emit('shakeend')
      }
    })
  }
});