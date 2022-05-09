import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function HeaderPc() {
  return (
    <nav className="links links--hiddenPc">
      <li className="links__item links__item--design">audiophile</li>
      <ul className="links__section">
        <li className="links__item links__item--gap">Electronics</li>
        <li className="links__item links__item--gap">Jewelery</li>
        <li className="links__item links__item--gap">Men</li>
        <li className="links__item links__item--gap">Women</li>
      </ul>
      <ShoppingCartOutlinedIcon className="links__item" />
    </nav>
  );
}

export default HeaderPc;
