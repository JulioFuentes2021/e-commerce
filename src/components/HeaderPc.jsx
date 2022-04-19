import React from 'react';
import './styles/css/layout/Header.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function HeaderPc() {
  return (
    <nav className="links links--hiddenPc">
      <li className="links__item links__item--design">audiophile</li>
      <ul className="links__section">
        <li className="links__item links__item--gap">Home</li>
        <li className="links__item links__item--gap">Headphones</li>
        <li className="links__item links__item--gap">Speakers</li>
        <li className="links__item links__item--gap">Earphones</li>
      </ul>
      <ShoppingCartOutlinedIcon className="links__item" />
    </nav>
  );
}

export default HeaderPc;
