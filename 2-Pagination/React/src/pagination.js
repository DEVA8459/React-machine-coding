import React, { useEffect, useState } from "react";
import "../app.css";

export const Pagination = () => {
  const [products, setProcucts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [page]);

  const fetchProduct = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");

    const data = await res.json();

    console.log(data);

    if (data && data.products) {
      setProcucts(data.products);
    }
  };

  const selectPageHandler = (slectedPage) => {
    if (
      slectedPage >= 1 &&
      slectedPage <= +products.length / 10 &&
      slectedPage !== page
    ) {
      setPage(slectedPage);
    }
  };
  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}
      {products.length > 0 && <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...Array(products.length / 10)].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < products.length / 10 ? "" : "pagination__disable"}>▶</span>
      </div>}
    </div>
  );
};
