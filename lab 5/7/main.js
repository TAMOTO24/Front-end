function changeWidth(){
    let value = document.querySelector('#First');
    value.textContent = inputWidth.value;

    square.style.width = `${inputWidth.value}px`;
}
function changeHeight(){
    let value = document.querySelector('#Second');
    value.textContent = inputHeight.value;

    square.style.height = `${inputHeight.value}px`;
}
function rotate(){
    let value = document.querySelector('#Third');
    value.textContent = inputRotate.value;

    square.style.transform = `rotate(${inputRotate.value}deg)`;
}

let square = document.querySelector('.block');
let inputWidth = document.querySelector('#WidthRang');
let inputHeight = document.querySelector('#HeightRang');
let inputRotate = document.querySelector('#RotateRang')

inputWidth.addEventListener('input', changeWidth);
inputHeight.addEventListener('input', changeHeight);
inputRotate.addEventListener('input', rotate);