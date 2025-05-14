async function fetchQuotes(){
    let data = await fetch('https://dummyjson.com/quotes/random');
    let quotes = await data.json();
    let random = Math.floor(Math.random()*quotes.length);
    let quote = quotes[random];
    // console.log(quotes);
    document.getElementById('quote').innerText = quotes.quote;
    document.getElementById('author').innerText = quotes.author;
}
fetchQuotes();



