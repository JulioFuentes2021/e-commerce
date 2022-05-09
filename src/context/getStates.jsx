import { useContext } from 'react';
import { productContext } from './context';

export const states = () => {
    const products = useContext(productContext);

    const { mainProducts, setMainProducts } = products;

    return ({ mainProducts, setMainProducts })
}