/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import NewProduct from '@components/NewProduct';
import GridArticles from '@components/GridArticles';
import Zx7Speaker from '@components/Zx7Speaker';
import PremiumSpeaker from '@components/PremiumSpeaker';
import Yx1Earphones from '@components/Yx1Earphones';
import Promotion from '@components/Promotion';
import Layout from '@components/Layout';
import Main from '@components/Main';

// import '@styles/index.css';

const index = () => {
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const test = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8000/headphones/');
  //       const data = await response.json();
  //       setProducts(data.products)
  //     } catch (error) {
  //       console.log('Ha surgido un error')
  //     }
  //   };
  //   test();
  // }, []);

  //! I have to decide the best way to use the api for speakers components
  return (
    <Layout className="index">
      <NewProduct data={products[0]} />
      <main className="main">
        <Main />
      </main>
    </Layout>
  );
};

export default index;
