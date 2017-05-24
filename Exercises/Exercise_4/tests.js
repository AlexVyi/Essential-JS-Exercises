var positive =[1, 120 , 2.4];

positive.foreach(){
  if(isEven(i)===true){
    succes("Succesfully determined that "+i+" is positive");
  }
  else{
    failure("Failed to determine that "+i+" is not positive");
  }
}

if(isEven(3)===false){    
  succes("Succesfully determined that "+3+" is not positive");
}
else{
  failure("Failed to determine that "+3+" is not positive");
}

if(isEven(0)===undefined){    
  succes("Succesfully determined that "+0+" is not positive and also not negative");
}
else{
  failure("Failed to determine that if edge case 0 is neither positive nor negative");
}
