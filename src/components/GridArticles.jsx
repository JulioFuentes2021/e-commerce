/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Article from './Articles';

function GridArticles() {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const test = async () => {
  //     const response = await fetch('http://localhost:8000/headphones/');
  //     const data = await response.json();
  //     console.log(data.products[0]);
  //     setProducts([data.products[1], data.products[2], data.products[3]]);
  //   };

  //   test();
  // }, []);

  useEffect(() => {
    const test = async () => {
      const response = await fetch('https://fakestoreapi.com/products/category/electronics?limit=3');
      const data = await response.json();
      console.log(data);
      setProducts(data)
    };

    test();
  }, []);

  if (!products.length) {
    return 'Loading';
  }

  return (
    <section className="allArticles">
      {products.map((product) => (
        <Article data={product} key={product._id} id={product.id} />
      ))}
    </section>
  );
}

export default GridArticles;
