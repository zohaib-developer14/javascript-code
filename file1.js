// * const, var, let datatypes

//& **** VAR keyword in JS ****
//* **** Issues (kyun badnaam hai) ****:
/*
1. Function scoped (block ignore karta hai)
2. Redeclare ho jata hai
3. Bugs produce karta hai (especially async code)
*/

if (true) {
  var a = 5;
}
console.log(a); // 5 ❌(leak)



//^ **** LET KEYWORD IN JS ****

// **** Features ****:

// Block scoped ✅
// Redeclare ❌
// Value change allowed ✅

let count = 1;
count = 2; // ✅

if (true) {
  let b = 10;
}

console.log(b); // ❌ Exception


//* **** Features *****:

// Block scoped ✅
// Reassign ❌
// Runtime value allowed ✅


const PORT = 3000;
const user = { name: "Ali" };
user.name = "Ahmed"; // ✅


console.table([PORT, count, user]);
