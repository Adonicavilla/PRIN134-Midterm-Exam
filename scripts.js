
const petButtons = document.querySelectorAll('.btn-full');
const petAllBtn = document.querySelector('#btn-select-all');
const unpetAllBtn = document.querySelector('#btn-unselect-all');
const firstBtn = document.querySelector('#btn-select-first');
const lastBtn = document.querySelector('#btn-select-last');
const nextBtn = document.querySelector('#btn-select-next');
const prevBtn = document.querySelector('#btn-select-previous');
const siteLogo = document.querySelector('.banner-content');
const galleryCards = document.querySelectorAll('.card');


let currentHighlightIndex = 0;
petButtons.forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('i');
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
    });
});

petAllBtn.addEventListener('click', () => {
    petButtons.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
    });
});

unpetAllBtn.addEventListener('click', () => {
    petButtons.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
    });
});

function updateCardHighlight() {
    galleryCards.forEach(card => {
        card.classList.remove('card-selected', 'active');
    });
    galleryCards[currentHighlightIndex].classList.add('card-selected', 'active');
}

lastBtn.addEventListener('click', () => {
    currentHighlightIndex = galleryCards.length - 1;
    updateCardHighlight();
});

firstBtn.addEventListener('click', () => {
    currentHighlightIndex = 0;
    updateCardHighlight();
});


nextBtn.addEventListener('click', () => {
    currentHighlightIndex = (currentHighlightIndex + 1) % galleryCards.length;
    updateCardHighlight();
});

prevBtn.addEventListener('click', () => {
    currentHighlightIndex = (currentHighlightIndex - 1 + galleryCards.length) % galleryCards.length;
    updateCardHighlight();
});

siteLogo.addEventListener('click', () => {
    siteLogo.classList.add('animate__animated', 'animate__rubberBand');
    

    siteLogo.addEventListener('animationend', () => {
        siteLogo.classList.remove('animate__animated', 'animate__rubberBand'); 
    }, { once: true });
});


updateCardHighlight();