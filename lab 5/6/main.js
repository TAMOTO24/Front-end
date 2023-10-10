let input = document.querySelectorAll('input');
let textarea = document.querySelector('textarea');

function on_focused(event){
    let focusedElement = event.target;
    let parent = focusedElement.parentNode;

    parent.style.backgroundColor = 'rgb(170, 190, 252)';
}
function not_focused(event){
    let focusedElement = event.target;
    let parent = focusedElement.parentNode;

    parent.style.backgroundColor = '';
}

input[0].addEventListener('focus', on_focused);
input[0].addEventListener('blur', not_focused);

input[1].addEventListener('focus', on_focused);
input[1].addEventListener('blur', not_focused);

textarea.addEventListener('focus', on_focused);
textarea.addEventListener('blur', not_focused);
