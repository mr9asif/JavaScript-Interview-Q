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

// What is a callback function in JavaScript?
// Answer: A callback function is a function passed as an argument to another function, which is then invoked inside that function.

// What does the this keyword refer to in JavaScript?
// Answer: The this keyword refers to the object it belongs to, or the context in which the function is called.

// What is the purpose of the bind() method in JavaScript?
// Answer: The bind() method creates a new function that, when called, has its this keyword set to the provided value.

// What is hoisting in JavaScript?
// Answer: Hoisting is JavaScript's default behavior of moving declarations (but not initializations) to the top of their scope during compilation.

// What is the difference between null and undefined?
// Answer: null is an intentional assignment of "no value," while undefined means a variable has been declared but not assigned a value.

// What is the purpose of the Array.prototype.map() method?
// Answer: The map() method creates a new array by applying a provided function to each element in the original array.

// What is an immediately invoked function expression (IIFE)?
// Answer: An IIFE is a function that is defined and invoked immediately after its creation, often used to create a local scope.


// What is destructuring in JavaScript?
// Answer: Destructuring allows you to unpack values from arrays or objects into distinct variables.

// What is the difference between forEach() and map()?
// Answer: forEach() loops through an array but does not return a value, while map() creates a new array by transforming each element.

// console.log(typeof typeof 100)

