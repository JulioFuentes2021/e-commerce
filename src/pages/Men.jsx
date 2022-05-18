import React, { useEffect, useContext } from 'react';
import Article from '@components/Articles';
import { productContext } from '../context/context';
import useFetchData from '../customHooks/useFetchData';

const MenSection = () => {
    const products = useContext(productContext);
    const { men, setMen } = products;

    const [state] = useFetchData("http://localhost:8000/headphones/category/men's clothing", men, setMen);

    return (
        <div className="allproducts">
            {state.map((product) => (
                <Article data={product} key={product._id} id={product?.id} />
            ))}
        </div>
    )
}

export default MenSection