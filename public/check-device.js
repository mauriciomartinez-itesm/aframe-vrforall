
//EN MOVIL
if(AFRAME.utils.device.isMobile ()){
  
//EN PC
}else{
  
  //CON HMD
  if(AFRAME.utils.device.checkHeadsetConnected ()){
    
    //QUITAR MANOS ESTÁTICAS
      var trash = document.querySelector("#static_left_hand");
      trash.parentNode.removeChild(trash); 
      trash = document.querySelector("#static_right_hand");
      trash.parentNode.removeChild(trash); 
    
  //SIN HMD
  }else{
    
    
  }
  
  document.querySelector('#teleporter-mobile').removeAttribute('click-listener');
}


if(!AFRAME.utils.device.checkHeadsetConnected ()){
 //QUITAR MANOS DINÁMICAS
  var trash = document.querySelector("#dynamic_left_hand");
  trash.parentNode.removeChild(trash); 
  trash = document.querySelector("#dynamic_right_hand");
  trash.parentNode.removeChild(trash); 
}

document.querySelector('a-scene').addEventListener('enter-vr', function () {
  //EN MOVIL
  if(AFRAME.utils.device.isMobile ()){
    document.querySelector("#eyes").setAttribute("position", {x:0, y:0, z:0});
  }
});
