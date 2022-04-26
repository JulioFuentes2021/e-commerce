/* eslint-disable max-len */
import React from 'react';

function Promotion() {
  return (
    <article className="promotion">
      <img className="promotion__image" src="https://img.search.brave.com/0bQZd8jA7vd0HrlRaq1yzim9DihKqxSyi0k579lpG0g/rs:fit:1200:1040:1/g:ce/aHR0cHM6Ly93d3cu/YXVkaW9hbmFseXRp/Yy5jb20vYXBwL3Vw/bG9hZHMvMjAxOS8w/NS9tYW4td2Vhcmlu/Zy1oZWFkcGhvbmVz/LmpwZw" alt="" />
      <section className="promotion__section">
        <span className="promotion__title">
          BRINGING YOU THE
          {' '}
          <strong>BEST</strong>
          {' '}
          <br />
          {' '}
          AUDIO GEAR
        </span>
        <p className="promotion__description">
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demostration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </section>
    </article>
  );
}

export default Promotion;
