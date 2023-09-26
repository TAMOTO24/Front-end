function toggleAccordion(Element) {
    const icon = Element.querySelector('div [onclick="toggleAccordion(this)"]::after');
    if(Element.nextElementSibling.style.display == 'block'){
        Element.nextElementSibling.style.display = 'none';
    }
    else{
        Element.nextElementSibling.style.display = 'block';
    }
}