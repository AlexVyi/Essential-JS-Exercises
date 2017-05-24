var even=[0, 120];
var notEven =[1, -3, 2.4];

even.foreach(){
  if(isEven(i)===true){
    succes("Succesfully determined that "+i+" is Even");
  }
  else{
    failure("Failed to determine that "+i+" is not Even");
  }
}

even.foreach(){
  if(isEven(i)===false){
    succes("Succesfully determined that "+i+" is not Even");
  }
  else{
    failure("Failed to determine that "+i+" is not Even");
  }
}
