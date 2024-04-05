const whiteNavigationSections = [
    'outsourcing-accounting',
    'outsourcing-tax',
    'principles'
];

function removeClassAll(elements, className) { 
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove(className);
    }
}

function highlightActiveSection(allSections) {
    const navigation = document.querySelector('.navigation');
    let activeSection = 'home';

    allSections.forEach((current) => {
        const scrollY = window.scrollY,
            sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - (sectionHeight / 2),
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
            .querySelector('.navigation__link a[href*="' + sectionId + '"]')
            .classList.add('navigation__link--active');
        activeSection = sectionId;
        } else {
        document
            .querySelector('.navigation__link a[href*="' + sectionId + '"]')
            .classList.remove('navigation__link--active');
        }
    });

    if (whiteNavigationSections.includes(activeSection)) {
        navigation.classList.add('navigation_white');
    } else {
        navigation.classList.remove('navigation_white');
    }
}

window.addEventListener('DOMContentLoaded', () => {

    //! NAVIGATION

    const allSections = document.querySelectorAll('section[id]');

    highlightActiveSection(allSections);
    window.addEventListener('scroll', () => {
        highlightActiveSection(allSections);
    });

    //! DETAILS
    
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
            removeClassAll(detailsCards, 'details-block__card-body--active');
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

    //! ACCOUNTING

    const accountingTabs = document.querySelectorAll('.outsourcing-block__tabs-accounting li'),
        accountingLeftLists = document.querySelectorAll('.outsourcing-block__lists_accounting .outsourcing-block__list-left');
    let activeAccountingTab = document.querySelector('.outsourcing-block__tabs-accounting .outsourcing-block__tab--active'),
        activeAccountingLeftList = document.querySelector('.outsourcing-block__lists_accounting .outsourcing-block__list-left--active');

    for (let i = 0; i < accountingTabs.length; i++) {
        accountingTabs[i].addEventListener('click', () => {
            activeAccountingTab.classList.remove('outsourcing-block__tab--active');
            accountingTabs[i].classList.add('outsourcing-block__tab--active');
            activeAccountingTab = accountingTabs[i];
            activeAccountingLeftList.classList.remove('outsourcing-block__list-left--active');
            accountingLeftLists[i].classList.add('outsourcing-block__list-left--active');
            activeAccountingLeftList = accountingLeftLists[i];
        });
    }    

    //! IMG PARALLAX

    const mobileMql = window.matchMedia('(max-width: 961px)');
    const parallaxElements = document.querySelectorAll('.mouse_parallax');

    if (!mobileMql.matches)
    for (let i = 0; i < parallaxElements.length; i++) {
        window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        parallaxElements[i].style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
        });
    }

    // menuBtn = document.querySelector('.menu__btn'),
    // menuList = document.querySelector('.menu__list'),
    // menuBtnImg = document.querySelector('.menu__btn img'),
    // menuPopup = document.querySelector('.menu__popup'),
    // orderBtn = document.querySelectorAll('.solutions__toggle-popup'),
    // formPopup = document.querySelector('.solutions__popup');

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