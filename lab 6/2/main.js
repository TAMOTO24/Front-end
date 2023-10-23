let text = '';
let main = document.getElementById('main');

function add(){
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
    text = document.querySelector('textarea').value
    text = text.replace(/\\n/g, '\n');
    console.log(text)
    for(let i = 0; i < text.length; i++){
        if(text[i] == '0'){
            let block = document.createElement("div");
            main.appendChild(block);
        }
        if(text[i] == '1'){
            let block = document.createElement("div");
            block.style.backgroundColor = 'rgb(0, 32, 96)';
            main.appendChild(block);
        }
        if(text[i] == '\n'){
            let br = document.createElement('br');
            main.appendChild(br);
        }
    }
}