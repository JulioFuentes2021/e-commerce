import React from 'react'

const Product = () => {
    return (
        <div className="view">
            <div className="viewImage">
                <img src="https://imgs.search.brave.com/VgCGAoPN69jK9W7Y1wM-DVK2kXVFLsGvTOUP-TWCwvA/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/b0FQeXZraWpKN0dw/cU5ZWUVuLXR3SGFG/aiZwaWQ9QXBp" alt="" className="viewImage__item" />
            </div>
            <div className="viewDescription">
                <span className="viewDescription__tag">NEW PRODUCT</span>
                <span className="viewDescription__name">XX99 MARK || HEADPHONES</span>
                <p className="viewDescription__info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit iure sequi delectus nemo nesciunt in est praesentium fuga tenetur, magnam voluptatibus harum libero. Deleniti iusto esse error tempore reiciendis provident eius mollitia sint veritatis totam nobis saepe, beatae distinctio odio.</p>
                <span className="viewDescription__price">$ 2,999</span>
                <div className="cart">
                    <div className="productsAmount">
                        <button className="productsAmount__operation">-</button>
                        <span className="productsAmount__value">1</span>
                        <button className="productsAmount__operation">+</button>
                    </div>
                    <button className="cart__button">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Product