(function () {
  const quotesEl = document.querySelector(".quotes");
  const loaderEl = document.querySelector(".loader");

  // to get the data

  const getData = async (page, limit) => {
    const response = await fetch(
      `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`
    );

    //

    const data = await response.json();
    return data;
  };

  const showData = (quotes) => {
    quotes.forEach((quote) => {
      const quoteEl = document.createElement("blockquote");

      quoteEl.classList.add("quote");

      quoteEl.innerHTML = `<span>${quote.id + "."}</span> ${
        quote.quote
      } <footer>${quote.author}</footer>`;

      quotesEl.appendChild(quoteEl);
    });
  };

  const hideLoader = () => {
    loaderEl.classList.remove("show");
  };
  const showLoader = () => {
    loaderEl.classList.add("show");
  };

  const hasMoreQuotes = (page, limit, total) => {
    const startIndex = (page - 1) * limit * 1;
    return total === 0 || startIndex < total;
  };
  // here total is unknown we later in this code takeits value as 0
  // after the load data execution we get  total from response.total

  const loadData = async (page, limit) => {
    showLoader();

    setTimeout(async () => {
      try {
        if (hasMoreQuotes(page, limit, total)) {
          const response = await getData(page, limit);

          showData(response.data);

          total = response.total;
        }
      } catch (error) {
        console.log(error);
      } finally {
        hideLoader();
      }
    }, 1000);
  };

  //    control variables

  let currentPage = 1;
  const limit = 10;
  let total = 0;

  window.addEventListener(
    "scroll",
    () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (
        scrollTop + clientHeight >= scrollHeight - 5 &&
        hasMoreQuotes(currentPage, limit, total)
      ) {
        currentPage++;
        loadData(currentPage, limit);
      }
    },
    {
      passive: true,
    }
  );

  loadData(currentPage, limit);
})();
