`use strict`;

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {

    let gues = document.querySelector('.guess').value;
    console.log(gues, typeof gues);

    // when there is not input
    if (!gues) {
        document.querySelector('.message').textContent = '⛔ No number';
    }

    // When player wins
    else if (gues == secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
    }
    else if (gues > secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📈Too High!';
            score = score - 1;
            document.querySelector('.scorer').textContent = score;
        }
        else {
            document.querySelector('body').style.backgroundColor = '#841b1b';
            document.querySelector('.message').textContent = "💥Game Over";
        }
    }
    else if (gues < secretNumber) {
        if (score > 0) {
            document.querySelector('.message').textContent = '📉  Too Low';
            score = score - 1;
            document.querySelector('.scorer').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = "💥Game Over";
            document.querySelector('body').style.backgroundColor = '#ce5e5e';
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 100) + 1;

    document.querySelector('.message').textContent = "Start Guessing..."    ;
    document.querySelector('.scorer').textContent = 20;
    document.querySelector('.number ').textContent = '?';
    document.querySelector('.guess').textContent = '';
    document.querySelector('body').style.backgroundColor = '#222';
});                     