// Primitive

// 7 Types:- String Number Boolean, Null, Undifined, Symbol, BigInt 

const score = 10078
const scorValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 4441654646464n


// Non Primitive(Reference)

//Array, Object, Function

const heros = ["ironman", "Spiderman", "Thore"]

const myObject = {
    name: "Kamaljeet",
    age: 21,

}

const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof myFunction);

//************************* Memory *************************************

//Stack (Primitive), Heap (Non-Primitive)

let myName = "Kamaljeet Singh"

 let anotherName = myName
 anotherName = "Yash Maurya"

 console.log(myName);
 console.log(anotherName);
 
 let user1 = {
    email:"gzpkamaljeet@gmail.com",
    password: "Singh@123"
 }
 let user2 = user1
 user2.email = "gzpyashmaurya@google.com"

 console.log(user1.email);
 console.log(user2.email);