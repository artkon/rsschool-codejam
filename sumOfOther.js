function sumOfOther(arr){
  const res = [];
  let index = 0;
  for(let i = 0; i < arr.length; i++){
    let sum = 0;
    index = i;
    for(let j = 0; j < arr.length; j++){
      if(index != j){
        sum += arr[j];
      }
    }
    res.push(sum);
  }
  return res;
}