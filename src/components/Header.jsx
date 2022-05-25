import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import PcHeader from './HeaderPc';
import Modal from '@components/modal/modal'
import useGetShoppingCart from '../customHooks/useGetShoppingCart';

function Header() {

  const [error, setError] = useState(false)
  const [cart, setCart] = useState(false)
  // const [shoppingCart] = useGetShoppingCart();

  const getProducts = async () => {
    try {
      console.log(document.cookie.split('=')[1])
      const token = document.cookie.split('=')[1];
      const response = await fetch('http://localhost:8000/user/test', {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()
      console.log(data)

    } catch (error) {
      // setError(true)
      console.log(error)
    }
  };

  if (error) {
    return 'Loading'
  }

  return (
    <nav>
      <Modal cart={cart} setCart={setCart} />
      <PcHeader state={{ cart, setCart }} />
      <ul className="links links--hiddenMobile">
        <MenuIcon className="links__item" />
        <Link to="/" className="links__item links__item--design">audiophile</Link>
        <ShoppingCartOutlinedIcon onClick={() => setCart(!cart)} className="links__item links__item--extraSize" />
      </ul>
    </nav>
  );
}

export default Header;
