// setTimeout(() => console.log("Data Agia"), 1000)

// console.log("Next line");


// const p = Promise.resolve("Hello");

// console.log(p);


// Promise ki 3 states
// State ->	Meaning
// pending ->	kaam chal raha
// fulfilled ->	kaam hogaya
// rejected	-> error



const promiseOne = new Promise(function(resolve, reject) {

  // DO an async task
    // DB access
    // File access
    // network call
    // kernel access
    // cryptography (encryption, decryption)

  setTimeout(function() {
    console.log("Async task is completed")
    // agar resolve na likhein to promise consume nhn hoga
    // resolve()
  }, 1000)

})

// promise consumption
// Resolve ka connection h .then k saath
promiseOne.then(function() {
  console.log("Promise Completed, and consumed");

})



new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log("Async task 2");
    resolve()

  }, 1000)
}).then(function() {
  console.log("Async 2 resolved");

})


const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function() {
    resolve({username: "Zohaib", email: "zabi@gmail.com"})

  },1000 )
})

promiseThree.then(function(user) {
  console.log(user);

})






const promiseFour = new Promise(function(resolve, reject) {
   setTimeout(function() {
    let error = false;

    if (!error) {
      resolve({username: "HyZabi", password: "pk12345"})
    } else {
      reject("ERROR: Something went wrong")
    }
   }, 1000)
})



promiseFour.then(function(user) {
console.log(user);
return user.username // return karna lazmi agar chahty ho k method chaining mein child method use kar sky isy
}).then(function(username) {
console.log(username);
}).catch(function(error) {
  console.log(error);
})




const promiseFive = new Promise((resolve, reject) => {
   setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({username: "hahahah", class: "SE"})
    } else {
      reject("Error: new Error in promise Five")
    }
   }, 1000)
})


async function consumePromiseFive() {
 try {
   const response = await promiseFive
  console.log(response);

 } catch (error) {
    console.log(error);

 }

}


consumePromiseFive()






// fetching an API from JsonPlaceholders



// async function fetchAllUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const data = await response.json()

//   console.log(data['id']);

// }

// fetchAllUsers()









// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => response.json())
// .then((data) => console.log(data[0]['title']))
// .catch((e) => {
//  console.log(e);

// })






// const promiseSix = new Promise((resolve, reject) => {


//   let error = true;

//   if (!error) {
//     resolve({username: "z", rollNo: "14"})
//   } else {
//     reject("E: error haye bhai")
//   }
// })



// async function promiseConsumption() {
//   try {

//     const response = await promiseSix;
//     console.log(response);

//   } catch (e) {
//    console.log(e);

//   }
// }


// function call nhn hoga to error hoga unhandled exception rejection so rejection ko gracefully handle karna pary ga



// promiseConsumption()



fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((data) => console.log(data[9]['body'])).catch((error) => console.log(error));


