//codigo para dar vuelta a las paginas
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 100)
        } else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = index + 20;
            }, 100)
        }
    }
})

const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');

            setTimeout(() => {
                page.style.zIndex = 20 + index;
            }, 100)
        }, (index + 1) * 200 + 100)
    })
}
//animacion de abrir portafolio

const coverRight = document.querySelector('.cover.cover-right');

//animacion de abrir portafolio derecha
setTimeout(() => {
    coverRight.classList.add('turn');
}, 2100)

setTimeout(() => {
    coverRight.style.zIndex = -1
}, 3300)

let totalPages = pages.length;
let pageNumber = totalPages - 1; // Comenzar desde la última página

function reverseIndex() {
    pageNumber = ((pageNumber - 1) + totalPages) % totalPages; // Manejo más preciso del índice
}

// Animación de apertura de todas las páginas
pages.forEach((_, index) => {
    setTimeout(() => {
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            pages[pageNumber].style.zIndex = index + 10;
            reverseIndex(); // llamar la función aquí después del cambio de 'zIndex'
        }, 100);
    }, (index + 1) * 200 + 3000);
})