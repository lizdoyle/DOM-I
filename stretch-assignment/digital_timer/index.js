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

const start =  document.querySelector('#start');
const reset =  document.querySelector('#reset');

let time = 0;
let timerInterval;

const tenSec = 10000;

start.addEventListener('click', () => {
    zeroClock();
    timerInterval = setInterval(updateTimer, 10);
    
});

reset.addEventListener('click', () => {
    start.disabled = false;
    zeroClock();
    window.clearInterval(timerInterval);
    resetTimer();
});

const zeroClock = () => {
    secondTensPlace.textContent = 0;
    secondOnesPlace.textContent = 0;
    msHundredsPlace.textContent = 0;
    msTensPlace.textContent = 0;
}

const resetTimer = () => {
    clock.classList.remove("redDigit");
    zeroClock();
    time = 0;
};

const updateTimer = () => {
    if(time < tenSec) {
        time += 10;
        msTensPlace.textContent = (time / 10).toString().substr(-1);
    if(time % 100===0) {
        msHundredsPlace.textContent = (time / 100).toString().substr(-1);
    if(time % 1000===0) {
        secondOnesPlace.textContent = (time / 1000).toString().substr(-1);
    }
    start.disabled = true;
    }
    else { 
        secondTensPlace.textContent = 0;}

        clock.classList.add('redDigit');
window.clearInterval(timerInterval);
}
    };

   





// console.log(clock);
// console.log(secondTens);
// console.log(secondOnes);
// console.log(msHundreds);
// console.log(msTens);



// class StartButton 