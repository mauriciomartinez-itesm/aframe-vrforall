
//CREO UN NUEVO COMPONENTE DE AFRAME PARA PONÉRSELO A LA CÁMARA
AFRAME.registerComponent('wasd-controls-custom', {
	
   schema: {
    player: {default: '#player'},
    camera: {default: "#eyes"}
  },
  
  //EN LA INICIALIZACIÓN (SOLO PASA UNA VEZ) LE AGREGO LOS LISTENERS A LA ESCENA COMPLETA
        init: function () {
          
          document.addEventListener('keydown', function (e){
             switch(e.keyCode){
               case 87:
               case 38:
                 w = true;
                 break;
               case 65:
               case 37:
                 a = true;
                 break;
               case 83:
               case 40:
                 s = true;
                 break;
               case 68:
               case 39:
                 d = true;
                 break;
            }
          });
         document.addEventListener('keyup', function (e) {
             switch(e.keyCode){
               case 87:
               case 38:
                 w = false;
                 break;
               case 65:
               case 37:
                 a = false;
                 break;
               case 83:
               case 40:
                 s = false;
                 break;
               case 68:
               case 39:
                 d = false;
                 break;
            }
         });
		},
		
  //EN EL TICK (SUCEDE CADA MOMENTO, ES COMO EL UPDATE O ENTERFRAME) HAGO EL CÁLCULO TRIGONOMÉTRICO PARA QUE EL JUGADOR AVANCE HACIA DONDE ESTÁ VIENDO
		tick: function(time, timeDelta){
      
      
      
      if(w||a||s||d){
        
        
      var player = document.querySelector(this.data.player);
      var camera = document.querySelector(this.data.camera);
        
        //DECLARO MIS VARIABLES (QUE INCLUYEN LA ENTIDAD DE CÁMARA, POSICIONES EN X,Y,Z Y ROTACIÓN EN Y)
        var px = player.getAttribute("position").x;
        var py = player.getAttribute("position").y;
        var pz = player.getAttribute("position").z;
        var ry = camera.getAttribute("rotation").y;

        //PARA SABER A DONDE ESTÁ VOLTEANDO A VER Y AÑADIRLE VELOCIDAD HACIA ESE LUGAR, NECESITO USAR EL SENO Y COSENO DE LOS ÁNGULOS
        var sy = Math.sin(ry*Math.PI/180);
        var cy = Math.cos(ry*Math.PI/180);
        var ty = Math.tan(ry*Math.PI/180);
        
        
        var mix = 0;
        var miz = 0;

        //SI LE ESTOY PICANDO A LA W, A, S o D
        //lE AÑADO LOS ATRIBUTOS PARA QUE PUEDA CAMINAR HACIA DONDE SE EL PIDE (MUEVO LA CÁMARA EN X y Z CON LA VELOCIDAD CALCULADA DESDE EL SENO Y COSENO)
        if(w){
          mix -= sy*speed;
          miz -= cy*speed;
        }
        if(a){
          mix -= cy*speed;
          miz += sy*speed;
        }
        if(s){
          mix += sy*speed;
          miz += cy*speed;
        }
        if(d){
          mix += cy*speed;
          miz -= sy*speed;
        }
        
        px += mix;
        pz += miz;

        player.setAttribute("position",{x:px,y:py,z:pz});
      }
        
		}
		  
});