//PARA QUE FUNCIONE SHAKE.JS
window.addEventListener('shake', shakeEventDidOccur, false);

//CADA VEZ QUE HAGO UN SHAKE LE DIGO QUE ESCUCHE E INICIALIZO ANNYANG
function shakeEventDidOccur () { 
  if(!listening){
    alto = false;
    annyang.start({ autoRestart: false, continuous: false });
    listening = !listening;
  }else{
    annyang.abort();
    listening = !listening;
  }
}

//SI ANNYANG ESTÁ ACTIVO ENTONCES ESCUCHO LOS COMANDOS
  if (annyang) {

//COMANDOS DE VOZ POSIBLES (EN ESPAÑOL)
  var commands = {
    'camina': camina,
    'corre': corre,
    '(más) rápido': rapido,
    '(más) lento': lento,
    'detente': detente,
    'alto': detente,
    'media vuelta':mediavuelta,
    'voltéate':mediavuelta,
    'dar *pasos pasos':darpasos
  };
    
    //FUNCIONES SOBRE LO QUE HACEN LOS COMANDOS
    function camina(){
      speed = 0.1;
      downer = true;
    }
    
    function corre(){
      speed = 0.2;
      downer = true;
    }
    
    function rapido(){
      speed = speed*1.5;
    }
    
    function lento(){
      speed = speed/1.5;
    }
    
    function detente(){
      speed = 0.1;
      downer = false;
      alto = true;
    }
    
    function mediavuelta(){
      
				var camara = document.querySelector('a-camera');
				var rx =camara.getAttribute("rotation").x;
				var ry =camara.getAttribute("rotation").y;
				var rz =camara.getAttribute("rotation").z;
      camara.setAttribute("rotation", {x:rx,y:ry+180,z:rz})
    }
    
    
    //DA UN PASO Y SE VA A LA FUNCION DE ESPERA, HACE PLAY DEL SONIDO DE PASO TAMBIÉN
    function darpasos(pasos){
      pasos = texttonumber(pasos);
      var textoEl= document.querySelector('#texto');
      textoEl.setAttribute('text',{"value":"Paso "+pasos+""})
      speed = 0.2;
      downer = true;
      
      console.log(downer+"  "+speed)
      
      var audioEl2 = document.querySelector("#step");
      audioEl2.setAttribute("sound", {"src":"#step"+Math.ceil(Math.random()*5)});
      audioEl2.components.sound.playSound();
      
      setTimeout(function(){espera(pasos)},300);
    }
    
    //ESPERA PARA DAR EL SIGUIENTE PASO
    function espera(pasos){
      downer = false;
      pasos--;
      if(pasos>0&&!alto)
      setTimeout(function(){darpasos(pasos)},300);
    }
    
    
    //REGISTRA UN, DOS Y TRES COMO PALABRAS Y NO COMO NÚMEROS POR LO CUAL ES NECESARIO HACER UNA CONVERSIÓN
    function texttonumber(_pasos){
      
      var pasos;
      
      switch(_pasos){
        case "un":
          pasos = 1;
          break;
        case "dos":
          pasos = 2;
          break;
        case "tres":
          pasos = 3;
          break;
        default:
          pasos = _pasos;
          break;
      }
      
      return pasos;
    }
    
    
  //AGREGO LOS COMANDOS DE VOZ E IDIOMA A ANNYANG
  annyang.addCommands(commands);
    annyang.setLanguage("es-MX");
    //DESCOMENTAR LA LÍNEA DE ABAJO SI QUIERO QUE SIEMPRE ESTÉ ESCUCHANDO (SIN NECESIDAD DE PEGARLE AL VISOR)
    //annyang.start();
  
}