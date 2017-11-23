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

var avatarName = getModel(Math.random()*3);

AFRAME.registerComponent('random-avatar', {
   init: function () {
     console.log(avatarName);
      var avatar = this.el;
     avatar.setAttribute("gltf-model", "#"+avatarName);
   }
});
