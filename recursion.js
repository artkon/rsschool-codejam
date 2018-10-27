function recursion(t){
  const arr = [];
  let index = 0;

  function recurs(t, index){
    if(!t) return;

    if(!Array.isArray( arr[index]) ) arr[index] = [];
    
    arr[index].push(t.value);

    if(t.left){
      recurs(t.left, index + 1);
    }
    if(t.right){
      recurs(t.right, index + 1);
    }

  }
 
  recurs(t, index);

  return arr;
}