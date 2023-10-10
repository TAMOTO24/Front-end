function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let answer = 0;
let div = document.querySelector('div');

function action(){
    let first = getRandomInt(10);
    let second = getRandomInt(10);

    answer = first*second;

    let argumentText = document.querySelector('label');
    argumentText.innerText = `${first} x ${second} = `;
}
function check(){
    let input = document.querySelector('input[type="text"]')
    if(input.value == `${answer}`)
        div.textContent = "Правильна відповідь!"
    else
        div.textContent = `Помилка правильна відповідь ${answer}!`
}
action();