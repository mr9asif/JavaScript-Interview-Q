
 
// const f1 = ()=> 2;
// const f2 = ()=>4;

// const a = (f1(), f2());
 // console.log(a);  4
// because of replace the value , a can only store one value so 2 replace by 4;


// const arr = ['one', 'two', 'three'];
// const str = 'Hello';

// const res1 = arr.includes('on');
// const res2 = arr.includes('onetwo');
// const res3 = str.includes('ll');

// console.log(res1, res2, res3) false false true

// because of in array will will find a element not a subString or subElemnt that's why it's false but in String we can find also subString that's why it's true

// -------------

console.log(true == ''); // false 
console.log(true === ''); // false

// 1st: here basically in first case they both will try to convert in same dataType in js
// so both will convert in number , true = 1 and '' = 0,, that's why it false

// 2nd: here basically both check value and dataType so first is boolean and 2nd is String ;