// Javascript mein datatype deny ki zaroorat nhn, jab argument aye ga to wo execute hojaye ga



// function greetingMsg (username) {
// // can use string interpolation
// // type safety

// if (!undefined) {
//   console.log("Please enter a username");
//   return

// }
//   return username;
// }



//    const string =  greetingMsg();
//    //console.log(string);


// function to add and multiply and calculate


function addTwoNumbers (number1, number2) {
  return number1 + number2;

}
function subTwoNumbers (number1, number2) {
  return number1 - number2;

}
function mulTwoNumbers (number1, number2) {
  return number1 * number2;

}
function divTwoNumbers (number1, number2) {
  // handle exception

  if (!number2) {
    console.log("Divide by zero");
    return
  }
  return number1 / number2;

}

console.log(divTwoNumbers(1, 0))