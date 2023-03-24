function curriedSum(numArgs) {
  let numbers = [];
  return function _curriedSum(num) { 
    numbers.push(num);
    if(numbers.length === numArgs) {
      let total = 0;
      numbers.forEach( el => {
        total += el;
      });
      return total;
    } else {
      return _curriedSum;
    }
  }  
}

// return function( ...cArgs) {
//   return that.apply(ctx, [...bArgs, ...cArgs ])
// }

// console.log(curriedSum(5))
// console.log(curriedSum(5)(30)(1)(3)(7)(4))
// sum(5)(30)(20)(1);