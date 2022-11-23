'use strict';

// // // console.log(document.querySelector('.message').textContent);
// // /*
// // document.querySelector('.message').textContent = 'Correct Number 😁';

// // document.querySelector('.message').textContent = 'Correct Number 😁';
// // document.querySelector('.number').textContent = 'What 🤔';

// // document.querySelector('.label-score').textContent = 'Your Score 😊';
// // document.querySelector('.guess').value = 23;
// // console.log(document.querySelector('.guess').value);
// // */

// // //EVENT LISTENER
// // 1.SELECT WHERE THE EVENT HAPPENS
// let number = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;
// //function display message
// const displayMesage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   //wHEN THERE IS NO NUMBER
//   if (!guess) {
//     displayMesage('No  Number !!😒');
//     // document.querySelector('.message').textContent = 'No  Number !!😒';
//     //WHEN PLAYER WINS
//   } else if (guess === number) {
//     document.querySelector('.check').style.backgroundColor = '#0922df';
//     displayMesage('Correct Guess🎉');
//     // document.querySelector('.message').textContent = 'Correct Guess🎉';
//     console.log((document.querySelector('.number').textContent = number));

//     document.querySelector('body').style.backgroundColor = '#226c0c';

//     document.querySelector('.number').style.width = '30rem';
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector(
//         '.label-highscore'
//       ).textContent = `highscore : ${highScore}`;
//     }

//     //wHEN NUMBER IS TOO HIGH
//     //WHEN GUESS IF WRONG
//   } else if (guess !== number) {
//     if (score > 1) {
//       displayMesage(guess > number ? 'Number Too High👆' : 'Number Too lOW👇');
//       // document.querySelector('.message').textContent =
//       //   guess > number ? 'Number Too High👆' : 'Number Too lOW👇';
//       score--;
//       document.querySelector('.label-score').textContent = `Score : ${score}`;
//     } else {
//       displayMesage('YOU LOST THE GAME 🧟‍♂️🧟‍♂️');
//       // document.querySelector('.message').textContent = 'YOU LOST THE GAME 🧟‍♂️🧟‍♂️';
//     }
//     document.querySelector('.check').style.backgroundColor =
//       guess > number ? '#ce0d27' : '#1391ad';

//     //REFACTORING CODE

//     // .
//     // } else if (guess > number) {
//     //   if (score > 1) {
//     //     document.querySelector('.message').textContent = 'Number Too High👆';
//     //     score--;
//     //     document.querySelector('.label-score').textContent = `Score : ${score}`;
//     //   } else {
//     //     document.querySelector('.message').textContent = 'YOU LOST THE GAME 🧟‍♂️🧟‍♂️';
//     //     document.querySelector('.label-score').textContent = `Score : ${0}`;
//     //   }
//     //   document.querySelector('.check').style.backgroundColor = '#ce0d27';
//     //   //WHEN GUESS IS TOO LOW
//     // } else if (guess < number) {
//     //   document.querySelector('.check').style.backgroundColor = '#1391ad';
//     //   if (score > 1) {
//     //     document.querySelector('.message').textContent = 'Number Too lOW👆';
//     //     score--;
//     //     document.querySelector('.label-score').textContent = `Score : ${score}`;
//     //   } else {
//     //     document.querySelector('.message').textContent = 'YOU LOST THE GAME 🧟‍♂️🧟‍♂️';
//     //     document.querySelector('.label-score').textContent = `Score : ${0}`;
//     //   }
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   // highScore = 0;
//   // document.querySelector('.label-highscore').textContent = `Highscore : ${highScore}`;
//   displayMesage('Start guessing...');
//   // document.querySelector('.message').textContent = 'Start guessing...';
//   number = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.number').textContent = number;
//   document.querySelector('.label-score').textContent = `Score : ${score}`;
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.guess').value = '';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.check').style.backgroundColor = '#f2f3f9';
// });

//1.generate a random number and asign it to the ? class

let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 10;
let highscore = 0;

document.querySelector('.number').textContent = secretNumber;
// document.querySelector('.number').textContent = '🤷‍♂️';
//add an event handler on button .
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // .
  // EMPTY GUESS
  if (!guess) {
    document.querySelector('.message').textContent = 'Empty Guess 🕵️‍♀️';
    // .
    //WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    document.querySelector('.guess').value = document.querySelector(
      '.message'
    ).textContent = 'Correct 🤸‍♂️';
    document.querySelector('body').style.backgroundColor = '#1bc308';
    document.querySelector('.number').textContent = secretNumber;
    console.log(`Highscore=${highscore}, score=${score}`);
    if (score > highscore) {
      highscore = score;
      document.querySelector(
        '.label-highscore'
      ).textContent = `High Score :${score}`;
    } else
      document.querySelector(
        '.label-highscore'
      ).textContent = `High Score :${highscore}`;
    //.
    //WHEN NUMBER IS LARGE
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Number too High 👆';
    score--;

    if (score < 1) {
      document.querySelector('.message').textContent = 'YOU LOST ❗💔';
      document.querySelector('.label-score').textContent = '0';
    }
    document.querySelector('.label-score').textContent = `Score : ${score}`;
    document.querySelector('.check').style.backgroundColor = '#f60808';
    //;
    //WHEN NUMBER IS SMALL.
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Number is Low 👇';
    score--;

    if (score < 1) {
      document.querySelector('.message').textContent = 'YOU LOST ❗💔';
      document.querySelector('.label-score').textContent = '0';
    }
    document.querySelector('.label-score').textContent = `Score :${score}`;
    document.querySelector('.check').style.backgroundColor = '#0ce0e3';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.check').style.backgroundColor = 'rgb(214, 208, 208)';
  document.querySelector('.label-score').textContent = `Score : ${score}`;
});
