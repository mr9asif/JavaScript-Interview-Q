
 
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

