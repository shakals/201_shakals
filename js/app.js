'use strict';

console.log('Starting Javascript execution');

// Start the game with getting to know the player's name and greeting him/her
var userName = prompt('Enter your name');
alert('Hello ' + userName);
console.log('User typed his/her name as ', userName);

// Create individual arrays for Questions, Correct Answers and User Answers
var question = [];
var correctAnswer = [];
var userAnswer = [];

// Populate the corresponding Arrays mentioned above
question[0] = 'Am I a developer (y/n)?';
correctAnswer[0] = 'y';

question[1] = 'Am I a COBOL developer (y/n)?';
correctAnswer[1] = 'n';

question[2] = 'Am I a PYTHON developer (y/n)?';
correctAnswer[2] = 'n';

question[3] = 'Am I a JAVA developer (y/n)?';
correctAnswer[3] = 'n';

question[4] = 'Am I boring you (y/n)?';
correctAnswer[4] = 'n';

// Question 6 will go on a separate loop later. Check further down below.
question[5] = 'I have a random number between 1-9 in mind. Take a guess!';
correctAnswer[5] = Math.floor(Math.random * 10);

var i=0;

// Show the first 5 questions
while (i<5) {

  userAnswer[i] = prompt(question[i]).toLowerCase();
  console.log(question[i], '; Correct Answer =', correctAnswer[i], '; User Answer =', userAnswer[i]);

  if (userAnswer[i] === correctAnswer[i]) {
    alert('Correct answer!');
  }
  else {
    alert('Wrong answer!');
  }

  i++;
}

/*
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
*/