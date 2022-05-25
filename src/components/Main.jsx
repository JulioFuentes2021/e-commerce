import React, { useContext } from 'react'
import { productContext } from '../context/context';
import GridArticles from '@components/GridArticles';
import Zx7Speaker from '@components/Zx7Speaker';
import PremiumSpeaker from '@components/PremiumSpeaker';
import Yx1Earphones from '@components/Yx1Earphones';
import Promotion from '@components/Promotion';

const Main = () => {
    // const products = useContext(productContext);
    // const { mainProducts } = products;
    // console.log(mainProducts)
    return (
        <div className="main__content">
            <GridArticles />
            <PremiumSpeaker data={12} />
            <Zx7Speaker />
            <Yx1Earphones />
            <Promotion />
        </div>
    )
}

export default Main