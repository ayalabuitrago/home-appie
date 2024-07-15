'use strict';
(function(){
    const header = document.querySelector('header');

    document.addEventListener('scroll',()=>{
        header.classList.toggle('fixed',window.scrollY > 150);
        header.classList.toggle('box-shadow',window.scrollY > 150);
    });
})();
