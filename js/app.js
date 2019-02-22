'use strict';

console.log('Starting Javascript execution');

// Start the game with getting to know the player's name and greeting him/her
var userName = prompt('Enter your name');
alert('Hello ' + userName);
console.log('User typed his/her name as ', userName);

// Question 1
var question = 'Am I a developer (y/n)?';
var answer = prompt(question).toLowerCase();

console.log(question, answer);
if (answer === 'y' || answer === 'yes') {  
  alert('Correct answer!');
}
else{
  alert('Wrong answer!');
}

// Question 2
question = 'Am I a COBOL developer (y/n)?';
answer = prompt(question).toLowerCase();

console.log(question, answer);
if (answer === 'n' || answer === 'no') {  
  alert('Correct answer!');
}
else{
  alert('Wrong answer!');
}

// Question 3
question = 'Am I a PYTHON developer (y/n)?';
answer = prompt(question).toLowerCase();

console.log(question, answer);
if (answer === 'n' || answer === 'no') {  
  alert('Correct answer!');
}
else{
  alert('Wrong answer!');
}

// Question 4
question = 'Am I a JAVA developer (y/n)?';
answer = prompt(question).toLowerCase();

console.log(question, answer);
if (answer === 'n' || answer === 'no') {  
  alert('Correct answer!');
}
else{
  alert('Wrong answer!');
}

// Question 5
question = 'Am I boring you (y/n)?';
answer = prompt(question).toLowerCase();

console.log(question, answer);
if (answer === 'n' || answer === 'no') {  
  alert('Correct answer! You are in the right place!');
}
else{
  alert('Wrong answer! You don\'t have a choice. Ha ha ha!');
}
