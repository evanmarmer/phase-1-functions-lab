
 const Hq = 42
 function distanceFromHqInBlocks(location){
     if (location < Hq){
         return Hq - location
     }
     return location - Hq;
 }

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location)*264
}







function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return (start - destination)*264
    }
    return (destination - start)*264
}

function calculatesFarePrice(start, destination){

  let tripDistance =  distanceTravelledInFeet(start, destination)

   if (tripDistance <400){
    return 0
   }
   
   if (tripDistance >400 && tripDistance <2000){
    return (tripDistance -400) *.02
   }

   if (tripDistance >2000 && tripDistance <2500){
    return 25
   } 

   if (tripDistance >2500){
    return 'cannot travel that far'
   }
}