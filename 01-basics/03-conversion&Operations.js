let score = true

console.log(typeof score);
console.log(typeof (score));
//The output of the two console logs will be the same

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // Output: true
//1 => true; 0 => false
//" " => false
// "abc" =>true


let someNumber = 123;

let StringNumber = String(someNumber);
console.log(typeof StringNumber);
console.log(StringNumber);