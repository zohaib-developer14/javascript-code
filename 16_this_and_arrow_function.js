const user = {
  username: "Zohaib",
  price: 500,
  welcomeMessage: function() {
    // this refers to the current object/context
    console.log(`${this.username}, How are you dude?`)
  }
}


// user["welcomeMessage"]();
// function print() {
//   console.log(this);

// }

// if (true ) {
 // console.log(this)
// }
 // console.log(this)
 //print()

// Arrow Function
// const newFun = () => {
//   const username = "sdfsd";
//   console.log(this.username);

// }

// newFun()


function myNewFun() {
  console.log(this)
}

myNewFun()
