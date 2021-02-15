
const quoteBtn = document.querySelector('.header__buttons-quote')
const getQuote = async() => { 
    const quote = document.querySelector('.quote');
    const author = document.querySelector('.author');
    const url = `https://favqs.com/api/qotd`;

    const res = await fetch(url);
    const data = await res.json();
    
    if (res.status === 404) {
        quote.textContent = "Sorry...something went wrong";
        quote.style.color = "#7f7f7f";
    } else {
        quote.textContent = data.quote.body;
        author.textContent = data.quote.author
        quote.style.color = "rgb(235, 235, 235)";
    }
    
}
getQuote()

quoteBtn.addEventListener('click', getQuote)
export default getQuote;