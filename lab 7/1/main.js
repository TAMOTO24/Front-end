function takeCoordinates(ev) {
    var indx = parseInt(ev.target.id);
    mouseDown = true;
    Coord[indx][0] = ev.x - square[indx].getBoundingClientRect().left;
    Coord[indx][1] = ev.y - square[indx].getBoundingClientRect().top;
    
    if(indx != undefined || isNaN(indx))
        previous = indx
    console.log("Pre", previous)
}

function moveObj(ev) {
    var indx = parseInt(ev.target.id);
    if (mouseDown) {
        if(indx == undefined || isNaN(indx))
            indx = previous
        var x = ev.x - Coord[indx][0];
        var y = ev.y - Coord[indx][1];

        x = Math.max(0, Math.min(x, container.clientWidth - square[indx].clientWidth));
        y = Math.max(0, Math.min(y, container.clientHeight - square[indx].clientHeight));

        square[indx].style.left = x + 'px';
        square[indx].style.top = y + 'px';
    }
}
function stopMoving(){
    mouseDown = false;
}

let mouseDown = false;
let container = document.querySelector('.container');
let square = document.querySelectorAll('.square');
let Coord = {};
let previous = 0;

for(let i = 0; i < square.length; i++){
    Coord[i] = [0, 0];
    square[i].addEventListener('mousedown', takeCoordinates);
}
document.addEventListener('mousemove', moveObj);
document.addEventListener('mouseup', stopMoving);