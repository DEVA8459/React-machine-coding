/* eslint-disable react-hooks/exhaustive-deps */
import  { useState, useEffect } from "react";

// remove fucking strict mode in app

const InfiniteQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  let limit = 10;
  const maxQuotes = 100; // Total quotes to fetch
  const maxPages = maxQuotes / limit; //because this api has 1400 quotes we dont need thismuch

  const getQuotes = async () => {
    // hasmore ko false karna aur if bhul gya tha 
    if (!hasMore || loading) return; //prevent multiple fetch while other fetch is loading

    setLoading(true);

    let skip = (page - 1) * limit;

    const response = await fetch(
      `https://dummyjson.com/quotes/?limit=${limit}&skip=${skip}`
    );

    const result = await response.json();

    if (result.quotes.length > 0) {
      setQuotes((prev) => [...prev, ...result.quotes]);
      //bhul gya thja prev koo

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

  //ye use efect pura bhul gaya tha
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
    <>
      <div className="quotes-container">
        <h1>INFINITE SCROLLING</h1>
        <div className="quotes">
          {quotes.map((quote) => {
            return (
              <blockquote key={quote.id} className="quote">
                {quote.id} . {quote.quote}
                <footer>...{quote.author}</footer>
              </blockquote>
            );
          })}
        </div>
        {loading && <p>loading...</p>}
        {!hasMore && <p>no quotes</p>}
      </div>
    </>
  );
};

export default InfiniteQuotes;
