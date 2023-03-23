

function curriedSum(numArgs) {

    let numbers = [];
    function _curriedSum(num) { 
        let total = 0;
        numbers.forEach( el => {
           total += el;
         });
         return total;
    
    }
   
        if(numbers.length === numArgs) {
          numbers

        } else {
            curriedSum(num);
        }
       
   
   
}

curriedSum(5);

// console.log(sum)
// sum(5)(30)(20)(1);