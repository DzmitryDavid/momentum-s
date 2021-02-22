
const quoteBtn = document.querySelector('.header__buttons-quote');

const getQuote = async () => {
    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author');
    const url = `https://type.fit/api/quotes`;

    const res = await fetch(url);
    const data = await res.json();
    
    if (res.status === !200) {
        quote.textContent = "Sorry...something went wrong";
        quote.style.color = "#7f7f7f";
    } else {
        const quoteObj = data[(Math.floor(Math.random() * 10))]
        quote.textContent = quoteObj.text;
        author.textContent = quoteObj.author
        quote.style.color = "rgb(235, 235, 235)";
    }
}
getQuote();

quoteBtn.addEventListener('click', getQuote)
export default getQuote;

