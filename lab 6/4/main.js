function Delete(parentContainer) {
    parentContainer.remove();
}
function Write(button) {
    const container = button.closest('.container');
    const textarea = container.querySelector('textarea');
    if(textarea.disabled == true)
        textarea.disabled = false;
    else
        textarea.disabled = true;
}
let textElem = document.querySelectorAll('textarea');

for(let i = 0; i < textElem.length; i++)
    textElem[i].addEventListener("blur", function() {
        this.disabled = true;
});