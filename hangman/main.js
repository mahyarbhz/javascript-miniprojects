let elements = {
    wordWrapper: document.querySelector(".word-wrapper"),
    healthWrapper: document.querySelector(".health-wrapper"),
    health: document.querySelector(".health"),
}
let health = 5
elements.health.innerHTML = health

let words = ['hello', 'dino', 'gg', 'ok']
let word = words[Math.floor(Math.random() * words.length)]
let wordLetters = Array.from(word)
let bars = ""

wordLetters.forEach((item, i) => {
    bars += '-'
});
elements.wordWrapper.innerHTML = bars


function newLetter() {
    letter = prompt("A new chance to guess...")
    if (Array.from(letter).length == 1) {
        return letter
    }
}

function checkGuess() {

}
