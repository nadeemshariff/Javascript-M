//Arrays

const myArr = [0,1,2,3,4,5,6,7,8,9];
const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array (1,2,3)
// console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop(5)

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);

// console.log(myArr);

//slice, splice

console.log("A" , myArr);

const myn1 = myArr.slice(2, 5);

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(2, 5);
console.log(myn1);
console.log(myn2);

console.log("C" , myArr);

//sorting and reversing

let sortMe = ['b', 'a'];

sortMe.sort();
console.log(sortMe);

sortMe.reverse();
console.log(sortMe);