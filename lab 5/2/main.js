let input = document.querySelectorAll('input');

function check(){
    let text = "";
    for(let i = 0; i < input.length; i++)
        if(input[i].checked){
            text += input[i].nextElementSibling.textContent + "; ";
        }
    const p = document.querySelector('div');
    p.textContent = text;
}