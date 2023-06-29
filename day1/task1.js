//var


// var meet = "say hi"

// function  meeting(){
//     var hello ="hello"
//     console.log(hello)
// }
// meeting();
// console.log(hello) 

// will show error as the scope of (var) hello is functional

// console.log(meet)

//shows global scope
// function greet(){
//     var meet ="hello this is node"
// }
// console.log(meet);


//let


let meet ="hi"
let count = 2;
 if (count =2){
    let hello = "hello"
    console.log(hello)
    // block scope
 }

 console.log(hello);
 //hello is not defined 
meet = "heyyy";
console.log(meet)
//we can update the value but can not redeclare

//
// const

// const hello = "hello"
// const hello ="heyyyyyy"//will throw error that hello is already been declared



//combination


// function check() {
//     let a = 1;
//     const b = 2;
//     var c = 3;
  
//     if (true) {
//       let a = 11; 
//       const b = 22; 
//       var c = 33; 
  
//       console.log( a, b, c); //inner scope
//     }
  
//     console.log( a, b, c); //outer scope
//   }
  
//   check();






