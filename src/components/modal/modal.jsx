import React from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCart from '@components/shoppingCart';

const modal = ({ cart, setCart }) => {
    const modal = document.getElementById('modal');

    return ReactDOM.createPortal(<div className={`modal ${cart && 'show'}`}>
        <CloseIcon onClick={() => setCart(!cart)} className="modal__close" style={{ fontSize: '2rem', margin: '1rem' }} />
        <ShoppingCart cart={cart} setCart={setCart} />
    </div>, modal)
}

export default modal