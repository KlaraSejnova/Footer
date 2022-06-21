//function to dropdown the menu 
function menu(idex){
    if (idex.style.display == 'none')
    idex.style.display='';
    else
    idex.style.display='none'
    }
// change icon plus to minus and viceversa
function changeIcon(x) {
        x.classList.toggle("fa-minus-circle");
    }