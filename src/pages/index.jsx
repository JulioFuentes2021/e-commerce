/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import Header from '@components/Header';
import NewProduct from '@components/NewProduct';
import GridArticles from '@components/GridArticles';
import Zx7Speaker from '@components/Zx7Speaker';
import PremiumSpeaker from '@components/PremiumSpeaker';
import Yx1Earphones from '@components/Yx1Earphones';
import Promotion from '@components/Promotion';
import Footer from '@components/Footer';
import '@styles/index.css';

const index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const test = async () => {
      const response = await fetch('http://localhost:8000/headphones/');
      const data = await response.json();
      console.log(data.products);
      setProducts(data.products);
    };

    test();
  }, []);

  //! I have to decide the best way to use the api for speakers components
  return (
    <div className="index">
      <Header />
      <NewProduct />
      <main className="main">
        <div className="main__content">
          <GridArticles />
          <PremiumSpeaker />
          <Zx7Speaker />
          <Yx1Earphones />
          <Promotion />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default index;
