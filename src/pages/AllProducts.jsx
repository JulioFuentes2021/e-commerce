import React, { useEffect, useContext } from 'react';
import Article from '@components/Articles';
import { productContext } from '../context/context';
import Layout from '@components/Layout';

const AllProducts = () => {
    const products = useContext(productContext);
    const { allProducts, setAllProducts } = products;

    useEffect(() => {
        const getAllProducts = async () => {
            if (!allProducts.length) {
                const response = await fetch('http://localhost:8000/headphones/');
                const data = await response.json();
                setAllProducts(data.products);
                console.log('Pidio')
            }
        }

        getAllProducts();

    }, [])

    return (
        <Layout>
            <div className="allproducts">
                {allProducts.map((product) => (
                    <Article data={product} key={product._id} id={product?.id} />
                ))}
            </div>
        </Layout>
    )
}

export default AllProducts