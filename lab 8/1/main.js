function timer(element) {
    function zeroChanger(text) { 
        return (text < 10 ? '0' + text : text); 
    }

    function updateClock() {
        let d = new Date();
        element.innerText = `${zeroChanger(d.getHours())}:${zeroChanger(d.getMinutes())}:${zeroChanger(d.getSeconds())}`;
    }

    updateClock();

    setInterval(updateClock, 1000);
}

let p = document.getElementById('test')
timer(p);