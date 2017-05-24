function eq(a,b){
  if(a===null && b===null){
    return true;
  }
  else{
    return a.element===b.element && a.length===b.length
  }
}

if(eq(arrayToObject([]), { element: undefined, length:0})){
  succes("Succesfully converted the empty array ");
}
else{
  failure("Failed to convert the empty array ");
}

if(eq(arrayToObject([3]), { element: 3, length:1})){
  succes("Succesfully converted the array [3]");
}
else{
  failure("Failed to convert the array [3]");
}

if(eq(arrayToObject(["a", "a", "a"]), { element: "a", length:3})){
  succes("Succesfully converted the array ["a", "a", "a"]");
}
else{
  failure("Failed to convert the array ["a", "a", "a"]");
}

if(eq(arrayToObject([2, 2, 2]), { element: 2, length:3})){
  succes("Succesfully converted the array [2, 2, 2]");
}
else{
  failure("Failed to convert the array [2, 2, 2]");
}

if(eq(arrayToObject([1.2, 3.4]), null)){
  succes("Succesfully converted the array [1.2, 3.4]");
}
else{
  failure("Failed to convert the array [1.2, 3.4]");
}

if(eq(arrayToObject([9, "9", 9]), null)){
  succes("Succesfully converted the array [9, "9", 9]");
}
else{
  failure("Failed to convert the array [9, "9", 9]");
}

