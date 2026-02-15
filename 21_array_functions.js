const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newArr = array.filter((num) => {
//   return num > 4
// })


// console.log(newArr);





// method chaining in js


const newArr = array
          .map((num) => num * 10)
          .map((num) => num + 1)
          .filter((num) => num >= 40)
// console.log(newArr);


const bilkulNewArr = array.reduce((sum, currentVal) => {
  console.log(`acc: ${sum},  currentVal ${currentVal}`)
  return sum + currentVal
}, 0)
console.log(bilkulNewArr);

