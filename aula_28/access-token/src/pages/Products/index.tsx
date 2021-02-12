import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../services/api';
import { ProductType } from '../../types/ProductType';

import { Container } from './styles';

const Products = () => {

  const [products, setProducts] = useState<ProductType[]>()
  const [permission, setPermission] = useState<Boolean>(true)

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      setPermission(true)
    } else {
      setPermission(false)
    }
  }, [])

  useEffect(() => {

    const accessToken = localStorage.getItem('accessToken')

    const headers = {
      'Authorization': `Bearer ${accessToken}`
    }

    api.get(`/products`, {headers: headers})
      .then(response => setProducts(response.data))
  }, [])


  return (
    <>
      {
        !permission &&
        <Redirect to="/" />
      }
      {
        products?.map((i: ProductType) => (
          <Container>
            <h1>{i.title}</h1>
            <p>{i.description}</p>
            <p>{i.price}</p>
            <img src={i.image} alt=""/>
          </Container>
        ))
      }
    </>
  );
};

export default Products;
