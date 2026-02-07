let score = 400;

// console.log(score)

// Returns a NaN (Not a Number)
// let balance = Number("500ABC")

let balance = Number(100)
// console.log(balance.toString().length)

// set precision, according to the requirements
balance /= 543;
// console.log(balance.toFixed(2))



let anotherNumber = 123.8434

// console.log(anotherNumber.toPrecision(2))



let hundreds = 100000000

// console.log(hundreds.toLocaleString('en-PK'))

// console.log(Number.MIN_VALUE)














// **************** MATHS *****************************
// console.log(Math.abs(-43));
// console.log(Math.round(56.32));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.2));
// console.log(Math.min(2, 3, 5, 6, 0, 0, 1, 1, -1));
// console.log(Math.random(1));



let machineNumber = (Math.random() * 10).toFixed(0);

let userInput = 5

// if (machineNumber == userInput)
//   console.log(`Machine Number and User Input Matched -> ${machineNumber} and ${userInput}`)
// else
//   console.log(`Not Matched -> ${machineNumber} and ${userInput}`)



// + 1 to avoid numbers for .04, .5 like that "0.0008816524521848557"
let anotherMachineNumber = (Math.random() * 10);

// console.log(anotherMachineNumber);

let min = 10;
let max = 20;


console.log(Math.floor(Math.random() * (max - min + 1)) + min)






