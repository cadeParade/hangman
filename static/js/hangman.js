
// TODO track number of guesses

var convertTargetWordDict = function(word) {
  var targetWordDict = {};
  for( var i=0; i < word.length; i++) {
    if( word[i] in targetWordDict) {
      targetWordDict[word[i]].push(i);
    }
    else {
    targetWordDict[word[i]] = [i]
    }
  }
  return(targetWordDict)
}

var isGuessValid = function(guess) {
  guess = $.trim(guess);
  //regex of all punctuation...maybe
  punct = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/
  if( guess.length > 1 || guess.length < 1 || !isNaN(guess) || guess.search(punct) !== -1 ){
    $(".alert").text("Choose one and only one letter");
    return(false);
  }
  return(true);
}

var letterIsInWord = function(letter, dict) {
  return ((letter in dict) ? true : false);
}

var displayJudgeMessage = function(goodGuess) {
  $(".judgement").text(goodGuess ? "CORRECT" : "INCORRECT");
}

var clearMessages = function() {
  $(".letter-input").val("");
  $(".alert").text("");
  $(".judgement").text("");
}

var initializeBlanks = function(word) {
  var s = "";
  for(var i=0; i < word.length; i++) {
    s = s + "<div class='blank blank-" + i + "'>_</div>";
  }
  return(s);
}

var theyWon = function(guessedLettersRight, lettersDict) {
  return (guessedLettersRight.length === Object.keys(lettersDict).length ? true : false);
  }

var guessedLettersWrong = [];
var guessedLettersRight = [];
var targetWord = "balloon";
var lettersDict = convertTargetWordDict(targetWord);
$(".blanks").html(initializeBlanks(targetWord));

$("#guess-a-letter-button").on("click", function(e){
  e.preventDefault();
  var guess = $(".letter-input").val();
  clearMessages();
  if (!isGuessValid(guess)) {
    return("");
  }
  guess = guess.toLowerCase();
  letterIsInWord(guess, lettersDict) ? guessedLettersRight.push(guess) : guessedLettersWrong.push(guess);

  $(".guessed-letters-wrong>.letters").text(guessedLettersWrong);
  $(".guessed-letters-right>.letters").text(guessedLettersRight);

  goodGuess = letterIsInWord(guess, lettersDict)
  displayJudgeMessage(goodGuess);
  var indices;
  if(goodGuess) {
    indices = lettersDict[guess];
    for(var i=0; i < indices.length; i++) {
      $(".blank-" + indices[i]).text(guess);
    }
  }

  console.log(theyWon(guessedLettersRight, lettersDict))
  if(theyWon(guessedLettersRight, lettersDict)) {
    $('body').text('YOU WON');
  }

})
