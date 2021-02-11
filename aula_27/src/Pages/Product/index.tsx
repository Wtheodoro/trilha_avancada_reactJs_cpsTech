import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../Components/Services/api';
import { EachProductType } from '../../Types/types';

import { Container } from './styles';

const Product = () => {

  const[product, setProduct] = useState<EachProductType>()

  const params = useParams<any>()

  useEffect(() => {
    api.get(`/${params.id}`)
      .then(response => setProduct(response.data))
  }, [])


  return (
    <Container>
      <h1>{product?.title}</h1>
      <h3>{product?.category}</h3>
      <img src={product?.image} alt=""/>
      <p>{product?.description}</p>
      <h2>{product?.price} ¥</h2>
      <button>Buy now</button>
    </Container>
  );
};

export default Product;
