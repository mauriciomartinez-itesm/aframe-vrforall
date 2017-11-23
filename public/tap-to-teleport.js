AFRAME.registerComponent('click-listener', {
  init: function () {
    var targetEl = this.el;
    var count = 0
    
    // you could also initialize the shake instance here
    document.querySelector('a-scene').addEventListener('click', function () {
      if (++count % 2) {
        targetEl.emit('clickstart')
      } else {
        targetEl.emit('clickend')
      }
    })
    
  }
});