
// // GLOBAL AND LOCAL SCOPE IN JAVASCRIPT


// // global and local scope is different in WEB CONSOLE than NODEJS


// const c = 100;


// if (true) {
//   // var a = 10;
//   const b = 10;
//   let c = 10; // local scope of javascript
//   console.log(c);
// }

// // console.log(a)
// // console.log(b)
// // console.log(c)

// console.log(c)





// scope and mini hoisting

addOne(5) // this can also work
function addOne(num1) {
return num1 + 1
}

// addOne(5) // can work also


// function expression assigned to the variable -> addTwo: <uninitialized>  // temporal dead zone
// addTwo(5) // would not work here, because this is known as mini hoisiting concept
const addTwo = function addTwo (num2) {
  return num2 + 1;
}


// console.log(addTwo(5)); // can work here but before function declaration would not,


// javascript pehly memory creation karti h and then execution


// var a = 10 // ye 2 steps hain jo k neechy likhy hoye hain
// var a;      // memory phase
// a = 10;     // execution phase

console.log(a)
var a = 10;


// agar b ko console.log kar lia to ReferenceError kion k "b" exist karta h memory(Reference exist karta h) mein but usable/accessible  nhn h this is known as TEMPORAL DEAD ZONE (TDZ)
// console.log(b)
let b = 100

// console.log(c)
const c = 94;



console.log([])