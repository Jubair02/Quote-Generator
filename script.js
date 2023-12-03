//let apiQuotes = [];
//Show New Quote
const newquote= () =>{
    const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

//Get quotes from API
async function getquotes(){
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
getquotes();
// On load 

