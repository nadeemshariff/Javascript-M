// primitive 

// 7 types: String, number, boolean,null , undefined, symbol, bigINT

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 123456789123456789n;

// Reference (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman" , "naagraj" , "doga"];
let myObj = {
    name:"Nadeem",
    age : 24,
}

const myFunction = function () {
    console.log("aasfgsdg")
}

console.log(typeof anotherId);