/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <footer className="footer">
      <span className="footer__title footer__title--grid">audiophile</span>
      <ul className="footer__links footer__links--grid">
        <li className="links__item">HOME</li>
        <li className="links__item">HEADPHONES</li>
        <li className="links__item">SPEAKERS</li>
        <li className="links__item">EARPHONES</li>
      </ul>
      <p className="footer__description footer__description--grid">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specializing who are devoted to helping you grt the most out of personal audio. Come and visit our demo facility - we're open 7 days a week.</p>
      <span className="footer__copy footer__copy--grid">Copyright 2022. All Rights Reserved</span>
      <section className="footer__socialMedias footer__socialMedias--grid">
        <FacebookIcon className="socialMedia" />
        <TwitterIcon className="socialMedia" />
        <InstagramIcon className="socialMedia" />
      </section>
    </footer>
  );
}

export default Footer;
