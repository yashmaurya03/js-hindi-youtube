//Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ["Iranman", "Caption", "Thore", "Hulk", "Spiderman"]

const myArray = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array Methods
// myArr.push("Kamaljeet")
// myArr.pop()
// myArr.unshift(8)
// myArr.shift()
// myArr.unshift(7)
// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice, splice
 //+++++++++++++++++++++Array part two Video++++++++++++++++++++++++++++++
// console.log("A", myArr);
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B ", myArr);
// const myn2 = myArr.splice(1, 3)
// console.log(myn2);
// console.log("C", myArr);

const myNum1 = [1, 2, 3, 4]
const myNum2 = [5, 6, 7, 8]
// const allNum = myNum1.concat(myNum2)
const allNum =[...myNum1, ...myNum2]
// console.log(allNum);

const num = [1,2,3,[4,5,6],[7,8,[5,4,6]]]
// console.log(num.flat(Infinity));
// console.log(Array.isArray("Kamaljeet"));
// console.log(Array.from("Kamaljeet"));
let num1 = 100
let num2 = 200
let num3 = 300
console.log(Array.of(num1,num2,num3));