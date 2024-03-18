const user = {
    username: "Nadeem",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Nadeem"
// user.welcomeMessage()

// function chai(){
//     let username = "Nadeem"
//     console.log(this.username)
// }

// chai()


// implicit return

// const addTwo = (n1, n2) => (n1 + n2)
const addTwo = (n1, n2) => ({username: "Nadeem"})

console.log(addTwo(3,4));

const myArr = [2,4,6,8,10]

myArr.forEach()