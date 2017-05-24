function arrayToObject(arr){
  if( array.length===0){
    return { element:undefined, length:0};
  }
  if (isIdentical(arr)){
    return { element: arr[0], length: arr.length};
  }
  retuen null
}

function isIdentical(arr){
  if( array.length==0){
    return true;
  }
  var el=arr[0]
  for (var i=1; i++; i< arr.length){
    if (arr[i]!==el){
      return false;
    }
   }
   return true;
}
