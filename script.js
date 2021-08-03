//console.log('script.js loaded');

//create list which will be used to generate a random word to guess
let possibleWords = ['test', 'one', 'two', 'three', 'watermelon', 'wi-fi', "it's"];
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
let vertGallows = document.querySelector('.vertgallows ');
let platform = document.querySelector('.platform');
let trap = document.querySelector('.trap');

//declare variables
let difficultyLevel = 'easy';       //easy or hard button
let wrongGuess = 0;
let gamesPlayed = 0;
let gamesWon = 0;
let winPct = 0;
let letterSelected = '';            //letter the user selected
let sPlaceholder = "";              //chosenWord with commas removed
let foundLetters = 0;               //number of letters the user has found
let wordList = '';

function checkLetter(evt) {
    let tempFound = false;
    // get letter user picked
    letterSelected = evt.target.innerHTML;
    // if easy button, mark letter so can't be picked again
    if (difficultyLevel == 'easy') {
        evt.target.disabled = true;
    }

    //console.log(chosenWord, letterSelected);
    // scan chosenWord for each occurance of picked letter
    for (let i = 0; i < chosenWord.length; i++) {
        //       console.log('chk letter',letterSelected, chosenWord[i],sPlaceholder[i * 2]);
        if (letterSelected == chosenWord[i] && sPlaceholder[i * 2] == '_') {
            foundLetters++;    //count each letter that is found
            tempFound = true;  //used later if no letters found
            sPlaceholder = populateLetter(sPlaceholder, letterSelected, i);
        }
    }
    if (!tempFound) {         //the selected letter was not found
        wrongGuess++;         //increment the number of wrong guesses
    }
    displayWord.innerHTML = sPlaceholder;
    //if foundLetter count = chosenWord.length they win
    //console.log('here', foundLetters, chosenWord.length)
    if (foundLetters == chosenWord.length) {
        displayNotificationMsg.innerHTML = 'You won! Click Easier or Harder to play again.';
        gamesWon++;
        winPct = gamesWon / gamesPlayed
        gameCounts();
        //foundLetters = 0;
        dePopulateLetters();
        // setTimeout(function () {
        //     alert('You Won!!');
        // }, 2);
        // if guess is incorrect, display guesses left and the coresponding body part
    } else if (wrongGuess == 1) {
        gallows.style.display = 'block';
        head.style.display = 'block';
        updateGuessesLeft(wrongGuess);
    } else if (wrongGuess == 2) {
        torso.style.display = 'block';
        updateGuessesLeft(wrongGuess);
    } else if (wrongGuess == 3) {
        arm1.style.display = 'block';
        updateGuessesLeft(wrongGuess);
    } else if (wrongGuess == 4) {
        arm2.style.display = 'block';
        updateGuessesLeft(wrongGuess);
    } else if (wrongGuess == 5) {
        leg1.style.display = 'block';
        updateGuessesLeft(wrongGuess);
    } else if (wrongGuess == 6) {
        leg2.style.display = 'block';
        updateGuessesLeft(wrongGuess);
    } else if (wrongGuess == 7) {
        noose1.style.display = 'block';
        noose2.style.display = 'block';
        trap.style.display = 'block';
        displayNotificationMsg.innerHTML = `Sorry, you lost. The word was: ${chosenWord}. Click Easier or Harder to try again.`;
        //       displayWord.innerHTML = '';
        dePopulateLetters();
        gameCounts();
        // if (noose2.style.display = 'block') {
        // setTimeout(alert('Sorry, you lost this one.'),9000);
        // }
        // setTimeout(function () {
        //     alert('Sorry, you lost this one');
        // }, 2);

    }
}

function updateGuessesLeft(guessCount) {
    displayNotificationMsg.innerHTML = `Guesses Left: ${7 - guessCount}`
}

function gameCounts() {
    winPct = Math.floor(((gamesWon / gamesPlayed).toFixed(2)) * 100);
    displayGamesPlayed.innerHTML = gamesPlayed;
    displayGamesWon.innerHTML = gamesWon;
    displayWinPct.innerHTML = `${winPct}%`;
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

async function getWord() {
    //get a word from possibleWords.
    //Can pull from an array
    //chosenWord = getWordFromArray();
    //or use an API call and get a random word from the internet
    chosenWord = await getWordFromApi();
    //put word on screen
    let placeholder = [];
    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] == '-') {
            placeholder.push('- ');
            foundLetters++;
        } else if (chosenWord[i] == "'") {
            placeholder.push("' ");
            foundLetters++;
        } else {
            placeholder.push('_ ');
        }
    }
    // for (let j = 0; j < placeholder.length; j++) {
    //     if (placeholder[j] == '-') {
    //         foundLetters++;
    //         placeholder[j] = '-';
    //     }
    // }
    sPlaceholder = placeholder.toString();
    sPlaceholder = sPlaceholder.replace(/,/g, "");
    let addPlaceholder = document.createElement('div');
    addPlaceholder.innerHTML = `<div>${sPlaceholder}</div>`
    displayWord.appendChild(addPlaceholder);
    console.log(chosenWord, addPlaceholder);
    DisalphabetBtnsContainer.style.display = 'block';
}

function getWordFromArray() {
    //get a word from possibleWords
    chosenWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    console.log('from array', chosenWord);
    return chosenWord;
}
async function getWordFromApi() {
    let category = ['https://random-word-form.herokuapp.com/random/adjective', 'https://random-word-form.herokuapp.com/random/noun'];
    let target = category[Math.floor(Math.random() * 2)];
    const response = await axios({
        method: 'get',
        // url: 'https://random-word-form.herokuapp.com/random/adjective'
        url: target
    });
    let wordFromList = response.data;
    console.log('from api', wordFromList[0]);
    return wordFromList[0];
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

async function resetGame() {
    displayWord.innerHTML = "";
    wrongGuess = 0;
    foundLetters = 0;
    gamesPlayed++;
    displayNotificationMsg.innerHTML = 'Chose the Easier or Harder button to play';
    console.log('before getword');
    await getWord();
    console.log('after getword');
    populateLetters();
    removeHangman();
    //chosenWord = '';
    //may need an await if getWord needs to finish before rest of code
}

function removeHangman() {
    trap.style.display = 'none';
    head.style.display = 'none';
    torso.style.display = 'none';
    arm1.style.display = 'none';
    arm2.style.display = 'none';
    leg1.style.display = 'none';
    leg2.style.display = 'none';
    noose1.style.display = 'none';
    noose2.style.display = 'none';
    // gallows.style.display = 'none';
    // vertGallows.style.display = 'none'
    // platform.style.display = 'none';
}

//start without hangman displaying
removeHangman();

//play a beep - used with button clicks
let audio9 = new Audio('button-29.mp3');
function playBeep29() {
    audio9.play();
    }
//event listener for easy/harder buttons
easyBtn.addEventListener('click', easy);
easyBtn.addEventListener('click', playBeep29);
harderBtn.addEventListener('click', harder);
harderBtn.addEventListener('click', playBeep29);

//event Listener on alphabet buttons - call check letter
for (let i = 0; i < disAlphabetBtns.length; i++) {
    disAlphabetBtns[i].addEventListener('click', checkLetter);
    disAlphabetBtns[i].addEventListener('click', playBeep29);
}


// for (let i = 0; i < disAlphabetBtns.length; i++) {
//     disAlphabetBtns[i].addEventListener('click', playBeep);
// }