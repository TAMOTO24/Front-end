var table = document.getElementById("colors");
var td = table.getElementsByTagName("td");
let div = document.querySelector('div');

function active(elem){
    let computedStyles = window.getComputedStyle(elem);
    if (computedStyles.borderColor == 'rgb(255, 255, 255)'){
        elem.style.border = '2px solid rgb(0, 0, 0)';
        return;
    }
    for(let i = 0; i < td.length; i++){
        td[i].style.border =  '2px solid rgb(0, 0, 0)';
    }

    if(computedStyles.borderColor != 'rgb(255, 255, 255)')
        elem.style.border = '3px solid rgb(255, 255, 255)';
    else
        elem.style.border = '2px solid rgb(0, 0, 0)';
}
let tableCanvas = document.getElementById("canvas");

let tdElem = tableCanvas.getElementsByTagName("td");

for (var i = 0; i < tdElem.length; i++) {
    tdElem[i].addEventListener("click", function(event) {
        draw(event.target);
    });
}
function draw(elem){
    let Styles = '';
    for(let i = 0; i < tdElem.length; i++){
        Styles = getComputedStyle(td[i]);
        if(Styles.borderColor == 'rgb(255, 255, 255)'){
            elem.style.backgroundColor = Styles.backgroundColor;
            return;
        }
    }
}
