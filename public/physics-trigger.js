var hand = document.querySelector("#mano");
var activeObject = "";


AFRAME.registerComponent('drag-with-hand', {
	
    init: function () {
      document.querySelector("#mano").addEventListener('hitstart', function (event){
        //activeObject = event.currentTarget;
        console.log(event.closestIntersectedEl);
      });

      document.querySelector("#mano").addEventListener('hitend', function (event) {
        //console.log("GOODBYE");
      });
		},
		
  
		tick: function(time, timeDelta){
      if(activeObject!=""){
        //activeObject.setAttribute("position",{x:activeObject.getAttribute.x, y:activeObject.getAttribute.y, z:activeObject.getAttribute.z})
      }
    }
});