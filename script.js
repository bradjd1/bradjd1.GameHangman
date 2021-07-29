//console.log('script.js loaded');
//create list which will be used to generate a random word to guess
let possibleWords = ['test','one','two','three', 'watermelon'];
//the chosen word for the user to have to guess
let chosenWord = '';

function checkLetter () {
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
    //set difficultyLevel = easy
    //call reset game
}

function harder() {
    //set difficultyLevel = harder
    //call reset game
}

function getWord() {
    //get a word from possibleWords
    //incr games played
    //put word on screen
}

function resetGame() {
    //set wrong guess = 0
    //call get word
    //increment games played
    //populate letters
}
//event listener on easy button - call easy
//event Listener on Harder button - call harder
//event Listener on letters - call check letter
