const quoteContainer = document.getElementById('quote-container');
const quoteText =document.getElementById('quote');
const authorText =document.getElementById('author');
const twitterBtn =document.getElementById('twitter');
const newQuoteBtn =document.getElementById('new-quote');
const loader = document.getElementById('loader');



let apiQuotes = [];
//Show Loading
const loading= ()=>{
    loader.hidden=false;
    quoteContainer.hidden=true
}

// hide Loading
const complete= ()=>{
    loader.hidden=true;
    quoteContainer.hidden=false;
}



//Show New Quote
const newquote= () =>{
    loading();
    const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    //Check if Author field is blank and replace it with 'unknown'
    if(!quote.author){
        authorText.textContent= 'Unknown';
    }
    else {
        authorText.textContent=quote.author
    }

    if(quote.text.length >60){
        quoteText.classList.add('long-quote');
        } 
        else {
            quoteText.classList.remove('long-quote');
        }

    
// Set Quote, Hide Loader
    quoteText.textContent=quote.text;
    complete();   
    
}

//Get quotes from API
async function getquotes(){
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch (apiUrl);
        apiQuotes = await response.json();
        // console.log(apiQuotes)
        newquote();
    }
    catch (error){
        //Catch Error Here
    } 

}
//Tweet Quote
const tweetQuote= ()=>{
    const twitterUrl =`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl,'_blank')
}

//Event Listener
twitterBtn.addEventListener('click',tweetQuote)
newQuoteBtn.addEventListener('click',newquote)


// On load 
getquotes();

