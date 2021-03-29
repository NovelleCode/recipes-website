const elFavoriteDishForm = document.querySelector('#favorite-dish-form');
const elFavoriteDishInput = document.querySelector('#favorite-dish-input')
const elFavoriteDishOutput = document.querySelector('#favourite-dish-output');
const elNewsLetterForm = document.querySelector('#newsletterForm');
const elEmail = document.querySelector('#email');
const elNewsletterOutput = document.querySelector('#newsletterOutput');

// Newsletter validation
function validateEmail(event) {
    let email = elEmail.value;
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(validRegex)) {
        elNewsletterOutput.textContent = '';
    } else {
        elNewsletterOutput.textContent = 'Invalid emailaddress, please try again';
        event.preventDefault();
    }
}

elNewsLetterForm.addEventListener('change', validateEmail);



// Localstorage function
function favoriteDish(event) {
    let input = elFavoriteDishInput.value;
    if(input === 'couscous') {
        localStorage.setItem('couscous', 'We found a recipe for your favorite dish :) <a href="../couscous.html">Click here!</a>');
    } else {
        localStorage.setItem(input, 'We do not have a recipe for this dish');
    }
    elFavoriteDishOutput.innerHTML = localStorage.getItem(input);
    event.preventDefault();
}

elFavoriteDishForm.addEventListener('submit', favoriteDish);