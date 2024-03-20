const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body")
buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', (e) => {
        console.log(e)
        console.log(e.target)
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'White') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'Blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'Yellow') {
            body.style.backgroundColor = e.target.id;
        }
    })
});