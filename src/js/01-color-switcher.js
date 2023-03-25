const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyEl: document.querySelector('body')
};

let timerChangeColot = null;

const colorChange = function () {
        timerChangeColot = setInterval(() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor()
            refs.startBtn.disabled = true;
            refs.stopBtn.disabled = false;            
    },1000)
};
 
const colorChangeStop = function () {
    clearInterval(timerChangeColot);
        refs.startBtn.disabled = false;
        refs.stopBtn.disabled = true;   
};


refs.stopBtn.addEventListener('click', colorChangeStop);
refs.startBtn.addEventListener('click', colorChange);






function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
