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