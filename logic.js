function incrementSpeed(){
    // alert("hello, button clicked, speed increment")
   var speedelement = document.getElementById("speed")
   var speedVal = speedelement.value 
   if(!speedVal){
    speedVal = 0
   }
   speedelement.value = parseInt(speedVal)+2

}

function speedDecrement(){
    var speedelement = document.getElementById("speed")
    var speedVal = speedelement.value 
    if(!speedVal || speedVal<0){
     speedVal = 0
    }

    if(speedVal!=0){
        speedelement.value = parseInt(speedVal)-2
    } 
    
}

function angleIncrement(){
    var angleelement = document.getElementById("angle")
    var angleval = angleelement.value 
    if(!angleval){
        angleval = 0
    }
    angleelement.value = parseInt(angleval)+2
}

function angledecrement(){
    var angleelement = document.getElementById("angle")
    var angleval = angleelement.value 
    if(!angleval || angleval<0){
        angleval = 0
    }
    if(angleval!=0){
        angleelement.value = parseInt(angleval)-2
    }
  
}
