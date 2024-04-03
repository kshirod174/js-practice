let score = "30abc"

// console.log (typeof score)
// console.log (typeof(score))

let valueOfNumber = Number(score)
//console.log (typeof valueOfNumber)
//console.log(valueOfNumber)  // returns NaN if the line contains no+string ie. 30abc  NaN stands for Not a Number/it is an object
                            //if the value input for conversion us null, it will return 0 after conversion
                            //in case of true/false, true will return 1 & false will return 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)   

// 1 - true
// 0 - true
// "" - false
// "kshirod" - true

let someNumber = 33
let stringSomeNumber = String(someNumber)
// console.log(stringSomeNumber);
// console.log(typeof stringSomeNumber);

//***************************Operations******************************
// let value = 3
// let negVal = -value
//console.log(negVal);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Kshirod"

let str3 = str1 + str2
// console.log(str3);


// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + 2 + 2) //will print 122 as according to JS rule string comparison comes 1st hence all later no are also string
// console.log(1 + 2 + "3") //will print 33 as the numer data type is at beginning
// console.log(1 + 2 + "3" + 2 + 1) // will print 3321

let gameCounter = 100
gameCounter++
console.log(gameCounter);
++gameCounter
console.log(gameCounter);


//****************Operation **************//

let x = 3
let y = x++
console.log(`x:${x}, y:${y}`);
console.log("x:" + x +","+"y:"+y);
