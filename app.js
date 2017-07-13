"use strict"

var username = prompt('What is your name?');
alert('Hey there, ' + username + '. Enjoy this game!');
console.log('The user said their name is ' + username);

// Blank array. New items will be pushed with each correct answer
var questions = [];


var game = prompt('My current favorite game is Overwatch. Yes or No?').toLowerCase();
if (game === 'yes' || game === 'y') {
  alert('Yes it is. D.Va is the best!');
  console.log('The user guessed ' + game + ' correctly');
  questions.push(1);
} else if (game === 'no' || game === 'n') {
    alert('Wrong, it is!');
    console.log('The user guessed ' + game + ' incorrectly');
} else {
    alert('Please answer Yes or No');
    console.log('The user entered ' + game + ', an invalid string');
}


var sister = prompt('I have a sister. Yes or No?').toLowerCase();
if (sister === 'yes' || sister === 'y') {
  alert('Yep, I have a younger sister.');
  questions.push(2);
  console.log('The user guessed ' + sister + ' correctly');

} else if (sister === 'no' || sister === 'n') {
    alert('Yes, I do! I have a younger sister.');
    console.log('The user guessed ' + sister + ' incorrectly');
} else {
    alert('Please answer Yes or No');
    console.log('The user entered ' + sister + ',  an invalid string');
}


var car = prompt('I drive a Jeep. Yes or No?').toLowerCase();
if (car === 'no' || car === 'n') {
  alert('You\'re right, I actually drive a Volkswagen.');
  questions.push(3);
  console.log('The user guessed ' + car + ' correctly');
} else if (car === 'yes' || car === 'y') {
    alert('I don\'t, but Jeeps are still cool.');
    console.log('The user guessed ' + car + ' incorrectly');
} else {
    alert('Please answer Yes or No');
    console.log('The user entered ' + car + ',  an invalid string');
}


var country = prompt('I have been to South America. Yes or No?').toLowerCase();
if (country === 'yes' || country === 'y') {
  alert('Correct! I\'ve been to Panama, Peru, and Mexico.');
  console.log('The user guessed ' + country + ' correctly');
  questions.push(4);
} else if (country === 'no' || country === 'n') {
    alert('Wrong! I\'ve been to Panama, Peru, and Mexico.');
    console.log('The user guessed ' + country + ' incorrectly');
} else {
    alert('Please answer Yes or No');
    console.log('The user entered ' + country + ',  an invalid string');
}


var celebrity = prompt('I once went on a date with Gal Gadot. Yes or No?').toLowerCase();
if (celebrity === 'no' || celebrity === 'n') {
  alert('Ok ' + username + ', you got me. But a guy can dream, right??');
  questions.push(5);
  console.log('The user guessed ' + celebrity + ' correctly');
} else if (celebrity === 'yes' || celebrity === 'y') {
    alert('Nope, but thanks for thinking I have a chance, ' + username + '!');
    console.log('The user guessed ' + celebrity + ' incorrectly');
} else {
    alert('Please answer Yes or No');
    console.log('The user entered ' + celebrity + ',  an invalid string');
}

//Question 6
var attempts = 4;
while (attempts > 0)
  {
    var number = parseInt(prompt('Pick a number between 1 and 10.'));
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

//Question 7
var heroes = ['batman', 'superman', 'wonder woman', 'the flash'];
var guesses = 6;

while (guesses > 0) {
    var justice = prompt('Can you guess one of my favorite members of the Justice League?').toLowerCase();

    for (var i = 0; i < heroes.length; i++) {
      if (justice === heroes[i] || justice === heroes[1] || justice === heroes[2] || justice === heroes[3]) {
        alert('Correct! My favorites are Batman, Superman, Wonder Woman, and The Flash.');
        questions.push(7);
        console.log('User guessed ' + justice + ', which is part of ' + heroes + i);
        guesses = 0;
        break;
      } else if(justice != heroes[i]) {
        guesses--;
        alert('Please try again. You have ' + guesses + ' tries remaining');
        console.log('User guessed incorrectly and has ' + guesses + ' remaining');
        break;
      }
  }
}

//For when the user runs out of guesses
if(guesses === 0 && justice != heroes[i] && justice != heroes[1] && justice != heroes[2] && justice != heroes[3]) {
  alert('Oh no, you ran out of guesses! My favorites are Batman, Superman, Wonder Woman, and The Flash.')
  console.log('User is out of guesses');
}

// Total Score
var total = questions.length;
if(total === 7) {
  alert('Thanks for playing, ' + username + '! You got ' + total +' out of 7 questions correct. Now please stop stalking me!');
  console.log('User guessed ' + total + ' questions correctly.');
} else {
  alert('Thanks for playing, ' + username + '! You got ' + total +' out of 7 questions correct. Hopefully you learned more about me!');
  console.log('User guessed ' + total + ' questions correctly');
}
