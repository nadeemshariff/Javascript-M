// singleton
//object.create
// object literals

const user = {
    name: 'John',
    age: 30,
    city: 'New York',
    email: "awsf@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"],
};
// console.log(user.email)
// console.log(user["email"]);
// console.log(user)

// user.email = "qwr@gmail.com";
// Object.freeze(user);
// user.email = "qwr@gmail.com";
// console.log(user);

user.greeting = function () {
    console.log("Hello");
}
user.greetingTwo = function () {
    console.log(`Hello, ${this.name}`);
}

console.log(user.greetingTwo())
console.log(user.greeting());