window.addEventListener('shakestart', startTeleportSound);
window.addEventListener('clickstart', startTeleportSound);
window.addEventListener('paddown', startTeleportSound);
window.addEventListener('teleported', endTeleportSound);

function startTeleportSound(){
  var audioEl4 = document.querySelector("#question_sfx");
 // audioEl4.components.sound.playSound();
}

function endTeleportSound(event){
   
  var audioEl4 = document.querySelector("#teleport_sfx");
  //audioEl4.components.sound.playSound();
  
}