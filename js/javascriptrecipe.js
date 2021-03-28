const elNewsLetterForm = document.querySelector('#newsletterForm');
const elEmail = document.querySelector('#email');
const elNewsletterOutput = document.querySelector('#newsletterOutput');
const elRatingForm = document.querySelector('.rating');
const elStars = document.querySelectorAll('input[name="star"]');
const elRatingOutput = document.querySelector('#rating-output');
// const elSubmitRating = document.querySelector('#submit-rating');
const url = 'data/data.json';
const ul = document.querySelector('.couscousingredients');


function ratingOutput(event) {
    for(let i = 0; i < elStars.length; i++) {
        if(elStars[i].checked) {
            elRatingOutput.textContent = 'You give this recipe ' + elStars[i].value + ' stars.'
            break;
        }
    }
    event.preventDefault();
}

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
elRatingForm.addEventListener('change', ratingOutput);


/* FETCH */

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.ingredients);
        let ingredients = data.ingredients;


        return ingredients.map(ingredient => {
            let li = createNode('li');
            li.innerHTML = ingredient.quantity + " " + ingredient.ingredientname;
            append(ul, li);
        })
    })
    .catch(error => console.log(error));
