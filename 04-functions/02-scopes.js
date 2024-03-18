//scopes

// let a = 10
// const b = 20
// var c = 30


 // {}-> is scope of the function

 let a = 100
if (true) {
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner: ", a)



}

// console.log(c);//a,b is not accessible outside if block but c is accessible because its in same scope as that of if blockconsole.log(a,b,c)

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
console.log(a)