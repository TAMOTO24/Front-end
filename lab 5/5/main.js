function Switch(element){
    if(element.classList.contains('inactive')){
        element.classList.remove('inactive');
        element.classList.add('active')
    }else{
        element.classList.remove('active');
        element.classList.add('inactive')
    }
}