let bodyEl = document.body;
let text = document.querySelectorAll('p');
let tableEl = document.querySelectorAll('td');

bodyEl.style.fontFamily = 'Arial';

text[0].style.color = 'orange';
text[0].style.background = 'yellow';
text[0].style.fontSize = '16px';
text[0].style.padding = '5px';
text[0].style.textAlign = 'center';

text[1].style.color = 'blue';
text[1].style.background = 'lightblue';
text[1].style.fontSize = '14px';
text[1].style.padding = '5px';
text[1].style.textAlign = 'right';

text[2].style.color = 'red';
text[2].style.background = 'lightcoral';
text[2].style.fontSize = '12px';
text[2].style.padding = '5px';
text[2].style.textAlign = 'left';

for(let i = 0; i < tableEl.length; i++){
    if(i % 2 == 0)
        tableEl[i].classList.add('selected');   
}