import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import PcHeader from './HeaderPc';

function Header() {

  const getProducts = async () => {
    try {
      await fetch('http://localhost:8000/user/test', {
        method: 'GET',
        headers: {
          'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJqdWxpb0BnbWFpbC5jb20iLCJpYXQiOjE2NTI0ODA0OTV9.aaogGFh2nMkqwcplPfZg_yiSIRk2bsVzZjz2Qb7WZgY`
        }
      });
      console.log('Estas autorizado')
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <nav>
      <PcHeader />
      <ul className="links links--hiddenMobile">
        <MenuIcon className="links__item" />
        <li className="links__item links__item--design">audiophile</li>
        <ShoppingCartOutlinedIcon onClick={getProducts} className="links__item links__item--extraSize" />
      </ul>
    </nav>
  );
}

export default Header;
