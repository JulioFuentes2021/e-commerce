import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/index";
import Checkout from "@pages/checkout";
import Product from "@pages/product";

const Store = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Store;