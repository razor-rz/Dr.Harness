let getPopup = document.querySelector('.popup')
let getModal = document.querySelector('.modal')
let cardButtons = document.querySelectorAll('.card__btn')
let closePopup = document.querySelector('.close-popup')

cardButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        getPopup.classList.add('active')
        getModal.classList.add('active')
    })
})

closePopup.addEventListener('click',() => {
    getPopup.classList.remove('active')
    getModal.classList.remove('active')
});

document.addEventListener('click', (e) => {
    if(e.target === getPopup) {
        getPopup.classList.remove('active')
        getModal.classList.remove('active')
    }
})