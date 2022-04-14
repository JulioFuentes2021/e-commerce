/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Article from './Articles';
import './styles/css/GridArticles.css';

function GridArticles() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const test = async () => {
      const response = await fetch('http://localhost:8000/headphones/');
      const data = await response.json();
      console.log(data.products[0]);
      setProducts([data.products[1], data.products[2], data.products[3]]);
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
