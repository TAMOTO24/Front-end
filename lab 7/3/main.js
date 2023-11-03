function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let div = document.querySelector('div');
let btn = document.querySelector('button');

btn.addEventListener('mouseenter', (event) => {
    const maxWidth = div.clientWidth - btn.clientWidth;
    const maxHeight = div.clientHeight - btn.clientHeight;

    btn.style.left = `${random(2, maxWidth)}px`;
    btn.style.top = `${random(2, maxHeight)}px`;
})