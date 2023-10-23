function changeColor(elem){
    const styles = getComputedStyle(elem);
    const Value = styles.getPropertyValue('background-color');

    for (let i = 0; i < span.length; i++) 
        span[i].style.background = 'None';
    
    if(Value != 'rgb(0, 255, 0)')
        elem.style.backgroundColor = '#00FF00';
    else
        elem.style.background = 'None';
        
}

let span = document.querySelectorAll('span');

for (let i = 0; i < span.length; i++) {
    span[i].addEventListener('click', function() {
      changeColor(this);
    });
}