module.exports = function make(...arg1) {
  function f(...arg2) {
    if (typeof arg2[arg2.length - 1] === 'function') {
      const func = arg2[arg2.length - 1];

      const args = arg1.concat(arg2).slice(0, -1);

      let res = args[0];
      for (let i = 1; i < args.length; i += 1) {
        res = func(res, args[i]);
      }

      return res;
    }
    return f.bind(null, ...arg2);
  }
  return f;
};
