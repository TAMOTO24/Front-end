let table = document.querySelector('table');
let FirstName = document.getElementById('name');
let SecondName = document.getElementById('second_name');
let rowCount = 0;

function add(){
    if(FirstName.value == "" || SecondName.value == ""){
        return;
    }
        
    rowCount++;
    let row = table.insertRow();

    let number = row.insertCell(0);
    number.textContent = `${rowCount}`;

    let name = row.insertCell(1);
    name.textContent = `${FirstName.value}`;
    let sName = row.insertCell(2);
    sName.textContent = `${SecondName.value}`;
}