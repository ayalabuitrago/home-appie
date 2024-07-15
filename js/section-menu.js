'use strict';

//MENU DE SECCION 
{
const menuItem = document.querySelectorAll('.reacyions-menu-item');
const thumb = document.querySelector('.Custom-Reacyions .thumb-container');
const title = document.querySelector('.Custom-Reacyions .section-title-container-aside')

function offAll(){
    menuItem.forEach((item)=>{
        item.classList.remove('active');
    });
}

menuItem.forEach((item)=>{
    item.addEventListener('click',()=>{
        offAll();
        thumb.classList.remove('on');
        title.classList.remove('on');
        setTimeout(() => {
            thumb.classList.add('on');
            title.classList.add('on');
        }, 100);
        
        item.classList.add('active');
    })
});

}