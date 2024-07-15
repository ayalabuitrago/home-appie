'use strict';
//ANIMATION
(()=>{
    const windowHeight = window.innerHeight / 1.25;
    const cardContainer = document.querySelectorAll('.card-animation');

    window.addEventListener('scroll', ()=>{
        //CARDS ANIMATIONS
        if(window.innerWidth > 768){ //animaciones de card en tablet y pc
            for(let i = 0; i < cardContainer.length; i++){
                const cards = cardContainer[i].children;
                const positionCardContainer = cardContainer[i].getBoundingClientRect().top;
                
                cards[i].classList.remove('animation');

                if(positionCardContainer < windowHeight) {
                    for(let i = 0; i < cards.length; i++){
                        setTimeout( () => cards[i].classList.add('on'), (200 * (i * 1.2)));
                    }
                }
            }
        }else{//animaciones de card en telefonos
            cardContainer.forEach((element)=>{
                const cards = element.children;
                for(let i = 0; i < cards.length; i++) cards[i].classList.add('animation');
            });
        }
 
        
        //OTHERS ANIMATION
        const animators = document.querySelectorAll('.animation');
        animators.forEach((animator)=>{
            const posicion = animator.getBoundingClientRect().top;
            if(posicion < windowHeight){
                animator.classList.add('on');
            }
        });
    
    });

})();
    