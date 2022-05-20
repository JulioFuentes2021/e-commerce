import React from 'react'
import ReactDOM from 'react-dom'
import Summary from '@components/checkout/summary/summary'
import CloseIcon from '@mui/icons-material/Close';

const modal = ({ state }) => {
    const modal = document.getElementById('modal');

    return ReactDOM.createPortal(<div className="modal" onClick={() => console.log(state.setCart(!state.cart))}>
        <div className="modal__item">
            <CloseIcon style={{ fontSize: "3rem" }} className="modal__close" />
            <Summary />
        </div>
    </div >, modal)
}

export default modal