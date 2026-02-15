
// for of loop in javascript

const array  = [1, 2, 3, 4, 5]


for (const element of array) {

  console.log(element + ' -> Haha');

}



// MAP -> Unique values no duplication,


const map = new Map();


map.set("Pk", "Pakistan")
map.set("Us", "USA")
map.set("Pk", "Pakistan")


console.log(map);


for (const [key, value] of map) {
console.log(key, " -> ", value);
}