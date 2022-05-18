import React, { useEffect, useContext } from 'react';
import Article from '@components/Articles';
import { productContext } from '../context/context';
import useFetchData from '../customHooks/useFetchData';

const AllProducts = () => {
    const products = useContext(productContext);
    const { electronics, setElectronics } = products;
    const [state] = useFetchData('http://localhost:8000/headphones/category/electronics', electronics, setElectronics);

    return (
        <div className="allproducts">
            {state.map((product) => (
                <Article data={product} key={product._id} id={product?.id} />
            ))}
        </div>
    )
}

export default AllProducts