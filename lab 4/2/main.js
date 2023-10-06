function toggleAccordion(Element) {
    if(Element.nextElementSibling.style.display == 'block'){
        Element.nextElementSibling.style.display = 'none';
        Element.classList.toggle('btn');
    }
    else{
        Element.nextElementSibling.style.display = 'block';
        Element.classList.toggle('btn');
    }
}