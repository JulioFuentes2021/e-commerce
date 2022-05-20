import React from 'react';
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function HeaderPc({ state }) {
  return (
    <nav className="links links--hiddenPc">
      <Link to="/" className="links__item links__item--design">audiophile</Link>
      <ul className="links__section">
        <Link to="/electronics" className="links__item links__item--gap">Electronics</Link>
        <Link to="/jewelery" className="links__item links__item--gap">Jewelery</Link>
        <Link to="/men" className="links__item links__item--gap">Men</Link>
        <Link to="/women" className="links__item links__item--gap">Women</Link>
        <Link className='links__item links__item--gap' to="/all-products">
          Products
        </Link>

      </ul>
      <ShoppingCartOutlinedIcon onClick={() => state.setCart(!state.cart)} className="links__item" />
    </nav>
  );
}

export default HeaderPc;
