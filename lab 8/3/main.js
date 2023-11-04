

function showImage(index) {
    for(let i = 0; i < images.length; i++){
        if(i == index)
            images[i].style.transform = 'translateX(0)';
        else
            images[i].style.transform = 'translateX(100%)';
    }
}

function changeImage(step) {
    currentIndex += step;

    if(currentIndex >= images.length)
        currentIndex = 0;
    if(currentIndex < 0)
        currentIndex = images.length - 1;

    showImage(currentIndex);
}
const images = document.querySelectorAll('img');
let currentIndex = 0;
let index = document.querySelector('#number')
setInterval(function(){
    changeImage(1)
    index.textContent = `${currentIndex}st.`;
}, 3000);