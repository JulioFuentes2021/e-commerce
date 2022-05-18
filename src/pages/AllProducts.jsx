import React, { useEffect, useContext } from 'react';
import Article from '@components/Articles';
import useFetchData from '../customHooks/useFetchData';
import { productContext } from '../context/context';

const AllProducts = () => {
    const products = useContext(productContext);
    const { allProducts, setAllProducts } = products;
    const [state] = useFetchData('http://localhost:8000/headphones/', allProducts, setAllProducts);

    return (
        <div className="allproducts">
            {state.map((product) => (
                <Article data={product} key={product._id} id={product?.id} />
            ))}
        </div>
    )
}

export default AllProducts