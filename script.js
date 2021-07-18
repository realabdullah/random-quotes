const quote = document.getElementById("quote");
const author = document.getElementById("author");
const getQuote = document.getElementById("get-quote");

getQuote.addEventListener("click", randomQuote);

async function randomQuote() {
  const response = await fetch('https://api.quotable.io/random')
  const data = await response.json()
  console.log(`${data.content} —${data.author}`)
  quote.textContent = data.content;
  author.textContent = "- " + data.author;
}
randomQuote()
