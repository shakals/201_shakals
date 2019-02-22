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
var question6 = 'I have a random number between 1-9 in mind. Take a guess!';
var correctAnswer6 = Math.floor(Math.random() * 10);

// Question 7 will go on a separate loop later. Check further down below.
var question7 = 'Now, let\'s check your General Knowledge. List 1 of the 7 continents.';
var correctAnswer7 = ['asia', 'africa', 'europe', 'north america', 'south america', 'australia', 'antarctica'];

var i=0;
var userScore = 0;
var firstFiveQuestionsScore = 0;
var questionSixScore = 0;

// Show the first 5 questions
while (i<5) {
  userAnswer[i] = prompt(question[i]).toLowerCase();
  console.log(question[i], '; Correct Answer =', correctAnswer[i], '; User Answer =', userAnswer[i]);

  if (userAnswer[i] === correctAnswer[i]) {
    alert('Correct answer!');
    userScore++;
  }
  else {
    alert('Wrong answer!');
  }

  i++;
}
firstFiveQuestionsScore = userScore;

// Show the 6th question - Random Number guessing game
alert(question6);
console.log(question6, '; Correct Answer =', correctAnswer6);
for (i=1; i<=5; i++) {
  userAnswer[i] = Number(prompt('Attempt ' + i));
  console.log('User Answer =', userAnswer[i]);

  if (userAnswer[i] === correctAnswer6) {
    alert('Correct guess!');
    questionSixScore++;
    userScore++;
    break;
  }
  else {
    if (userAnswer[i] > correctAnswer6) {
      alert('Too High! Try again. ' + (5-i) + ' attempts left.');
    }
    else {
      alert('Too Low! Try again. ' + (5-i) + ' attempts left.');
    }    
  }  
}

var questionSevenScore = 0;

// Show the 7th question - List a Continent game
alert(question7);
console.log(question7, '; Correct Answer =', correctAnswer7[0], ';', correctAnswer7[1], ';', correctAnswer7[2], ';', correctAnswer7[3], ';', correctAnswer7[4], ';', correctAnswer7[5], ';', correctAnswer7[6]);
for (i=1; i<=6; i++) {
  userAnswer[i] = prompt('Attempt ' + i).toLowerCase();
  console.log('User Answer =', userAnswer[i]);

  if (correctAnswer7.indexOf(userAnswer[i]) !== -1) {
    alert('Correct!');
    questionSevenScore++;
    userScore++;
    break;
  }
  else {    
    alert('Nope! Try again. ' + (6-i) + ' attempts left.');
  }
}


alert ('Your score: ' + userScore + ' out of 7');
//alert'Correct Answer =', correctAnswer7[0], ';', correctAnswer7[1]), ';', correctAnswer7[2], ';', correctAnswer7[3], ';', correctAnswer7[4], ';', correctAnswer7[5], ';', correctAnswer7[6];

document.getElementById('liFirstFiveQuestions').textContent = 'First Five Questions: ' + firstFiveQuestionsScore;
document.getElementById('liRandomNumber').textContent = 'Random Number Game Score: ' + questionSixScore;
document.getElementById('liContinents').textContent = 'Seven Continents Game Score: ' + questionSevenScore;
document.getElementById('hTotalScore').textContent = 'Total Score = ' + userScore + ' out of 7 ' + userName;
