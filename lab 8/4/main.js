function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function move(obj) {
    const maxWidth = container.clientWidth - obj.clientWidth;
    const maxHeight = container.clientHeight - obj.clientHeight;

    obj.style.left = `${random(2, maxWidth)}px`;
    obj.style.top = `${random(2, maxHeight)}px`;
}

function newPosition(obj) {
    const maxWidth = container.clientWidth - obj.clientWidth;
    const maxHeight = container.clientHeight - obj.clientHeight;

    obj.style.left = `${random(2, maxWidth)}px`;
    obj.style.top = `${random(2, maxHeight)}px`;
}

let container = document.getElementById('container');
let div = document.querySelectorAll('#element');

div.forEach(i => {
    newPosition(i);
});

setInterval(function() {
    var value = random(0, div.length - 1);
    move(div[value]);
}, 1000);
