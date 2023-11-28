// alert('Welcome to Guess The Number');

let guessNum = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
console.log(guessNum);

document.querySelector('.check').addEventListener('click', function () {
  let random = Number(document.querySelector('.guess').value);
  if (random === guessNum) {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.message').textContent = 'correct';
    document.querySelector('.message').style.color = 'white';
    document.querySelector('.number').textContent = guessNum;
    document.querySelector('.number').style.width = '250px';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    console.log(highscore);
  } else if (random < guessNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      document.querySelector('.message').style.color = 'red';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (random > guessNum) {
    document.querySelector('.message').textContent = 'Too high';
    document.querySelector('.message').style.color = 'blue';
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (random === 0) {
    document.querySelector('.message').textContent = 'No Number';
    document.querySelector('.message').style.color = 'red';
    document.querySelector('.score').textContent = '20';
  }
});

function again() {
  score = 20;
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.message').textContent = 'start guessing.......';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '200px';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  //.querySelector('.highscore').textContent = '0';
  guessNum = Math.trunc(Math.random() * 20) + 1;
}
