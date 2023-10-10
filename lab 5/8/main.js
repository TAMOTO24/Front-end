let img = document.querySelector('img');
let div = document.querySelector('div')
let imgWidth = img.width;
let imgHeight = img.height;
div.style.width = `${imgWidth}px`;

function ScaleImg(element){
    let width = element.previousElementSibling.width;
    let height = element.previousElementSibling.height;
    

    if(imgWidth == width && imgHeight == imgHeight){
        element.previousElementSibling.style.width = `${width*2}px`;
        element.previousElementSibling.style.height = `${height*2}px`;
        div.style.width = `${width*2}px`;
    }else{
        element.previousElementSibling.style.width = `${width - imgWidth}px`;
        element.previousElementSibling.style.height = `${height - imgHeight}px`;
        div.style.width = `${width - imgWidth}px`;
    }
}