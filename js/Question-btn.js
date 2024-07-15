'use strict';

(()=>{
    const btnQuestion = document.querySelectorAll('.btn-active');
    const cards = document.querySelectorAll('.Questions .card');
    btnQuestion.forEach((element,i)=>{
        element.addEventListener('click',()=>{
            cards.forEach((card)=>{
                card.classList.remove('_active');
                card.style.height = "80px"; 
            });
            const height = cards[i].scrollHeight;
            cards[i].style.height = cards[i].scrollHeight + "px";
            cards[i].classList.add('_active');
        })
    })
})();
