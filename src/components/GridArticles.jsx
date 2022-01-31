import React from 'react';
import Article from './Articles';
import './styles/css/GridArticles.css';

function GridArticles() {
  return (
    <section className="allArticles">
      <Article />
      <Article />
      <Article />
    </section>
  );
}

export default GridArticles;
