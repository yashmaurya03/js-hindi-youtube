//Singleton

//oject literals
const mySym = Symbol("key1")

const jsUser = {
    name:"Kamaljeet",
    "full name": "Kamaljeet Singh",
    [mySym]:"mykey1",
    age: 21,
    location: "Ghazipur",
    email: "gzpkamaljeet@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday"]
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "kamaljeetsingh@google.com"
// Object.freeze(jsUser)
jsUser.email = "kamaljeet@chatgpt.com"
// console.log(jsUser);

jsUser.greeting = function(){
    // console.log("Hello Js Users");

}

jsUser.greeting2 = function(){
    // console.log(`Hello Js Users, ${this.name}`);
}
// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());

//++++++++++++++++++++++++++++Object Part 2 Video++++++++++++++++++++++++
// const tinderUser = new Object() /// this is single ton Object

const tinderUser = {
    id: "123abc",
    name: "Harshit",
    isLoggedIn: false,

}
// console.log(tinderUser);
 const regularUser ={
    eamil: "gzp@google.com",
    fullname: {
        userfullname:{
            firstname:"Kamaljeet",
            lastname: "Singh"
        }
    }
 }
//  console.log(regularUser.fullname.userfullname.firstname);

const object1 = {1:"a",2:"b"}
const object2 = {3:"a",4:"b"}
const object3 = {5:"a",6:"b"}
// const allObject = Object.assign({}, object1, object2, object3)
const allObject = {...object1,...object2,...object3}
// console.log(allObject);
 const users =[
    {
        id:1,
        email:"gzp@gmail.com"
    },
    {
        id:2,
        email:"gzpyash@gmail.com"
    },
    {
        id:1,
        email:"gzp@gmail.com"
    },
 ]
// console.log(users[1].email);
//  console.log(Object.keys(jsUser));
//  console.log(Object.values(jsUser));
//  console.log(Object.entries(jsUser));

//  console.log (tinderUser.hasOwnProperty('isLoggedIn'));

//++++++++++++++++++++++++++Object Part 3++++++++++++++++++++++++++++++++++

const course = {
    coursename: "Math with Yash",
    price:999,
    courseInstructore:"Yash"
}
// course.courseInstructore
 const{courseInstructore} = course
 console.log(courseInstructore);