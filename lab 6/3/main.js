let td = document.querySelectorAll('td');
let div = document.querySelector('div');

function active(elem){
    let computedStyles = window.getComputedStyle(elem);

    if(computedStyles.borderColor != 'rgb(255, 255, 255)')
        elem.style.border = '2px solid rgb(255, 255, 255)';
    else
        elem.style.border = '2px solid rgb(0, 0, 0)';
    setGradient();
}
function setGradient(){
    let text = "";
    let computedStyles = ""
    for(let i = 0; i < td.length; i++){
        computedStyles = window.getComputedStyle(td[i]);
        if(computedStyles.borderColor == 'rgb(255, 255, 255)')
            text += computedStyles.backgroundColor + ", ";
    }
    let newStr = text.replace(/[, ]+$/, '');
    console.log(newStr)
    div.style.background = `linear-gradient(to bottom, ${newStr})`
}