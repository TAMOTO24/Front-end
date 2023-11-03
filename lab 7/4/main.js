const ul = document.querySelector('ul');
const li = ul.getElementsByTagName('li');

function clearSelection() {
    for (const i of li) {
    i.classList.remove('selected');
    }
}
for (const i of li) {
    i.addEventListener('click', (event) => {
        if (event.ctrlKey)
            i.classList.toggle('selected');
        else {
            clearSelection();
            i.classList.add('selected');
        }
    });
}

fileList.addEventListener('mousedown', (event) => {
    event.preventDefault();
});