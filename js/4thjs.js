//javascript is just a langua which work in the environment and it gives logic
// Browser Nodejs Electron
//all the features given by environment(API)
//It is created by Brendan Eich in just 10 days
// javascript(livescript)=>java + live + function programming treated by function as variable
//ECMA International is orgranization which provide standard to javascript as well as many programming language
//Reactjs -> JSX-> optimized UI change
// Type of function->
//function statement
//define
// function sayhello(karn)
// {

//     console.log("Hello",karn);
//     return "Tiwari";

// }
//function invocation
// sayhello(10);
// sayhello([1,2,3,4,5])
// sayhello();
// let rval = sayhello();
// console.log("rval",rval);
// if we return then it gives value otherwise it gives bydefault undefined
//Function are first class citizen
//function are treated as a variable
// let a = [12,3,4,5,6];
// let b = a;
// console.log(b);
//function expression
// let fncontainer = function ()
// {
//     console.log("I am expression");
//     console.log("I am a anonymous function");
//     // int this we dont give function name because we identify by new function which is stored in it


// }
// fncontainer();

//IIFE- immediately invoked function expression
// required , pollution
// (function fn()
// {
// console.log("I am IIFE");
// console.log("I will run on my own");

// })();

//Arrow Function -> sytax,react ki atmaa hai , jab (this) function handle nhi hota hai to arrow function ka use hota hai
// let fun = num => num* num;
// console.log(fun);
//First Class Citizens
// 1. assingment -> fn expression
// 2. variable can be passed as a parameter
// function sayhello(karn)
// {
//     console.log("Hello I am smaller");

// }
// sayhello([1,2,3,4,5]);
// sayhello(smaller);
// let rval = sayhello(smaller);
// console.log(rval);
  function outer()
  {
      console.log("I am outer returning inner");
      return function inner(){
      }
  }
  let rval = outer();
  console.log("rval",rval);
  rval();
  let var = inner();
  console.log("var",var);
  // let rval = outer();
  // console.log("rval",rval);
  // rval();