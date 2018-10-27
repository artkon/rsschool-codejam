function make(...arg1){

  function f(...arg2){
    if(typeof arg2[arg2.length - 1] != 'function'){
      
      return f.bind(null, ...arg2);

    } else {
      let func = arg2[arg2.length - 1];

      arg2 = arg1.concat(arg2).slice(0,-1);

      let res = arg2[0];
      for(let i = 1; i < arg2.length ; i++){
        res = func(res, arg2[i]);
      }

      return res;
    }
  }
  return f;
}