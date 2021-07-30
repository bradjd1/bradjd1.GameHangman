//console.log('script.js loaded');

//create list which will be used to generate a random word to guess
let possibleWords = ['test', 'one', 'two', 'three', 'watermelon'];
//the chosen word for the user to have to guess
let chosenWord = '';
//get and define objects from screen
let easyBtn = document.querySelector('.easyButton');
let harderBtn = document.querySelector('.harderButton');
let displayGamesPlayed = document.querySelector('.gamesPlayed');
let displayGamesWon = document.querySelector('.gamesWon');
let displayWinPct = document.querySelector('.winPct');
let displayWord = document.querySelector('.word');
//let disAlphabetBtns = document.querySelectorAll('.alphabetBtns')
let disAlphabetBtns = document.querySelectorAll('.alph')
let DisalphabetBtnsContainer = document.querySelector('.alphabetBtns');
let displayNotificationMsg = document.querySelector('.notificationMsg');
let gallows = document.querySelector('.gallows');
let head = document.querySelector('.head');
let torso = document.querySelector('.torso');
let arm1 = document.querySelector('.arm1');
let arm2 = document.querySelector('.arm2');
let leg1 = document.querySelector('.leg1');
let leg2 = document.querySelector('.leg2');
let noose1 = document.querySelector('.noose');
let noose2 = document.querySelector('.noose2');

//declare variables
let difficultyLevel = 'easy';       //easy or hard button
let wrongGuess = 0;
let gamesPlayed = 0;
let gamesWon = 0;
let winPct = 0;
let letterSelected = '';            //letter the user selected
let sPlaceholder = "";              //chosenWord with commas removed
let foundLetters = 0;               //number of letters the user has found

function checkLetter(evt) {
    let tempFound = false;
    // get letter user picked
    letterSelected = evt.target.innerHTML;
    // if easy button, mark letter so can't be picked again
    if (difficultyLevel == 'easy') {
        evt.target.disabled = true;
    }

    console.log(chosenWord, letterSelected);
    // scan chosenWord for each occurance of picked letter
    for (let i = 0; i < chosenWord.length; i++) {
        if (letterSelected == chosenWord[i] && sPlaceholder[i * 2] == '_') {
            foundLetters++;    //count each letter that is found
            tempFound = true;  //used later if no letters found
            //           sPlaceholder[i] = letterSelected;
            sPlaceholder = populateLetter(sPlaceholder, letterSelected, i);
        }
        //      console.log('after - ', sPlaceholder, foundLetters);
        //    if no letter found, increment number wrong guesses, trigger animation
    }
    if (!tempFound) {         //the selected letter was not found
        wrongGuess++;
        //       console.log('wrong:', wrongGuess);
    }
    displayWord.innerHTML = sPlaceholder;
    //if foundLetter count = chosenWord.length they win
    //console.log('here', foundLetters, chosenWord.length)
    if (foundLetters == chosenWord.length) {
        displayNotificationMsg.innerHTML = 'You won! Click Easier or Harder to try again.';
        gamesWon++;
        winPct = gamesWon / gamesPlayed
        gameCounts();
        foundLetters = 0;
        dePopulateLetters();
    }
    //   console.log('before wrong', wrongGuess);
    if (wrongGuess == 1) {
        gallows.style.display = 'block';
        head.style.display = 'block';
        console.log('gallows', gallows, head);
    } else if (wrongGuess == 2) {
        torso.style.display = 'block';
        console.log('torso', torso)
    } else if (wrongGuess == 3) {
        arm1.style.display = 'block';
    } else if (wrongGuess == 4) {
        arm2.style.display = 'block';
    } else if (wrongGuess == 5) {
        leg1.style.display = 'block';
    } else if (wrongGuess == 6) {
        leg2.style.display = 'block';
    } else if (wrongGuess == 7) {
        noose1.style.display = 'block';
        noose2.style.display = 'block';
        displayNotificationMsg.innerHTML = `Sorry, you lost. The word was: ${chosenWord}. Click Easier or Harder to try again.`;
        //       displayWord.innerHTML = '';
        dePopulateLetters();
        gameCounts();
    }
}

function gameCounts() {
    winPct = gamesWon / gamesPlayed
    displayGamesPlayed.innerHTML = gamesPlayed;
    displayGamesWon.innerHTML = gamesWon;
    displayWinPct.innerHTML = winPct;
}

function populateLetter(string, letter, index) {
    let aString = [...string]
    aString[index * 2] = letter;
    return aString.join('');
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
    chosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    //put word on screen
    let placeholder = [];
    for (let i = 0; i < chosenWord.length; i++) {
        placeholder.push('_ ');
        //      addPlaceholder.classList.add();
    }
    sPlaceholder = placeholder.toString();
    sPlaceholder = sPlaceholder.replace(/,/g, "");
    let addPlaceholder = document.createElement('div');
    addPlaceholder.innerHTML = `<div>${sPlaceholder}</div>`
    displayWord.appendChild(addPlaceholder);
    console.log(chosenWord, addPlaceholder);
    DisalphabetBtnsContainer.style.display = 'block';
}

function populateLetters() {
    //set all letters to be selectable
    for (let i = 0; i < disAlphabetBtns.length; i++) {
        disAlphabetBtns[i].disabled = false;
    }
}
function dePopulateLetters() {
    //set all letters to be selectable
    for (let i = 0; i < disAlphabetBtns.length; i++) {
        disAlphabetBtns[i].disabled = true;
    }
}

function resetGame() {
    displayWord.innerHTML = "";
    wrongGuess = 0;
    foundLetters = 0;
    gamesPlayed++;
    displayNotificationMsg.innerHTML = '';
    getWord();
    populateLetters();
    gallows.style.display = 'none';
    head.style.display = 'none';
    torso.style.display = 'none';
    arm1.style.display = 'none';
    arm2.style.display = 'none';
    leg1.style.display = 'none';
    leg2.style.display = 'none';
    noose1.style.display = 'none';
    noose2.style.display = 'none';
}

gallows.style.display = 'none';
head.style.display = 'none';
torso.style.display = 'none';
arm1.style.display = 'none';
arm2.style.display = 'none';
leg1.style.display = 'none';
leg2.style.display = 'none';
noose1.style.display = 'none';
noose2.style.display = 'none';

//event listener for easy/harder buttons
easyBtn.addEventListener('click', easy);
harderBtn.addEventListener('click', harder);

//event Listener on alphabet buttons - call check letter
for (let i = 0; i < disAlphabetBtns.length; i++) {
    disAlphabetBtns[i].addEventListener('click', checkLetter);
}
