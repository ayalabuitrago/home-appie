'use strict';
{
const btnMenuOpen = document.querySelector('#btn-navbar_open');
const btnMenuClose = document.querySelector('#btn-navbar_close');
const menu = document.querySelector('.navbar-mobile-container');
const display = document.querySelector('#display');
const dropdown = document.querySelectorAll('.dropdown');

//close dropdowns
function closeAll(index){
    for(let i = 0; i < dropdown.length; i++){
        if(i != index){
            let submenu = dropdown[i].lastElementChild;
            submenu.classList.remove('active');
            submenu.removeAttribute('style');
        }
    }
}

//open menu
btnMenuOpen.addEventListener('click', ()=>{
    menu.classList.add('active');
    display.classList.add('off');
});

//close menu
btnMenuClose.addEventListener('click',()=>{
    menu.classList.remove('active');
    display.classList.remove('off');
    closeAll();
});

//close menu by click outside
display.addEventListener('click',()=>{
    menu.classList.remove('active');
    display.classList.remove('off');
    closeAll();
});

//DROPDOWNS BUTTONS
for(let i = 0; i < dropdown.length; i++){
    dropdown[i].addEventListener('click',()=>{
       const submenu = dropdown[i].lastElementChild;
        closeAll(i);

       if(submenu.classList.contains('active')){
           submenu.classList.remove('active');
           submenu.removeAttribute('style');
       }
       else{
           submenu.classList.add('active');
           submenu.style.height = submenu.scrollHeight + "px";
       }
    });
}
}