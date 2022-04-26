import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import PcHeader from './HeaderPc';

function Header() {
  return (
    <nav>
      <PcHeader />
      <ul className="links links--hiddenMobile">
        <MenuIcon className="links__item" />
        <li className="links__item links__item--design">audiophile</li>
        <ShoppingCartOutlinedIcon className="links__item links__item--extraSize" />
      </ul>
    </nav>
  );
}

export default Header;
