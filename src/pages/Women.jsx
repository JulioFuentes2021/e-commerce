import React, { useEffect, useContext } from 'react';
import Article from '@components/Articles';
import { productContext } from '../context/context';
import useFetchData from '../customHooks/useFetchData';

const WomenSection = () => {
    const products = useContext(productContext);
    const { women, setWomen } = products;
    const [state] = useFetchData("http://localhost:8000/headphones/category/women's clothing", women, setWomen);

    return (
        <div className="allproducts">
            {state.map((product) => (
                <Article data={product} key={product._id} id={product?.id} />
            ))}
        </div>
    )
}

export default WomenSection