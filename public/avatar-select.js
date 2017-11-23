AFRAME.registerComponent('random-avatar', {
   init: function () {
      var avatar = this.el;
     avatar.setAttribute("gltf-model", "#"+avatar);
  }
});

avatarName = getModel(Math.random()*3);

function getModel(n){
    var nr = Math.ceil(n);
    var str = "";
    
    switch(nr){
      case 1:
        str = "jona";
        break;
      case 2:
        str= "greg";
        break;
      case 3:
        str= "mau";
        break;
    }
    
  return str;
}