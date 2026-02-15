// Rest Operator in javascript

// ab maan no calculateCartPrice aik function h jo k kia karta h, cart ki price calcaulate karta h ab agar ham aik parameter dalein to wo aik calculate karey ga rest of the nhn, to us k liye ... ye operator use hota h jisy rest kehty hain, spread bhi kaha jata h bas use case par depend karta h

// interview question k kia value aiye gi num1 mein agar return karyn gy to, detail se batao, interview ready question


function calculateCartPrice (value1, value2, ...num1) {
return  num1;
}



// console.log(calculateCartPrice(555, 999, 990,4000, 5000));



function handleObj (objectNew) {
   console.log(objectNew.username, objectNew.price);

}

console.log({
  username: "Zohaib",
  price: 450
});



function handleArray(arrayNew) {
  return arrayNew[0] + arrayNew[1]
}

console.log(handleArray([5, 10, 15]));

