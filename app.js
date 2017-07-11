"use strict"

var game = prompt('My current favorite game is Overwatch. Yes or No?');
if (game.toLowerCase() === 'yes' || game.toLowerCase() === 'y') {
  alert('Correct!');
  console.log('The user guessed correctly');
} else if (game.toLowerCase() === 'no' || game.toLowerCase() === 'n') {
    alert('Wrong!');
    console.log('The user guessed incorrectly');
} else {
    alert('Please answer yes or no');
    console.log('The user entered an invalid string');
}


var sister = prompt('I have a sister. Yes or No?')
if (sister.toLowerCase() === 'yes' || sister.toLowerCase() === 'y') {
  alert('Correct!');
  console.log('The user guessed correctly');
} else if (sister.toLowerCase() === 'no' || sister.toLowerCase() === 'n') {
    alert('Wrong!');
    console.log('The user guessed incorrectly');
} else {
    alert('Please answer yes or no');
    console.log('The user entered an invalid string');
}


var car = prompt('I drive a Jeep. Yes or No?')
if (car.toLowerCase() === 'no' || car.toLowerCase() === 'n') {
  alert('Correct!');
  console.log('The user guessed correctly');
} else if (car.toLowerCase() === 'yes' || car.toLowerCase() === 'y') {
    alert('Wrong!');
    console.log('The user guessed incorrectly');
} else {
    alert('Please answer yes or no');
    console.log('The user entered an invalid string');
}


var country = prompt('I have been to South America. Yes or No?')
if (country.toLowerCase() === 'yes' || country.toLowerCase() === 'y') {
  alert('Correct!');
  console.log('The user guessed correctly');
} else if (country.toLowerCase() === 'no' || country.toLowerCase() === 'n') {
    alert('Wrong!');
    console.log('The user guessed incorrectly');
} else {
    alert('Please answer yes or no');
    console.log('The user entered an invalid string');
}


var celebrity = prompt('I went on a date with Gal Gadot. Yes or No?')
if (celebrity.toLowerCase() === 'no' || celebrity.toLowerCase() === 'n') {
  alert('Correct, but a guy can dream, right??');
  console.log('The user guessed correctly');
} else if (celebrity.toLowerCase() === 'yes' || celebrity.toLowerCase() === 'y') {
    alert('Nope, but thanks fot thinking so highly of me!');
    console.log('The user guessed incorrectly');
} else {
    alert('Please answer yes or no');
    console.log('The user entered an invalid string');
}


alert('Thanks for playing! Hopefully you learned more about me!')
