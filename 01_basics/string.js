const name = "Kamaljeet Singh"
const age = 21

console.log(`Hello my name is ${name} and my age is ${age}`);

const heroName = new String("caption_america_com")

// console.log(heroName.__proto__);
// console.log(heroName[2]);

// console.log(heroName.length);
// console.log(heroName.toUpperCase());
// console.log(heroName.charAt(4));
// console.log(heroName.indexOf('a'));

// const newHeroName = heroName.substring(0, 4)
// console.log(newHeroName);

const anotherName = heroName.slice(-4, 1)
console.log(anotherName);

const newStringOne = "    kamaljeet   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kamaljeet.com/kamaljeet%20Singh"
console.log(heroName.replace('caption', 'kamaljeet'));

console.log(url.includes('kamaljeet'))
const myName = String("Kamal_jeet_Singh")
console.log(myName.split('_'));