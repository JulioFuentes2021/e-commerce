/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { productContext } from '../context/context'
import Article from './Articles';
import Loading from './loader/loader';

function GridArticles({ data }) {
  const products = useContext(productContext);
  const { mainProducts, setMainProducts } = products

  useEffect(() => {
    const test = async () => {
      try {
        const response = await fetch('http://localhost:8000/headphones/category/electronics?limit=3');
        const data = await response.json();
        setMainProducts(data.products)
      } catch (error) {
        console.log('Ha surgido un error', error)
      }
    };

    test();
  }, []);


  if (!mainProducts.length) {
    return <Loading />
  }

  return (
    <section className="allArticles">
      {mainProducts.map((product) => (
        <Article data={product} key={product._id} id={product?.id} />
      ))}
    </section>
  );
}

export default GridArticles;
