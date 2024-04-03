//Primitive

//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt - call by value



const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null;
let userEmail;

const id  = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 398685628565082509722870n   //bigInt declaration


//Reference (Non Prmitive)

// Arrays, Objects, Functions - call by reference


const heroes = ["Hulk", "Superman", "Batman"];
let myObj = {
    name: Kshirod,
    age: 28
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);