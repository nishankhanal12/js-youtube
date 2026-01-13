// Dates

const myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

// let createdDate = new Date(2026, 0, 13); // In js months start with 0. i.e 0 = jan, 1= feb, 2= march
let createdDate = new Date("2026-01-13");
// console.log(createdDate.toDateString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(createdDate.getTime());

let newDate = new Date();
// console.log(newDate.getMonth());
// console.log(newDate.getMonth()+1);

newDate.toLocaleString('default', {
    weekday : "long"
})