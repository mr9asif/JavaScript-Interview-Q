// What is a closure in JavaScript?
// Ans: A closure is a function that retains access to its lexical scope, even when the function is executed
// function outer() {
//     let count = 0;
//     return function inner() {
//       count++;
//       console.log(count);
//     };
//   }
//   const counter = outer();
//   counter(); // 1
//   counter(); // 2
  

// What is the event loop in JavaScript?
// Answer:
// The event loop is a mechanism that allows JavaScript to perform non-blocking asynchronous operations. It continually checks the call stack and the callback queue. If the call stack is empty, the event loop moves the first callback from the queue to the stack for execution.


// What are promises in JavaScript?
// Answer:
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It can be in one of three states: pending, fulfilled, or rejected. You can use .then() for handling success and .catch() for handling errors.

// let myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//       resolve("Task completed!");
//     } else {
//       reject("Task failed.");
//     }
//   });
//   myPromise.then(response => console.log(response)).catch(error => console.log(error));
  

// What is the difference between var, let, and const in JavaScript?
// Answer:
// var: Function-scoped, can be redeclared and updated.
// let: Block-scoped, can be updated but not redeclared in the same scope.
// const: Block-scoped, cannot be updated or redeclared; the value is immutable (though objects and arrays assigned to const can be modified).


// What is NaN in JavaScript?
// Answer: NaN stands for "Not-a-Number" and represents a value that is not a valid number.