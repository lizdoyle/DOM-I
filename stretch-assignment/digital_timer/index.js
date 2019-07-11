// window.setInterval

// * Counts up to 10 seconds
//   * Increments every 10 ms
//   * Has digits change to red when it gets to 10 seconds
//   * Should not count past 10 seconds

const clock = document.querySelector('.digits');
const secondTensPlace =  document.querySelector('#secondTens');
const secondOnesPlace =  document.querySelector('#secondOnes');
const msHundredsPlace =  document.querySelector('#msHundreds');
const msTensPlace =  document.querySelector('#msTens');

const start =  document.querySelector('.start');
const reset =  document.querySelector('.reset');

let timer = 0;
let timerInterval;

const tenSec = 10000;

start.addEventListener('click', () => {
    resetDigits();
    timerInterval = window.setInterval(updateTimer, 10)
});

reset.addEventListener('click', () => {
    start.disabled = false;
    window.clearInterval(timerInterval);
    resetTimer();
});

const zeroClock = () => {
    secondTensPlace.textContent = 0;
    secondOnesPlace.textContent = 0;
    msHundredsPlace.textContent = 0;
    msTensPlace.textContent = 0;
}

const resetTimer()

const updateTimer = () => {
    if{time , tenSec) {
        msTensPlace
    }}
}





// console.log(clock);
// console.log(secondTens);
// console.log(secondOnes);
// console.log(msHundreds);
// console.log(msTens);



// class StartButton 