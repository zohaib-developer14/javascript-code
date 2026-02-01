let score = 33;


console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score);

console.log(typeof vauleInNumber);
console.log(valueInNumber);


//conversion

// "33" => easily converted to 33 using line 7
// "33abc" => not converted to number, rather a NaN
// "null" => converted to zero
// "undefined" => converted to NaN(not a number)
// "zohaib" => converted to NaN


let isLoggedIn = undefined;
let booleanConversionIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanConversionIsLoggedIn);
