
 
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