
 
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


