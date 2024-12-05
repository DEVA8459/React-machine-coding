const quotesContainer = document.getElementById("quotes");

const loader = document.getElementById("loader");

const loaderText = document.createElement("p");
loaderText.textContent = "Loading...";
loaderText.style.display = "none"; // Initially hidden
quotesContainer.appendChild(loaderText);

const noMoreQuotesText = document.createElement("p");
noMoreQuotesText.textContent = "No more quotes.";
noMoreQuotesText.style.display = "none"; // Initially hidden
quotesContainer.appendChild(noMoreQuotesText);

let quotes = [];
let page = 1;
const limit = 10;
const maxQuotes = 100; // Limit the total quotes fetched
const maxPages = maxQuotes / limit;
let loading = false;
let hasMore = true;

// Fetch quotes from the API
const getQuotes = () => {
  if (!hasMore || loading) return;

  loading = true;
  loaderText.style.display = "block";

  const skip = (page - 1) * limit;

  fetch(`https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`)
    .then((response) => response.json())
    .then((result) => {
      if (result.quotes.length > 0) {
        quotes = quotes.concat(result.quotes);
        renderQuotes(result.quotes);

        if (quotes.length >= maxQuotes || page >= maxPages) {
          hasMore = false; // No more quotes to load
           noMoreQuotesText.style.display = "block"
        }
      } else {
        hasMore = false;
        noMoreQuotesText.style.display = "block"
      }
    })
    .catch((error) => console.error("Error fetching quotes:", error))
    .finally(() => {
      loading = false;
      loaderText.style.display = "none"; // Hide loader after fetching
    });
};

// Render quotes into the container
const renderQuotes = (newQuotes) => {
  newQuotes.forEach((quote) => {
    const blockquote = document.createElement("blockquote");
    blockquote.className = "quote";
    blockquote.innerHTML = `
      <span>${quote.id}.</span> ${quote.quote}
      <footer>${quote.author}</footer>
    `;
    quotesContainer.insertBefore(blockquote, loaderText)


  });
  
};

// Handle scroll event
const handleScroll = () => {
  const scrollPosition =
    window.innerHeight + document.documentElement.scrollTop;
  const bottomPosition = document.documentElement.scrollHeight - 50;

  if (scrollPosition >= bottomPosition && hasMore && !loading) {
    
    page += 1; // Increment page for the next fetch
    getQuotes();
  }
};

// Initialize
getQuotes();
window.addEventListener("scroll", handleScroll);
