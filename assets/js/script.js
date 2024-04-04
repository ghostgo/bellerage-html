function hideDetailsCards(detailsCards) {
    for (let i = 0; i < detailsCards.length; i++) {
        detailsCards[i].classList.remove('details-block__card-body--active');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    
    const detailsBlock = document.querySelector('.details-block__content'),
        detailsCardBlock = document.querySelector('.details-block__card-content'),
        detailsList = document.querySelectorAll('.details-list li'),
        detailsCards = document.querySelectorAll('.details-block__card-list li'),
        detailsCloseBtns = document.querySelectorAll('.details-block__card-close-btn'),
        detailsPrevBtn = document.querySelector('.details-block__card-prev-btn'),
        detailsNextBtn = document.querySelector('.details-block__card-next-btn');
    let currentDetailCard = 0;

    for (let i = 0; i < detailsList.length; i++) {
        detailsList[i].addEventListener('click', () => {
            detailsBlock.classList.add('display-none');
            detailsCardBlock.classList.remove('display-none');
            detailsCards[i].classList.add('details-block__card-body--active');
            currentDetailCard = i;
        });
    }

    for (let i = 0; i < detailsCloseBtns.length; i++) {
        detailsCloseBtns[i].addEventListener('click', () => {
            detailsCardBlock.classList.add('display-none');
            detailsBlock.classList.remove('display-none');
            hideDetailsCards(detailsCards);
        });
    }

    detailsPrevBtn.addEventListener('click', () => {
        detailsCards[currentDetailCard].classList.remove('details-block__card-body--active');
        currentDetailCard--;
        if (currentDetailCard < 0 || currentDetailCard > detailsCards.length - 1)
            currentDetailCard = detailsCards.length - 1;
        detailsCards[currentDetailCard].classList.add('details-block__card-body--active');
    });

    detailsNextBtn.addEventListener('click', () => {
        detailsCards[currentDetailCard].classList.remove('details-block__card-body--active');
        currentDetailCard++;
        if (currentDetailCard < 0 || currentDetailCard > detailsCards.length - 1)
            currentDetailCard = 0;
        detailsCards[currentDetailCard].classList.add('details-block__card-body--active');
    });

    

    // const mobileMql = window.matchMedia('(max-width: 961px)'),
    // homeBg = document.querySelectorAll('.mouse_parallax'),

    // menuBtn = document.querySelector('.menu__btn'),
    // menuList = document.querySelector('.menu__list'),
    // menuBtnImg = document.querySelector('.menu__btn img'),
    // menuPopup = document.querySelector('.menu__popup'),
    // orderBtn = document.querySelectorAll('.solutions__toggle-popup'),
    // formPopup = document.querySelector('.solutions__popup');

    // if (!mobileMql.matches)
    // for (let i = 0; i < homeBg.length; i++) {
    //     window.addEventListener('mousemove', function (e) {
    //     let x = e.clientX / window.innerWidth;
    //     let y = e.clientY / window.innerHeight;
    //     homeBg[i].style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    //     });
    // }

    // menuBtn.addEventListener('click', () => {
    // if (mobileMql.matches)
    //     menuPopup.classList.toggle('menu__popup--active');
    // else
    //     menuList.classList.toggle('menu__list--active');

    // if (menuList.classList.contains('menu__list--active') || menuPopup.classList.contains('menu__popup--active'))
    //     menuBtnImg.src = '../assets/icons/menuClose.svg';
    // else
    //     menuBtnImg.src = '../assets/icons/menu.svg';
    // });

    // for (let i = 0; i < orderBtn.length; i++) {
    // orderBtn[i].addEventListener('click', () => {
    //     formPopup.classList.toggle('solutions__popup--active');
    // });
    // }
})