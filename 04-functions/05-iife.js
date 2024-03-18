// Immediately Invoked Function Expression (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB connected`)
})();

((name) => {
    //Unnamed IIFE
    console.log(`Two ${name}`);
})('nadeem');


// chai()