function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let answer = 0;
let input = document.querySelectorAll('input[type="radio"]');
let Count = 0; 
let div = document.querySelector('div');
let rightAnswer = 0;

function action(){
    if(Count == 10)
        return;
    let first = getRandomInt(10);
    let second = getRandomInt(10);

    answer = first*second;

    let argumentText = document.querySelector('p');
    argumentText.innerText = `${first} x ${second} = `;

    let trueAnswer = getRandomInt(input.length - 1)

    for(let i = 0; i < input.length; i++)
        input[i].nextElementSibling.textContent = `${getRandomInt(60)}`;

    input[trueAnswer].nextElementSibling.textContent = `${first*second}`

    console.log(`${trueAnswer} : ${first*second}`)
}

function checkAnswer(){
    if(Count < 10)
        Count++;
    else{
        div.textContent = `Загальний рахунок ${rightAnswer * 10}%(${rightAnswer} правильних відповідей з 10)`
        return
    }
        
    let maintext = document.querySelector('h3')
    let userAnswer = "";
    for(let i = 0; i < input.length; i++)
        if(input[i].checked)
            userAnswer = input[i].nextElementSibling.textContent;

    if(userAnswer == `${answer}`){
        div.textContent = "Правильна відповідь!"
        rightAnswer++;
    }
    else
        div.textContent = `Помилка правильна відповідь ${answer}!`
    maintext.textContent = `Питання №${Count}/10`
}
action()