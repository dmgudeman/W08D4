Function.prototype.curry = function(numArgs) {
  return function _curry(num) {
    let numbers = [];
    if (numbers.length === numArgs.length) {
      this.curry()
    } else {
      numbers.push(num);
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