let div = document.querySelectorAll('td:nth-child(even)');
let j = 0;
for(let i = 0; i < div.length; i++){
    div[i].classList.add('selected');    
}