function caught_speeding(speed, is_birthday){
    var omg = 0
    if (is_birthday=true){
        speed-=5
    }
    if (speed >= 61 && speed <= 81){
        omg+=1
    }
    else if (speed > 81){
        omg+=2
    }
    alert(omg)
  }
  
  caught_speeding(65,false)