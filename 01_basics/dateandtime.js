// Dates (ye object type hota hai)

let myDate = new Date()
// console.log(m   yDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2024, 3, 07)
// let myCreatedDate = new Date(2024, 3, 7, 4, 19)
let myCreatedDate = new Date("04-08-2024")
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());
 let myTimeStamp = Date.now()
//  console.log(myTimeStamp);
//  console.log(myCreatedDate.getTime());
//  console.log(Math.round(Date.now()/1000));
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);

//${newDate.getDay()} and the time

console.log(newDate.toLocaleString('default', {
    weekday: "long"))}
 