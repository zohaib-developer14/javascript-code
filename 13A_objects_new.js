const umwStudent = {}

umwStudent.id = "BSE-F23-M14"
umwStudent.name = "zohaib"
umwStudent.isLoggedIn = false
umwStudent[`Full Name ${umwStudent.id}`] = "Muhammad Zohaib"

// console.log(umwStudent[`Full Name ${umwStudent.id}`]);



//****************************************************/

// nested objects


const newUser = {
  email: "zadfa@gmail.com",
  regNo: "BSE-F23-M14",
  FirstName: {
    LastName: {
      hello: {

      }
    }
  }
}

// console.log(newUser.FirstName.LastName.hello)



// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);



// spread operator


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1, ...obj2}
console.log(obj3);



console.log(Object.entries(obj3))
console.log(Object.keys(obj3));
console.log(Object.values(obj3))
console.log(obj3.hasOwnProperty("a"))

console.log(typeof obj1["1"])




const newObj = {
  courseName: "Master out the Jira",
  price: "0.0",
  courseInstructor: "Atlassian University"
}



// is mein course aik object h
// newObj.courseInstructor → variable ban gaya
// this step is called destructuring
const {courseInstructor} = newObj

//course.courseInstructor → instructor naam ke variable mein store karo
// this step is called renaming the destructured object 
const {courseInstructor: instructor} = newObj;

console.log(instructor);



// another example of destructuring an object
const obj = {a:10};

const { a:b } = obj;

console.log(b); // 10





