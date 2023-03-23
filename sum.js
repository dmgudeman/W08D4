
function sum( ...args) {
    console.log(args)
    let total = 0;

    args.forEach( el => {
        total += el;
    });

    return total;
}
   let a = [1, 2, 3, 4];
   let b = [8,9,7]
//  console.log( sum(...[1, 2, 3, 4]))

