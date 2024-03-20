const tinderUser = {}


tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.age = 25;
tinderUser.isLoggedIn = false


const regUser = {
    email : "s@gmail.com",
    fullname: {
        userfullname : {
            firstname: "Nadeem",
            lastname: "Shariff"
        }
    }
}

// console.log(regUser.fullname.userfullname.firstname);

// console.log(tinderUser);


const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

const obj3 = Object.assign({}, obj1, obj2)


const obj4 = {...obj1, ...obj2}; //spread operator
// console.log(obj4)    

const users = [
{
    id: 1,
    name:"Alice"
},
{
    id: 1,
    name:"Alice"
},
{
    id: 1,
    name:"Alice"
},
]

users[1].name
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
