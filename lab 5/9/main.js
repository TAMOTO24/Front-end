function add(element){
    let input;
    switch(element.name){
        case 'trousers':
            input = document.getElementById(element.name);
            input.textContent = `${parseInt(input.textContent) + 1}`;
            break;
        case 'shirt':
            input = document.getElementById(element.name);
            input.textContent = `${parseInt(input.textContent) + 1}`;
            break;
        case 'shorts':
            input = document.getElementById(element.name);
            input.textContent = `${parseInt(input.textContent) + 1}`;
            break;
        case 'shoes':
            input = document.getElementById(element.name);
            input.textContent = `${parseInt(input.textContent) + 1}`;
            break;
    }
}