'use strict';
let secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
console.log(document.querySelector('.number').textContent);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
  } else if (guess === secretNum) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNum) {
    if (score > 0) {
      //   document.querySelector('.message').textContent =
      // guess > secretNum ? 'Too High!' : 'Too Low!';
      displayMessage(guess > secretNum ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'Game Over!';
      displayMessage('Game Over!');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNum);
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
