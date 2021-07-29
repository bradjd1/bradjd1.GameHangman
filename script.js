//console.log('script.js loaded');
//create list which will be used to generate a random word to guess
let possibleWords = ['test','one','two','three', 'watermelon'];
//the chosen word for the user to have to guess
let chosenWord = '';
//get and define objects from screen
let easyBtn = document.querySelector('.easyButton');
let harderBtn = document.querySelector('.harderButton');
let displayGamesPlayed = document.querySelector('.gamesPlayed');
let displayGamesWon = document.querySelector('.gamesWon');
let displayWinPct = document.querySelector('.winPct');
let displayWord = document.querySelector('.word');
let disAlphabetBtns = document.querySelectorAll('.alphabetBtns')

//declare variables
let difficultyLevel = 'easy';
let wrongGuess = 0;
let gamesPlayed = 0;
let gamesWon = 0;
let winPct = 0;

function checkLetter () {
    console.log('in check letter');
    console.log(disAlphabetBtns[0].children[0]);
    // get letter user picked
    // increment number wrong guesses
    // if easy button, mark letter so can't be picked again
    // scan chosenWord for each occurance of picked letter
    //loop thru chosenWord
    //    for each occurance of letter found, put letter on screen (fm?)
    //    for each occurance of letter found, increment found letter count
    //    if no letter found, increment number wrong guesses, trigger animation
    //if foundLetter count = chosenWord.length
    //   update winner
    //   message to play again, choose easy or hard
    //   incriment games won, win pct
    //if number wrong guess = 7
    //   display lost
    //   update win pct
}

function easy() {
    difficultyLevel = 'easy';
    resetGame();
}

function harder() {
    difficultyLevel = 'harder'
    resetGame();
}

function getWord() {
    //get a word from possibleWords
    let word = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    gamesPlayed++;
    //put word on screen
    let placeholder = [];
    for (let i = 0; i < word.length; i++) {
        placeholder.push('_ ');
  //      addPlaceholder.classList.add();
    }
    let sPlaceholder = placeholder.toString();
    sPlaceholder = sPlaceholder.replace(/,/g,"");
    let addPlaceholder = document.createElement('div');
    addPlaceholder.innerHTML = `<div>${sPlaceholder}</div>`
    displayWord.appendChild(addPlaceholder);
    console.log(word, addPlaceholder);
}

function populateLetters() {
    //set all letters to be selectable
}

function resetGame() {
    displayWord.innerHTML = "";
    wrongGuess = 0;
    getWord();
    //populate letters
}
//event listener for easy/harder buttons
easyBtn.addEventListener('click',easy);
harderBtn.addEventListener('click',harder);

//event Listener on alphabet buttons - call check letter
for (let i = 0; i < 26; i++){
//disAlphabetBtns.addEventListener('click',checkLetter);
}
