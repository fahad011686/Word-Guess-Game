var alf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lib = [
    "mario",
    "pacman",
    "qbert",
    "joust",
    "galaga"
];


// randomizes a word from list
randomizer = Math.floor(Math.random() * 5);
currentWord = lib[randomizer];
console.log(currentWord);
// turns word into dashes


var dashes = "";
for (i = 0; i < currentWord.length - 1; i++) {
    dashes += "_ ";
}
dashes += "_";
// console.log(dashes);
// return = dashes;
// displays dashed word on HTML

var rando = document.querySelector("#randomWord");
rando.innerHTML = dashes;
// console.log(rando);

var guessRemaining = 10;



document.onkeyup = function (event) {
    var letter = event.key.toUpperCase();
    // console.log(letter);
    var change = document.querySelector("#letterGuessed");
    change.innerHTML = letter;
    // play sound effect
    document.getElementById('audio').play();

    // break currentWord and dashes into arrays
    var wordSplit = [];
    var dashSplit = [];
    wordSplit = currentWord.split('');
    dashSplit = dashes.split('');

    // check if letter guessed is in currentWord
    for (i = 0; i < currentWord.length; i++) {
        if (letter == wordSplit[i]) {
            dashSplit[i] = letter;
            // console.log(dashSplit);
        }
        else {
            guessRemaining--;
            var score = document.querySelector("#guessRemaining");
            score.innerHTML = guessRemaining;
        }
    }

    // update dashes to letter guessed correctly
    document.getElementById("randomWord").innerHTML = dashSplit.join("");
}
