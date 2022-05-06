import React from 'react';
import { Link } from "react-router-dom";
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
        <Link
          to={`/product/${data.id}`}
          className="deleteBorder"
        >
          <span className="article__button">SHOP</span>
        </Link>
        <span className="article__icon">
          <ArrowForwardIosIcon />
        </span>
      </div>
    </article>
  );
}

export default Articles;
