import React from 'react';
import Header from '../components/Header';
import NewProduct from '../components/NewProduct';
import GridArticles from '../components/GridArticles';
import Zx7Speaker from '../components/Zx7Speaker';
import PremiumSpeaker from '../components/PremiumSpeaker';
import Yx1Earphones from '../components/Yx1Earphones';
import Promotion from '../components/Promotion';
import '../components/styles/css/index.css';

const index = () => (
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
    </main>
  </div>
);

export default index;
