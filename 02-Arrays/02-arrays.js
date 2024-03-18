const heros = ["t","y","u","i",]
const t_heros = ["s","g","f","d",]

// heros.push(t_heros)

// console.log(heros[3]);

// const allHeros = heros.concat(t_heros)

// console.log(allHeros);

const allNewHeros = [...heros, ...t_heros]

// console.log(allNewHeros)


console.log(Array.isArray("Nadeem"));
console.log(Array.from("Nadeem"));
console.log(Array.from({name: "Nadeem"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));