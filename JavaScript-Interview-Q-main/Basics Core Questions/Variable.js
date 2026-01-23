// https://www.frontendjoy.com/p/javascript-variables-17-quick-questions-you-need-to-master

// upper that link you will find variable question and answer

// ----------question---------
////////////////////////////////////////////
// 1. var hoisting
////////////////////////////////////////////
console.log(a); 
var a = 10;

// Answer:
// undefined
// Because `var` is hoisted + initialized to undefined.



////////////////////////////////////////////
// 2. let hoisting (TDZ)
////////////////////////////////////////////
console.log(a);
let a = 10;

// Answer:
// ReferenceError: Cannot access 'a' before initialization
// Because `let` is hoisted but not initialized.



////////////////////////////////////////////
// 3. var inside function (shadowing)
////////////////////////////////////////////
var a = 1;

function test() {
  console.log(a);
  var a = 2;
}

test();

// Answer:
// undefined
// Because inside the function, `var a` is hoisted and shadows the outer variable.



////////////////////////////////////////////
// 4. var inside block (no block scope)
////////////////////////////////////////////
if (true) {
  var x = 5;
}
console.log(x);

// Answer:
// 5
// Because `var` does NOT have block scope.



////////////////////////////////////////////
// 5. let inside block (block scoped)
////////////////////////////////////////////
if (true) {
  let y = 10;
}
console.log(y);

// Answer:
// ReferenceError
// Because `let` is block scoped.



////////////////////////////////////////////
// 6. let inside function + TDZ
////////////////////////////////////////////
var a = 1;

function demo() {
  console.log(a);
  let a = 2;
}

demo();

// Answer:
// ReferenceError
// The `let a` inside the function is hoisted but in TDZ until its line.



////////////////////////////////////////////
// 7. var in for loop + setTimeout
////////////////////////////////////////////
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Answer after 1 second:
// 3
// 3
// 3
// Because `var` is function scoped → all callbacks share the same final value (3).



////////////////////////////////////////////
// 8. let in for loop + setTimeout
////////////////////////////////////////////
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// Answer after 1 second:
// 0
// 1
// 2
// Because `let` is block scoped → each iteration gets its own i.



////////////////////////////////////////////
// 9. const object mutation
////////////////////////////////////////////
const obj = { a: 1 };
obj.a = 2;
console.log(obj.a);

// Answer:
// 2
// `const` prevents reassignment, NOT mutation.



////////////////////////////////////////////
// 10. const reassignment error
////////////////////////////////////////////
const num = 5;
num = 10;

// Answer:
// TypeError: Assignment to constant variable
// You cannot reassign a const variable.

// dkjskjfs
