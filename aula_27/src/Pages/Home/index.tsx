import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Components/Services/api';
import { EachProductType, ProductsType } from '../../Types/types';

import { Container } from './styles';

const Home = () => {

  const [products, setProducts] = useState<EachProductType[]>()

  useEffect(() => {
    api.get(``)
      .then(response => setProducts(response.data))
  }, [])

  return (
    <Container>
      <div className="top">
        <h1>Mercado negro</h1>
        <p>Tudo pelo preço que deveria ser!</p>
      </div>
      
      <div className="container">
      {
        products?.map((i: EachProductType) => (
          <div className="box" key={i.id}>
            <h2 className="name">{i.title}</h2>
            <div className="circle"></div>
            <img className="product" src={i.image} alt={i.title}/>
            <p>{i.price} ¥</p>
            <Link className="buy" to={`/product/${i.id}`}>Saber Mais</Link>
          </div>
        ))
      }
      </div>
    </Container>
  );
};

export default Home;
