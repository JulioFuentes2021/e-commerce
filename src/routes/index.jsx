import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@pages/index";
import Checkout from "@pages/checkout";
import Product from "@pages/product";
import Products from "@pages/AllProducts";
import Electronics from "@pages/Electronics";
import Jewelery from "@pages/Jewelery";
import Men from "@pages/Men";
import Women from "@pages/Women";
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
                    <Route path="/electronics" element={<Electronics />} />
                    <Route path="/jewelery" element={<Jewelery />} />
                    <Route path="/men" element={<Men />} />
                    <Route path="/women" element={<Women />} />
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    )
};

export default Store;