import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Articles({ data }) {
  return (
    <article className="article">
      <img
        src={data.image}
        alt="title"
        className="article__image article--margin"
      />
      <span className="article__name article--margin">{data.name}</span>
      <div className="article__shop article--margin">
        <span className="article__button">SHOP</span>
        <span className="article__icon">
          <ArrowForwardIosIcon />
        </span>
      </div>
    </article>
  );
}

export default Articles;
