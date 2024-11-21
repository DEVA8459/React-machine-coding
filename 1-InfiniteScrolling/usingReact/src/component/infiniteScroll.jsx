/* eslint-disable react-hooks/exhaustive-deps */
import  { useState, useEffect } from "react";

// remove fucking strict mode in app

const InfiniteQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  let limit = 10;
  const maxQuotes = 30; // Total quotes to fetch
  const maxPages = maxQuotes / limit; //because this api has 1400 quotes we dont need thismuch

  const getQuotes = async () => {
    if (!hasMore || loading) return;

    setLoading(true);

    let skip = (page - 1) * limit;

    const response = await fetch(
      `https://dummyjson.com/quotes/?limit=${limit}&skip=${skip}`
    );

    const result = await response.json();

    if (result.quotes.length > 0) {
      setQuotes((prev) => [...prev, ...result.quotes]);

      if (
        quotes.length + result.quotes.length >= maxQuotes ||
        page >= maxPages
      ) {
        setHasMore(false);
      }
    } else {
      setHasMore(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    getQuotes();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.scrollHeight - 50 &&
        hasMore &&
        !loading
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading]);

  return (
    <div>
      <h1>Infinite Scrolling</h1>
      <div>
        {quotes.map((quote) => {
          return (
            <div key={quote.id}>
              <blockquote>
                {quote.id} . {quote.quote}
                <footer>{quote.author}</footer>
              </blockquote>
            </div>
          );
        })}
      </div>
      {loading && <p>Loading...</p>}
      {!hasMore && <p>the End</p>}
    </div>
  );
};

export default InfiniteQuotes;
