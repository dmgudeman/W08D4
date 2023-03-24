Function.prototype.curry = function(numArgs) {
  let numbers = [];
  const that = this;
  return function _curry(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return that(...numbers);
    } else {
      return _curry;
    }
  }
}

// let numbers = [];
//   return function _curriedSum(num) { 
//     numbers.push(num);
//     if(numbers.length === numArgs) {
//       let total = 0;
//       numbers.forEach( el => {
//         total += el;
//       });
//       return total;
//     } else {
//       return _curriedSum;
//     }
//   }  