function addMSG(){
    var container = document.getElementById('msgTable');
    var table = document.createElement('table');
    table.className = 'messages';

    var currentDate = new Date();
    var formattedDate = currentDate.toString().replace(/ GMT.*/, '');
    
    var nameText = document.querySelector('input[type=text]')
    var text = document.querySelector('textarea');

    var row1 = document.createElement('tr');
    row1.innerHTML = `<td id="name">${nameText.value}</td><td id="date">${formattedDate}</td>`;
    var row2 = document.createElement('tr');
    row2.innerHTML = `<td colspan="2" id="message">${text.value}</td>`;

    table.appendChild(row1);
    table.appendChild(row2);

    container.appendChild(table);
}