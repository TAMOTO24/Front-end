function flipCard(elem) {
    var front = elem.querySelector(".front");
    var back = elem.querySelector(".back");

    const styles = getComputedStyle(front);
    const Value = styles.getPropertyValue('background-color');

    if(Value == 'rgb(255, 255, 255)'){
        front.style.transform = "rotateY(180deg)";
        back.style.transform = "rotateY(0deg)"
        front.style.backgroundColor = 'black';
    }else
    {
        front.style.transform = "rotateY(0deg)";
        back.style.transform = "rotateY(180deg)";
        front.style.backgroundColor = 'white';
    }
}