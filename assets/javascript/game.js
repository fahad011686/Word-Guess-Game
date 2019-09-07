var alf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var lib = [
    "mario",
    "pacman",
    "zelda"
];


// randomizes a word from list
randomizer = Math.floor(Math.random() * 3);
currentWord = lib[randomizer];
console.log(currentWord);
// turns word into dashes


var dashes = "";
for (i = 0; i < currentWord.length - 1; i++) {
    dashes += "_ ";
}
dashes += "_";
console.log(dashes);
// return = dashes;
// displays dashed word on HTML
var rando = document.querySelector("#randomWord");
rando.innerHTML = dashes;


console.log(rando);



document.onkeyup = function (event) {
    var letter = event.key.toUpperCase();
    // console.log(letter);
    var change = document.querySelector("#letterGuessed");
    change.innerHTML = letter;

    if (letter != alf) {
        var guess = document.querySelector("#guessRemaining");
    guess.innerHTML = guessRemaining - 1;

    }
}
