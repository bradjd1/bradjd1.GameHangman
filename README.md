This game was created to fulfill a class project.  However, I hope it may bring enjoyment to you as you play.

This is the game of hangman.  The objective is to guess what the hidden word is with less than 7 incorrect letter guesses.  You play by guessing letters of the alphabet that you believe are in the word.  If that letter is in the word, the letter is displayed.  If the letter is not in the word, it is counted as an incorrect guess.  If you guess the word correctly with less than 7 incorrect letter guesses, you win.  You lose on the 7th incorrect letter guess.

The game is typically scored by drawing a gallows or hangmans's stand.  For each incorrect guess you add one of 6 body parts to your stickman drawing.  Once all 6 body parts and the noose are drawn, the hangman wins and you lose.  The version of scoring I choose was to start with the head, then torso, arm, arm, leg, leg and the drawing the noose is the indicator you lost.

This game was written with HTML, CSS, and Javascript using Visual Studio and -bash.

I started by making a wireframe of the screen and coming up with the basic functionality I would implement, which I documented wiht pseudocode.  I then designed a simple screen with HTML and styled it with CSS.  I converted the pseudocode into javascript.  After testing and tweaking the application, I used CSS and HTML to add the stickman graphics.  I then searched for APIs to retrieve random words.  Some of the sites I found no longer worked.  Those that did returned words with hyphens, apostrophes and other special characters and included curse words.  Since I planned to use my children and neices as test subjests, I did not want profanity appearing.  I found a site that I don't beleive contains profanity, but I don't make any guarantees.  At this time, the code is only set up to handle a hyphen or apostrophe in the returned word.

You can choose to read from the array or call the API by choosing which method to call in function getWord.  Since I implemented the array, I didn't load a lot of words in the array.

I consulted previous homework assignments for examples of how to write some of the code.  I used google to find a word API.  The one I chose to use is located at 'https://random-word-form.herokuapp.com/random/'

To contribute to this game:
1. Fork and clone the repository
2. make your edits
3. send a pull request
4. Source code: https://bradjd1.github.io/bradjd1.GameHangman/