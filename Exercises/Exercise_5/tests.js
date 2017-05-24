if(sumArr([])===0){    
  succes("Succesfully determined the sum of the empty array");
}
else{
  failure("Failed to determine the sum of the empty array");
}

if(sumArr([3])===3){    
  succes("Succesfully determined the sum of an array with only one element");
}
else{
  failure("Failed to determine the sum of an array with only one element");
}
if(sumArr([2,5,9])===16){    
  succes("Succesfully determined the sum of a regular array");
}
else{
  failure("Failed to determine the sum of a regular array");
}
if(sumArr([2, -3, 1])===0){    
  succes("Succesfully determined the sum of an array with negative elements");
}
else{
  failure("Failed to determine the sum of an array with negative elements");
}
if(sumArr([1.2, 3.4])===4.6){    
  succes("Succesfully determined the sum of an array containing floats");
}
else{
  failure("Failed to determine the sum of an array containing floats");
}
