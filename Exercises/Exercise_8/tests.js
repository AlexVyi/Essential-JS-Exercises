if(isIdentical([])===true){    
  succes("Succesfully determined the internal equality of the empty array");
}
else{
  failure("Failed to determined the internal equality of the empty array");
}

if(isIdentical([3])===true){    
  succes("Succesfully determined the internal equality of an array with only one element");
}
else{
  failure("Failed to determine the internal equality of an array with only one element");
}
if(isIdentical(["a", "a", "a"])===true){    
  succes("Succesfully determined the internal equality of the array ["a", "a", "a"]");
}
else{
  failure("Failed to determine the internal equality of the array ["a", "a", "a"]");
}
if(isIdentical([2, 2, 2])===true){    
  succes("Succesfully determined the internal equality of the array [2, 2, 2]");
}
else{
  failure("Failed to determine the internal equality of the array [2, 2, 2]");
}
if(isIdentical([1.2, 3.4])===false){    
  succes("Succesfully determined the internal equality of the array [1.2, 3.4]");
}
else{
  failure("Failed to determined the internal equality of the array [1.2, 3.4]");
}

if(isIdentical([3, "9", 14])===false){    
  succes("Succesfully determined the internal equality of the array [3, "9", 14]");
}
else{
  failure("Failed to determined the internal equality of the array [3, "9", 14]");
}

if(isIdentical([9, "9", 9])===false){    
  succes("Succesfully determined the internal equality of the array [9, "9", 9]");
}
else{
  failure("Failed to determined the internal equality of the array [9, "9", 9]");
}

if(isIdentical([0, "", "0", false])===false){    
  succes("Succesfully determined internal equality of the array [0, "", "0", false]");
}
else{
  failure("Failed to determined the internal equality of the array [0, "", "0", false]");
}
