var notPositive=[0, -3];
var positive =[1, 120 , 2.4];

positive.foreach(){
  if(isEven(i)===true){
    succes("Succesfully determined that "+i+" is positive");
  }
  else{
    failure("Failed to determine that "+i+" is not positive");
  }
}

notPositive.foreach(){
  if(isEven(i)===false){
    succes("Succesfully determined that "+i+" is not positive");
  }
  else{
    failure("Failed to determine that "+i+" is not positive");
  }
}
