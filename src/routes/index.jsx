import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/index";
import Checkout from "@pages/checkout";
import Product from "@pages/product";
import Products from "@pages/AllProducts";
import ScrollToTop from "../components/ScrollToTop"

const Store = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/all-products" element={<Products />} />
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    )
};

export default Store;