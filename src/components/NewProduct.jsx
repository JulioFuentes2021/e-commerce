import React, { useEffect, useContext } from 'react';
import { productContext } from '../context/context';
import { states } from '../context/getStates';

function NewProduct({ data }) {

  const products = useContext(productContext);
  const { mainProducts, setMainProducts } = products
  useEffect(() => {
    console.log(mainProducts)
  }, [])

  return (
    <div className="product">
      <article className="">
        <img
          src="https://img.search.brave.com/t19KuFsM_FjJllGG_oo8OuKhnY5wlDgnhe55YMSdoaU/rs:fit:1005:1005:1/g:ce/aHR0cDovL3BuZ2lt/Zy5jb20vdXBsb2Fk/cy9oZWFkcGhvbmVz/L2hlYWRwaG9uZXNf/UE5HNzY0NS5wbmc"
          alt="New Product"
          className="product__image"
        />
      </article>
      <article className="product__block">
        <span className="product__title product--margin">{data?.id}</span>
        <h2 className="product__name product__name--design product--margin">
          XX99 MARK II
          <br />
          {' '}
          HEADPHONE
        </h2>
        <span className="product__description product--margin">
          Experience natural, lifelike audio and exceptional
          <br />
          {' '}
          build quality made for the passionate music
          <br />
          {' '}
          enthusiast.
        </span>
        <button type="button" className="product__link product--margin">
          SEE PRODUCT
        </button>
      </article>
    </div>
  );
}

export default NewProduct;
