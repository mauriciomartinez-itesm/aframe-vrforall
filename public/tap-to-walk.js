
//CREO UN NUEVO COMPONENTE DE AFRAME PARA PONÉRSELO A LA CÁMARA
AFRAME.registerComponent('tap-to-walk', {
  
	      
  //EN LA INICIALIZACIÓN (SOLO PASA UNA VEZ) LE AGREGO LOS LISTENERS A LA ESCENA COMPLETA
        init: function () {
          document.querySelector('a-scene').addEventListener('mousedown', function () {
            downer = true;
          });
         document.querySelector('a-scene').addEventListener('mouseup', function () {
             downer = false;
         });
		},
		
  //EN EL TICK (SUCEDE CADA MOMENTO, ES COMO EL UPDATE O ENTERFRAME) HAGO EL CÁLCULO TRIGONOMÉTRICO PARA QUE EL JUGADOR AVANCE HACIA DONDE ESTÁ VIENDO
		tick: function(time, timeDelta){
      //SI EL BOTÓN DEL MOUSE ESTÁ ABAJO
		  	if(downer){
          
          //DECLARO MIS VARIABLES (QUE INCLUYEN LA ENTIDAD DE CÁMARA, POSICIONES EN X,Y,Z Y ROTACIÓN EN Y)
          var px =player.getAttribute("position").x;
          var py =player.getAttribute("position").y;
          var pz =player.getAttribute("position").z;
          var ry =camara.getAttribute("rotation").y;

          //PARA SABER A DONDE ESTÁ VOLTEANDO A VER Y AÑADIRLE VELOCIDAD HACIA ESE LUGAR, NECESITO USAR EL SENO Y COSENO DE LOS ÁNGULOS
          var sy = Math.sin(ry*Math.PI/180);
          var cy = Math.cos(ry*Math.PI/180);

          //lE AÑADO LOS ATRIBUTOS PARA QUE PUEDA CAMINAR HACIA DONDE SE EL PIDE (MUEVO LA CÁMARA EN X y Z CON LA VELOCIDAD CALCULADA DESDE EL SENO Y COSENO)
          player.setAttribute("position", {x:px-(sy*speed),y:py,z:pz-(cy*speed)});
			  }
		  }  
		  
});