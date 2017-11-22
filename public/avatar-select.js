window.onload = function() {
  
  var avatar = document.querySelector("#avatar");

  avatar.setAttribute("gltf-model", "#"+getModel(Math.random()*3));

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
};
