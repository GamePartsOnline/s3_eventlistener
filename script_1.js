document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // F1 + F1bis : FOOTER COMPTEUR
    // ============================================
    let nombreDeClics = 0;
    let footer = document.querySelector('footer');
    if (footer) {
        footer.addEventListener('click', function(event) {
            event.stopPropagation();
            nombreDeClics++;
            console.log(`clic numéro ${nombreDeClics}`);
        });
    }

    // ============================================
    // F2 : MENU HAMBURGER
    // ============================================
    let boutonHamburger = document.querySelector('.navbar-toggler');
    let menuNavbar = document.querySelector('#navbarHeader');
    if (boutonHamburger && menuNavbar) {
        boutonHamburger.addEventListener('click', function() {
            menuNavbar.classList.toggle('collapse');
        });
    }

    // ============================================
    // F3 : 1ère CARD ROUGE
    // ============================================
    let premiereCard = document.querySelector('.card');
    if (premiereCard) {
        let boutonEdit1 = premiereCard.querySelector('.btn-outline-secondary');
        if (boutonEdit1) {
            boutonEdit1.addEventListener('click', function() {
                premiereCard.style.color = 'red';
            });
        }
    }

    // ============================================
    // F4 : 2ème CARD VERTE (toggle)
    // ============================================
    let deuxiemeCard = document.querySelector('.card:nth-child(2)');
    if (deuxiemeCard) {
        let boutonEdit2 = deuxiemeCard.querySelector('.btn-outline-secondary');
        if (boutonEdit2) {
            boutonEdit2.addEventListener('click', function() {
                if (deuxiemeCard.style.color === 'green') {
                    deuxiemeCard.style.color = '';
                } else {
                    deuxiemeCard.style.color = 'green';
                }
            });
        }
    }

    // ============================================
    // F5 : Double-clic NAVBAR → Bootstrap OFF/ON
    // ============================================
    let navbar = document.querySelector('nav');
    let bootstrapCSS = document.querySelector('link[href*="bootstrap"]');
    
    if (navbar && bootstrapCSS) {
        let bootstrapActive = true;
        
        navbar.addEventListener('dblclick', function() {
            if (bootstrapActive) {
                bootstrapCSS.disabled = true;
                bootstrapActive = false;
                console.log('Bootstrap OFF');
            } else {
                bootstrapCSS.disabled = false;
                bootstrapActive = true;
                console.log('Bootstrap ON');
            }
        });
    }

    // ============================================
    // F6 : REDUCTION CARDS AU SURVOL DU BOUTON "VIEW"
    // ============================================
    let cards = document.querySelectorAll('.card')

    if (cards.length > 0) {
        cards.forEach(function(card) {
            let boutonView = card.querySelector('.btn-success');
            let image = card.querySelector('img');
            let texte = card.querySelector('.card-text').classList.toggle("collapse");

            if (boutonView && image && texte) {
                image.style.transition = 'all 0.3s ease'; // transition fluide

                boutonView.addEventListener('mouseover', function() {
                    image.style.width = '20%';
                    texte.style.display = 'none';
                });
                /* 
                boutonView.addEventListener('mouseout', function() {
                    image.style.width = '';
                    texte.style.display = '';
                });*/
            }
        });
    }

});
// ============================================
// F7 : CLIC SUR "==>" → DERNIÈRE CARD EN PREMIÈRE
// ============================================
let boutonGrey = document.querySelector('.btn.btn-secondary.my-2');

    boutonGrey.addEventListener('click', function() {
        let cardsContainer = document.querySelectorAll(".row")[1]
        //let toutesLesCards = cardsContainer.querySelectorAll('.card');
        let first = document.querySelectorAll(".col-md-4")[0]
        let last = document.querySelectorAll(".col-md-4")[5]
    cardsContainer.insertBefore(last, first); //insert[before](qui tu prend,où il va)
    });

// ============================================
// F8 : CLIC SUR "==>" → PREMIÈRE CARD EN DERNIÈRE
// ============================================
let boutonBlue = document.querySelector('.btn.btn-primary.my-2');

    boutonBlue.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        let cardsContainer = document.querySelectorAll(".row")[1]
        //let toutesLesCards = cardsContainer.querySelectorAll('.card');
        let first = document.querySelectorAll(".col-md-4")[0]
        let last = document.querySelectorAll(".col-md-4")[5]
    cardsContainer.insertBefore(first, last.nextSibling); //insert[before](qui tu prend,où il va)
    });

// ============================================
// F9 : KEYPRESS
// ============================================

let navLogo = document.querySelector(".navbar-brand.d-flex.align-items-center")
navLogo.addEventListener("keypress", function(event) {
    let classA = "col-md-4"
    let classY = "col-md-4 offset-md-4"
    let classP = "offset-md-8"
    if (event.key === "a") {
        document.getElementsByTagName("body")[0].className = classA }
    if (event.key === "y") {
        document.getElementsByTagName("body")[0].className = classY }
    if (event.key === "p") {
        document.getElementsByTagName("body")[0].className = classP }
    if (event.key === "b") {
        document.getElementsByTagName("body")[0].className = "" }
});