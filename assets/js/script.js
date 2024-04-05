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

function changeOutsourcingTabs(sectionId) {
    const tabs = document.querySelectorAll('#' + sectionId + ' .outsourcing-block__tabs li'),
        lists = document.querySelectorAll('#' + sectionId + ' .outsourcing-lists__services-block');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', () => {
            for (let j = 0; j < tabs.length; j++) {
                tabs[j].classList.remove('outsourcing-block__tab--active');
                lists[j].classList.remove('outsourcing-lists__services-block--active');
            }
            tabs[i].classList.add('outsourcing-block__tab--active');
            lists[i].classList.add('outsourcing-lists__services-block--active');
        });
    }
}

function changeOutsourcingServices(sectionId) {
    const servicesList = document.querySelectorAll('#' + sectionId + ' .outsourcing-lists__services li');
    for (let i = 0; i < servicesList.length; i++) {
        servicesList[i].addEventListener('click', () => {
            removeClassAll(servicesList, 'outsourcing-lists__service--active');
            servicesList[i].classList.add('outsourcing-lists__service--active');
        });
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
            detailsCards[currentDetailCard].classList.remove('details-block__card-body--active');
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

    //! OUTSOURCING

    changeOutsourcingTabs('outsourcing-accounting');
    changeOutsourcingTabs('outsourcing-tax');
    changeOutsourcingServices('outsourcing-accounting');
    changeOutsourcingServices('outsourcing-tax');

    //! ADVANTAGES

    const advantagesLists = document.querySelectorAll('.advantages-block__list'),
        advantagesSegments = document.querySelectorAll('.navigation-block__segment'),
        advantagesPrevBtn = document.querySelector('.navigation-block__prev-btn'),
        advantagesNextBtn = document.querySelector('.navigation-block__next-btn');
    let currentAdvantagesList = 0;

    for (let i = 0; i < advantagesLists.length; i++) {
        advantagesSegments[i].addEventListener('click', () => {
            removeClassAll(advantagesSegments, 'navigation-block__segment--active');
            advantagesSegments[i].classList.add('navigation-block__segment--active');
            removeClassAll(advantagesLists, 'advantages-block__list--active');
            advantagesLists[i].classList.add('advantages-block__list--active');
            currentAdvantagesList = i;
        });
    }

    advantagesPrevBtn.addEventListener('click', () => {
        advantagesLists[currentAdvantagesList].classList.remove('advantages-block__list--active');
        advantagesSegments[currentAdvantagesList].classList.remove('navigation-block__segment--active');
        currentAdvantagesList--;
        if (currentAdvantagesList < 0 || currentAdvantagesList > advantagesLists.length - 1)
            currentAdvantagesList = advantagesLists.length - 1;
        advantagesLists[currentAdvantagesList].classList.add('advantages-block__list--active');
        advantagesSegments[currentAdvantagesList].classList.add('navigation-block__segment--active');
    });

    advantagesNextBtn.addEventListener('click', () => {
        advantagesLists[currentAdvantagesList].classList.remove('advantages-block__list--active');
        advantagesSegments[currentAdvantagesList].classList.remove('navigation-block__segment--active');
        currentAdvantagesList++;
        if (currentAdvantagesList < 0 || currentAdvantagesList > advantagesLists.length - 1)
            currentAdvantagesList = 0;
        advantagesLists[currentAdvantagesList].classList.add('advantages-block__list--active');
        advantagesSegments[currentAdvantagesList].classList.add('navigation-block__segment--active');
    });


    //! IMG PARALLAX

    const mobileMql = window.matchMedia('(max-width: 1110px)');
    const parallaxElements = document.querySelectorAll('.mouse_parallax');

    if (!mobileMql.matches)
    for (let i = 0; i < parallaxElements.length; i++) {
        window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        parallaxElements[i].style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)';
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