/* Testimonials */

let clientsList = document.querySelector('.clients'); // это
let testimonialsList = document.querySelector('.testimonials-list'); // это
let testimonials = testimonialsList.querySelectorAll('.testimonial');  // это
let clients = document.querySelectorAll('.client__radio'); // это
let rightArrow = document.querySelector('.arrow-right');
let leftArrow = document.querySelector('.arrow-left');

function showTestimonial() { // эта функция
    let clientId,
    testimonial;
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].classList.add('hidden');
    }
    for (let i = 0; i < clients.length; i++) {
        if (clients[i].checked) {
            clientId = clients[i].id;
            testimonial = testimonialsList.querySelector('#testimonial__' + clientId);
            testimonial.classList.remove('hidden');

        }
    }
    return testimonial;
}

function changeChecked(curr, next) {
    curr.removeAttribute('checked');
    next.setAttribute('checked', 'checked');
    showTestimonial();
    return next;
}

function moveRight() {
    let current,
    currentIndex,
    clientsArr,
    nextIndex,
    next;
    current = clientsList.querySelector('.client__radio[checked="checked"]');
    clientsArr = Array.from(clients);
    currentIndex = clientsArr.indexOf(current);
    nextIndex = currentIndex + 1;
    if (nextIndex >= clientsArr.length) {
        nextIndex = 0;
    }
    next = clientsArr[nextIndex];
    changeChecked(current, next);
    return nextIndex;
}

function moveLeft() {
    let current,
    currentIndex,
    clientsArr,
    nextIndex,
    next;
    current = clientsList.querySelector('.client__radio[checked="checked"]');
    clientsArr = Array.from(clients);
    currentIndex = clientsArr.indexOf(current);
    nextIndex = currentIndex - 1;
    if (nextIndex < 0) {
        nextIndex = clientsArr.length - 1;
    }
    next = clientsArr[nextIndex];
    changeChecked(current, next);
    return nextIndex;
}

showTestimonial();

clientsList.addEventListener('click', showTestimonial);
rightArrow.addEventListener('click', moveRight);
leftArrow.addEventListener('click', moveLeft);


