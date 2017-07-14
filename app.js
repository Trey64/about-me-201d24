'use strict'

var username = prompt('What is your name?');
alert('Hey there, ' + username + '. Enjoy this game!');
console.log('The user said their name is ' + username);

// Blank array. New items will be pushed with each correct answer
var questions = [];

// Functions

function checkAnswer(response, answer, rightMsg, wrongMsg) {
  if (answer === 'yes') {
    if (response === 'yes' || response === 'y') {
      alert(rightMsg);
      questions.push('marker');
      console.log('The user guessed ' + response + ' correctly');
    } else if (response === 'no' || response === 'n') {
      alert(wrongMsg);
      console.log('The user guessed ' + response + ' incorrectly');
    } else {
      alert('Please answer Yes or No');
      console.log('The user entered ' + response + ', an invalid string');
    }
  } else if (answer === 'no') {
    if (response === 'no' || response === 'n') {
      alert(rightMsg);
      questions.push('marker');
      console.log('The user guessed ' + response + ' correctly');
    } else if (response === 'yes' || response === 'y') {
      alert(wrongMsg);
      console.log('The user guessed ' + response + ' incorrectly');
    } else {
      alert('Please answer Yes or No');
      console.log('The user entered ' + response + ', an invalid string');
    }
  }
}

// Question 1
function question1() {
  var game = prompt('My current favorite game is Overwatch. Yes or No?').toLowerCase();
  var q1Right = 'Yes it is. D.Va is the best!';
  var q1Wrong = 'Wrong, it is!';
  checkAnswer(game, 'yes', q1Right, q1Wrong);
}
question1();

 // Question 2
function question2() {
  var sister = prompt('I have a sister. Yes or No?').toLowerCase();
  var q2Right = 'Yep, I have a younger sister.';
  var q2Wrong = 'Yes, I do! I have a younger sister.';
  checkAnswer(sister, 'yes', q2Right, q2Wrong);
}
question2();

// Question 3
function question3() {
  var car = prompt('I drive a Jeep. Yes or No?').toLowerCase();
  var q3Right = 'You\'re right, I actually drive a Volkswagen.';
  var q3Wrong = 'I don\'t, but Jeeps are still cool.';
  checkAnswer(car, 'no', q3Right, q3Wrong);
}
question3();

// Question 4
function question4() {
  var country = prompt('I have been to South America. Yes or No?').toLowerCase();
  var q4Right = 'Correct! I\'ve been to Panama, Peru, and Mexico.';
  var q4Wrong = 'Wrong! I\'ve been to Panama, Peru, and Mexico.';
  checkAnswer(country, 'yes', q4Right, q4Wrong);
}
question4();

// Question 5
function question5() {
  var celebrity = prompt('I once went on a date with Gal Gadot. Yes or No?').toLowerCase();
  var q5Right = 'Ok ' + username + ', you got me. But a guy can dream, right??';
  var q5Wrong = 'Nope, but thanks for thinking I have a chance, ' + username + '!';
  checkAnswer(celebrity, "no", q5Right, q5Wrong);
}
question5();

// Question 6
function question6() {
  var attempts = 4;
  while (attempts > 0)
    {
      var number = parseInt(prompt('I\'m thinking of a number between 1 and 10, what is it?'));
      if (number === 8) {
        alert('That\'s right!');
        questions.push(6);
        console.log('The user guessed correctly');
        break;
      } else if (number > 8) {
        alert('Too high!');
        attempts--;
        console.log('The user guessed ' + number + ', which is too high');
      } else if (number < 8) {
        alert('Too low!');
        attempts--;
        console.log('The user guessed ' +number + ', which is too low');
      } else {
        alert('Please enter a number');
        attempts--;
        console.log('The user entered an invalid string');
      }
      if (attempts === 0) {
        alert('Oh no, you ran out of guesses!');
        console.log('The user used up all their attempts');
      }
    }
  }
  question6();

// Question 7

function question7() {
  var heroes = ['batman', 'superman', 'wonder woman', 'the flash'];
  var guesses = 6;

  while (guesses > 0) {
      var justice = prompt('Can you guess one of my favorite members of the Justice League?').toLowerCase();

      for (var i = 0; i < heroes.length; i++) {
        if (justice === heroes[i]) {
          alert('Correct! My favorites are Batman, Superman, Wonder Woman, and The Flash.');
          questions.push(7);
          console.log('User guessed ' + justice);
          guesses = 0;
          break;
        }
      }
      guesses--;
      if (guesses > 0) {
        alert('Please try again. You have ' + guesses + ' tries remaining');
        console.log('User guessed incorrectly and has ' + guesses + ' remaining');
      }

      if (guesses === 0) {
        alert('Oh no, you ran out of guesses! My favorites are Batman, Superman, Wonder Woman, and The Flash.');
        console.log('User is out of guesses');
      }
  }
}

question7();

// Total Score

function totalScore() {
  var total = questions.length;
  if(total === 7) {
    alert('Thanks for playing, ' + username + '! You got ' + total +' out of 7 questions correct. Now please stop stalking me!');
    console.log('User guessed ' + total + ' questions correctly.');
  } else {
    alert('Thanks for playing, ' + username + '! You got ' + total +' out of 7 questions correct. Hopefully you learned more about me!');
    console.log('User guessed ' + total + ' questions correctly');
  }
}

totalScore();
