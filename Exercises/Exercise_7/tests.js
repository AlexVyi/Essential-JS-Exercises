if(isInternallyEquivalent([])===true){    
  succes("Succesfully determined the internal equivalence of the empty array");
}
else{
  failure("Failed to determined the internal equivalence of the empty array");
}

if(isInternallyEquivalent([3])===true){    
  succes("Succesfully determined the internal equivalence of an array with only one element");
}
else{
  failure("Failed to determine the internal equivalence of an array with only one element");
}
if(isInternallyEquivalent(["a", "a", "a"])===true){    
  succes("Succesfully determined the internal equivalence of the array ["a", "a", "a"]");
}
else{
  failure("Failed to determine the internal equivalence of the array ["a", "a", "a"]");
}
if(isInternallyEquivalent([2, 2, 2])===true){    
  succes("Succesfully determined the internal equivalence of the array [2, 2, 2]");
}
else{
  failure("Failed to determine the internal equivalence of the array [2, 2, 2]");
}
if(isInternallyEquivalent([1.2, 3.4])===false){    
  succes("Succesfully determined the internal equivalence of the array [1.2, 3.4]");
}
else{
  failure("Failed to determined the internal equivalence of the array [1.2, 3.4]");
}

if(sumArr([3, "9", 14])===false){    
  succes("Succesfully determined the internal equivalence of the array [3, "9", 14]");
}
else{
  failure("Failed to determined the internal equivalence of the array [3, "9", 14]");
}

if(isInternallyEquivalent([9, "9", 9])===true){    
  succes("Succesfully determined the internal equivalence of the array [9, "9", 9]");
}
else{
  failure("Failed to determined the internal equivalence of the array [9, "9", 9]");
}

if(isInternallyEquivalent([0, "", "0", false])===true){    
  succes("Succesfully determined internal equivalence of the array [0, "", "0", false]");
}
else{
  failure("Failed to determined the internal equivalence of the array [0, "", "0", false]");
}
