const toggleBtn = () => {
    const background = document.querySelector('.background');
    const toggleBody = document.querySelector('.toggle-body');
    const toggleBtn = document.querySelector('.toggle-btn');
    const body = document.querySelector('body');
    const btnImg = document.querySelector('.header__buttons-img');
    const btnQuote = document.querySelector('.header__buttons-quote');
    const clock = document.querySelector('.clock');
    const date = document.querySelector('.date');
    const weather = document.querySelector('.weather__city');
    const greetText = document.querySelector('.namein')
    const greetArea = document.querySelector('.greeting__area')
    const quote = document.querySelector('.quote');




toggleBtn.addEventListener('click', () => {
    background.classList.toggle('background--on');
    toggleBody.classList.toggle('toggle-body--on');
    toggleBtn.classList.toggle('toggle-btn--on');
    toggleBtn.classList.toggle('toggle-btn--scale');
    body.classList.toggle('dark-body');
    btnImg.classList.toggle('dark-btn');
    btnQuote.classList.toggle('dark-btn');
    clock.classList.toggle('dark-clock');
    date.classList.toggle('dark-date');
    weather.classList.toggle('dark-city');
    greetText.classList.toggle('dark-city');
    greetArea.classList.toggle('dark-city');
    quote.classList.toggle('dark-city');
});

}
export default toggleBtn;

