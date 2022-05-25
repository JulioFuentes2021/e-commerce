/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { productContext } from '../context/context'
import Article from './Articles';
import Loading from './loader/loader';
import useFetchData from '../customHooks/useFetchData';

function GridArticles() {
  const products = useContext(productContext);
  const { mainProducts, setMainProducts } = products
  const [state] = useFetchData('http://localhost:8000/headphones/category/electronics?limit=3', mainProducts, setMainProducts);


  if (!mainProducts.length) {
    return <Loading />
  }

  return (
    <section className="allArticles">
      {state.map((product) => (
        <Article data={product} key={product._id} id={product?.id} />
      ))}
    </section>
  );
}

export default GridArticles;
