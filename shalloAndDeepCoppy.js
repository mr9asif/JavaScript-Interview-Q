// const obj1 = {
// name:"Asif"
// };
// const obj2 = obj1;
// console.log(obj1) // {name:”Asif}
// console.log(obj2) // {name:”Asif”}`

// obj2.name= "Raj";
// console.log(obj1) // {name:”Raj”}
// console.log(obj2) // {name:”Raj}`

// Note:here basically obj2 refference obj1. it’s not coppy of obj1. That’s why if we change in obj2 it will change in obj1.

// const obj1 = {
// name:"Asif"
// };
// const obj2 = {...obj1};
// console.log(obj1) // {name:”Asif}
// console.log(obj2) // {name:”Asif”}`

// obj2.name= "Raj";
// console.log(obj1) // {name:”Asif”}
// console.log(obj2) // {name:”Raj}`

// Note:here we coppy obj1 in obj2. so it’s not reference obj1..now when we change something in obj2 it will be change only in obj2 not obj1.

// # **Shallo Coppy**

// const obj = {
// name:"Asif",
// age:40,
// social:{
// facebook:{
// email:"asif@gmail.com",
// account:"ASIF"
// },
// twitter:{
// email:"asiftwitter@gmail.com",
// account:"ANIS"
// }
// }
// }

// const obj2 = {...obj};
// console.log(obj);
// console.log(obj2)

// **Note:** here it’s a nested object..here we coppy obj in obj2. but here only will coppy level 1 property but level2 or level 3 will be just reference..example bellow

// obj2.name="Khan";
// obj2.social.facebook.account="khan";
// console.log(obj);
// console.log(obj2)

// **output:**

// {
// name: 'Asif',
// age: 40,
// social: {
// facebook: { email: 'asif@gmail.com', account: 'khan' },
// twitter: { email: 'asiftwitter@gmail.com', account: 'ANIS' }
// }
// }
// {
// name: 'Khan',
// age: 40,
// social: {
// facebook: { email: 'asif@gmail.com', account: 'khan' },
// twitter: { email: 'asiftwitter@gmail.com', account: 'ANIS' }
// }
// }`

// **Note:** here we can see only level 1 change in obj2 because it was coppied. but level 2,3 it’s change also in obj because it was only reffered.

// # **Deep Coppy**

// const obj = {
// name:"Asif",
// age:40,
// social:{
// facebook:{
// email:"asif@gmail.com",
// account:"ASIF"
// },
// twitter:{
// email:"asiftwitter@gmail.com",
// account:"ANIS"
// }
// }
// }

// ### const obj2 = JSON.parse(JSON.Stringify(obj));`

// **Note:** here i have coppy obj in obj2 , but it’s a deep coppy. this is one of how we can deep coppy. here when we coppy we convert it in string , so we know string can coppied..after coppy we again convert it in parse..