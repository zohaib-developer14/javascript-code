// Immediately Invoked Function Expression IIFE


(function printHelloWorldOne(){
  console.log("Hello, World from IIFE 1");

})(); // semi colon lazmi warna neechy wala function kabhi execute nhn hoga




(() => {
  console.log("Hello, World from IIFE 2");
})()