 
let div = document.querySelector('.block2');
const rightBtn = document.querySelector('.right');
const leftBtn = document.querySelector('.left');

let left = 200;
const blokAll = 600


rightBtn.addEventListener('click', () => {
    left+= 10;
    div.style.left = `${left}px`;
    leftBtn.disabled = false;
    if (blokAll - left < 200) {
        rightBtn.setAttribute('disabled', '');
    }
})

leftBtn.addEventListener('click', () => {
    left-= 10;
    div.style.left = `${left}px`;
    rightBtn.disabled = false;
    if (left === 0) {
        leftBtn.setAttribute('disabled', '');
    }
})