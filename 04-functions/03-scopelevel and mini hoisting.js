// Block level scope & global level scope

//nested scope

// Closure !important

function one(){
    const username = "nadeem"

    function two() {
        const website = "iujbdfvo"
        console.log(username)
    }
    // console.log(website);

    two()
}

// one()
if (true) {
    const username = "user"
    if (username === "nadeem") {
        const website = "kajdf"
        console.log(username + " " + website)
    }
    // console.log(website)
}
// console.log(username)



// --------Inteersting---------

console.log(addone(5))
function addone(num) {
    return num + 1
}


addtwo(5)
const addtwo = function(num){
    return num + 2
}
