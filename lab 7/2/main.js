function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createRandomCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.width = `${getRandomInt(10, 30)}px`;
    circle.style.height = circle.style.width;
    circle.style.backgroundColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
    return circle;
}

const container = document.querySelector('.container');
let circle = [];
let j = 0;

for(let i = 0; i < 20; i++){
    circle[i] = createRandomCircle();
    container.appendChild(circle[i]);
}
circle[j].classList.add('active');

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    if (event.key === 'Tab' && event.shiftKey) {
        for(let i = 0; i < 20; i++)
            circle[i].classList.remove('active');
        j--;
        if(j < 0)
            j = 19;
        circle[j].classList.add('active');
    } else
    if (event.key == 'Tab') {
        for(let i = 0; i < 20; i++)
            circle[i].classList.remove('active');

        j++;
        if(j == 20)
            j = 0;
        circle[j].classList.add('active');
    } else
     if (event.key === 'ArrowLeft') {
        circle[j].style.left =  `-10px`;
    } else if (event.key === 'ArrowRight') {
        circle[j].style.left = `10px`;
    }else if (event.key === 'ArrowUp') {
        circle[j].style.top = `-10px`;
    }else if (event.key === 'ArrowDown') {
        circle[j].style.top = `10px`;
    }
});