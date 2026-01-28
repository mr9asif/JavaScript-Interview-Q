
const person={
    name:"asif",
    age:23
};

// it take more time
// for(let p in person){
//     console.log(person[p]);
// }

// it good one
const p = Object.keys(person);
for(let el of p){
    debugger
    console.log(person[el]);
}
