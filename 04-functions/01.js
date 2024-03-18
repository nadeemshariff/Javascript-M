

function sayMyName() {
    console.log("N")
    console.log("A")
    console.log("D")
    console.log("E")
    console.log("E")
    console.log("M")
}

// sayMyName()

function addTwoNumbers(n1, n2) {
    // console.log(n1 + n2);
    // let result = n1 + n2;
    // return result;
    return n1 + n2;
}

const result = addTwoNumbers(5, 9)
// console.log("Result:", result);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} you are logged in.`;
}
// console.log(loginUserMessage("Nadeem"));
// console.log(loginUserMessage());

// In shooping cart you need parameters which are not defined 

function calculateCartPrice(val1,val2,...num1) {// here ... means the Rest operator where the open info is bundled
    return num1
}

// console.log(calculateCartPrice(200,400,500))

const user = {
    username: "Nadeem",
    price: 9999
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price : "USD",
})

const myNewArr = [200,400,800,799815]

function returnSecondValue(getArr){
    return getArr[1]
}

console.log(returnSecondValue(myNewArr));