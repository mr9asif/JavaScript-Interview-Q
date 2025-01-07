
 
// const f1 = ()=> 2;
// const f2 = ()=>4;

// const a = (f1(), f2());
 // console.log(a);  4
// because of replace the value , a can only store one value so 2 replace by 4;

// ---------------

// const arr = ['one', 'two', 'three'];
// const str = 'Hello';

// const res1 = arr.includes('on');
// const res2 = arr.includes('onetwo');
// const res3 = str.includes('ll');

// console.log(res1, res2, res3) false false true

// because of in array will will find a element not a subString or subElemnt that's why it's false but in String we can find also subString that's why it's true

// -------------********Compare problem

// console.log(true == ''); // false
// console.log(true === ''); // false`

// console.log('1' == 1); //true // here it will not gona try it already same value;
// console.log('1' === 1); //true`

// 1st: here basically should check the value only but hence those are different data type so it try to convert them in same data type..so here true = 1, ‘’=0, it will convert number then the value not same that’s why it’s false. 2nd: it will check the datatype and value..so hence the dataType are different it will false not try to convert.


// **********
// const a = 10;
// const b = new Number(10);`

// console.log(a == b) //true
// console.log(a === b)` `// false`

// Note:  1st:** here true because of value are same..so here don’t check the dataType..that’s why true.

// 2nd:here false because when we use new keyword then it return object so the dataType are now different.

// --------
// console.log(Array(1,2)); // [1,2]
// console.log(Array(1)); // [<1 empty item>]`

// console.log(Array("asif")); // [”asif”]`

// console.log(Array(1).length) // 1`

// **Note:** so here it create a Constructior of Array. that get argument so if it more than 1 argument then create a array but if it only one number argument then it return length of the array mean empty. but length is 1; but if give one argument as a string then it will work properly.

// ----
// `console.log(NaN == NaN) // false`

// **Note:** JavaScript follows the IEEE 754 standard for floating-point arithmetic.

// - According to this standard, `NaN` is not equal to anything, even itself.



    // ==========
    
// console.log(Number.isNaN('Hello')); // false
// console.log(Number.isNaN(undefined)); // false
// console.log(Number.isNaN(NaN)); // true`

// **Note:**The `Object.is()` method checks if two values are the same value. Unlike `==` or `===`, it treats `NaN` as equal to itself.

// ------------------

// if (NaN) {
// console.log("This will not run");
// } else {
// console.log("NaN is falsy");
// }
// Output: NaN is falsy`

// console.log(Boolean(NaN)); // false`

// **Note:** NaN is falsy that’s why  it not run


// `function add(a,b){
// if(b){
// return a+b;
// }else{
// return function(b){
// return a+b;
// }
// }
// }`

// `const res1 = add(1,3);
// const res2 = add(2,3);
// console.log(add(res1, res2));`

// **Note:** so it’s a curry function basically..we can also do that different way.

// `const arr = [2,3,4];
// const newArr= arr.map(e=> e > 3);
// console.log(newArr)  // [false, false, true]`

// Note: here we will get bolean value not the value we have becasue here we check condition.4

// const obj = {
//     a:"2",
//     b:"3",
//     a:"4",
//     "b":"1",
// }
// console.log(obj) // {a:'4', b:'1'}
// Note: object only get the latest property if the property is same

// console.log(!"hey") // false

// -------
// for (var i = 0; i < 6; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
//  console.log(i) // 0,1,2,3,4,5

//   for (let i = 0; i < 6; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
//   console.log(i) // 6,6,6,6,6,6
// //   Note: because var will change the value we know that..but in let variable it can not be changed..so that's why it's work like this.
  
// -------
// const str = "my name is asif";

// const arr = str.split(" "); 
// console.log(arr); // ["my", "name", "is", "asif"]

// const n=arr.map(word=>{
//    return word.charAt(0).toUpperCase()+word.slice(1);
// }).join(" ")
// console.log(n); // My Name Is Asif

// // here first split and take them in a array of string. then do that in map then every single word first char do uppercase tehn slice and ignore first letter then add the word then add the senternce;


// const arr = [2,3,4][1];
// console.log(arr) //3
// const arr1 = [2,3,4][1,2];
// console.log(arr1) // 4

// const arr2 = [2,3,4][5];
// console.log(arr2) // undefine

// const arr3 = [2,3,4,5][1,2,3]; // only access 3 index last one work
// console.log(arr3) //5
// Note: here basically this is how we can access the value of array. but if we give multiple index in second array then we can only get last index value that we given

// const obj ={
//     1:"a",
//     2:"b",
//     "2":"b",
//     [1]:"c",
// };
// console.log(obj) // {"1":"c", "2":"b"}
// Note: Obj property or key always String or Symball. so if you give any number or array it will converted in a string. and if any key is double then it will get the last value;


// ---------------use strict problem-----------------------

// {
//     {
//         function fn(){
//             console.log("hellow")
//         }
//     }
// }
// fn(); // hellow
// Note: function is global scope so we can acces it from any where but if we use "use strict" then we can't because then it will use ES5


// "use strict"
// {
//     {
//         function fn(){
//             console.log("hellow")
//         }
//     }
// }
// fn(); // fn not declire!

// ------------------

// function add(a,a){
//     return a+a;
// }
// const sum= add(2,3);
// console.log(sum) //6

// "use strict"
// function add(a,a){
//     return a+a;
// }
// const sum= add(2,3);
// console.log(sum) // Duplicate paramiter!



// var a=200;
// let b=300;
// c=400
// console.log(a,b,c) // 200, 300, 400

// "use strict"
// var a=200;
// let b=300;
// c=400
// console.log(a,b,c) // c is not define, Refference error!
// Note: when we use strick then we can not access ES6 features, so global scope not work here.

// -----------------
// function fn(){
//     console.log("hello")
// }
// var fn;
// console.log(fn); // [Function: fn]
// // Note: because we can not say same name of variable and function. 

// function fn(){
//     console.log("hello")
// }
// var fn;
// console.log(fn()); // hello , undefine

// --------------

// class fn {
    
// }
// console.log(typeof(fn)) // function

// class fn {
//     constructor() {
//         console.log("Constructor called!");
//     }
// }

// const instance = new fn(); // Correct usage
// // Output: "Constructor called!"


// Accumulator how works...

// const arr=[2,3,4,5,5];
// const sum= arr.reduce((el, acc)=>{
//     return el+acc;

// })
// console.log(sum)


// const arr =[1,2,3,4,5];
// arr[100]=122;
// console.log(arr) // [ 1, 2, 3, 4, 5, <95 empty items>, 122 ]

// const arr=[..."asif"];
// console.log(arr) // [ 'a', 's', 'i', 'f' ]

// const arr = Array.from("asif");
// console.log(arr); // Output: [ 'a', 's', 'i', 'f' ]

// console.log(parseInt("10+2")); // Output: 10
// console.log(parseInt("7FM")); // Output: 7
// console.log(parseInt("FM7")); // Output: NaN

// 1.parseInt("10+2")
// Starts parsing from the first character:
// "10" is a valid number, so it parses 10.
// Encounters the + symbol, which is invalid in the middle of a number, so parsing stops.
// Output: 10.
// 2. parseInt("7FM")
// Starts parsing from the first character:
// "7" is a valid number, so it parses 7.
// Encounters F, which is not a valid digit for a number, so parsing stops.
// Output: 7.
// 3. parseInt("FM7")
// Starts parsing from the first character:
// "F" is not a valid digit for a number.
// Since the first character is invalid, parseInt immediately returns NaN without further processing.
// Output: NaN.

// ------------------------

// console.log([1,2].map((num)=>{
//     if(num > 0) return;
//     return num *2;
// })) // [ undefined, undefined ]
// // because here i didn't return anything if the condition is true, then it return undefine itself

// console.log([1,2].map((num)=>{
//     if(num > 0) return num;
//     return num *2;
// })) //  [1, 2]
// // but here i return num . so map return a new array that's why it return [1,2];

// console.log([1,2].forEach((num)=>{
//     if(num > 0) return num;
//     return num *2;
// })) // undefine
// becasue if forEach it does not return anything so that's why it's not effect. it's use for iterate

// Transform values? Use map.
// Filter values? Use filter.
// Aggregate or compute a result? Use reduce.
// Just iterate? Use forEach.



// function abc(){
//     return ;
// }
// console.log(abc()); // undefine



// -------------------------
// . Scope and Hoisting
// What wil1l be logged to the console, and why?
// function test() {
//     console.log(a);
//     var a = 10;
//     console.log(a);
//   }
//   test();
  

// 2. Closures
// What will the following code output and why?

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
//   }

// 3. Type Coercion
// What will be the result of the following expressions?

// console.log([] + []);
// console.log([] + {});
// console.log({} + []);
// console.log({} + {});

// 4. Equality Check
// What will these comparisons return?

// console.log(0 == '0');
// console.log(0 === '0');
// console.log(null == undefined);
// console.log(null === undefined);

// 5. Event Loop
// What will be logged, and in what order?

// console.log('start');
// setTimeout(() => console.log('setTimeout'), 0);
// Promise.resolve().then(() => console.log('promise'));
// console.log('end');

// 6. Object Behavior
// What happens when you execute this code?

// const obj = { a: 1, b: 2 };
// Object.freeze(obj);
// obj.a = 3;
// console.log(obj);

// 7. Dynamic Property
// What does this code log?

// let key = 'hello';
// const obj = {
//   [key]: 'world',
// };
// console.log(obj.hello);

// 9. Prototype Chain
// What will console.log(person.hasOwnProperty('name')) and console.log(person.name) return?

// function Person(name) {
//     this.name = name;
//   }
//   Person.prototype.getName = function () {
//     return this.name;
//   };
//   const person = new Person('Alice');

// console.log(foo());
// function foo() {
//   return "Hello!";
// }
// console.log(bar());
// var bar = function () {
//   return "Hi!";
// };

// "use strict";
// x = 10;
// console.log(x);

// console.log(null == 0);
// console.log(null > 0);
// console.log(null >= 0);

// function greet(name = "Guest") {
//     console.log("Hello, " + name);
//   }
//   greet();
//   greet(undefined);
//   greet(null);

// const { a = 10, b = 20 } = { a: 30 };
// console.log(a, b);

// function findMissingNumber(nums) {
//     // Your code here
//   }
  
//   console.log(findMissingNumber([3, 0, 1])); // 2
//   console.log(findMissingNumber([0, 1, 2, 3, 5])); // 4
  
// function longestWord(str) {
//     // Your code here
//   }
  
//   console.log(longestWord("The quick brown fox jumped over the lazy dog")); // "jumped"
//   console.log(longestWord("JavaScript is fun")); // "JavaScript"
  

// function countVowels(str) {
//     // Your code here
//   }
  
//   console.log(countVowels("hello world")); // 3
//   console.log(countVowels("javascript")); // 3

//   what is js
// what is variable
  

  