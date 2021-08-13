import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import ProductCard from '../ProductCard/ProductCard'
import './LastCars.css';

export default function Product() {
  const [product, setProduct] = useState();
  useEffect(() =>
    axios.get('/cars/last-cars')
      .then( (res) => setProduct(res.data) )
      .catch( (err) => console.log(err.response) ),
  []);
  let loadedProducts = [];
  const productsToCards = (element, index) =>
    <Link className="hoverable" key={index}
    to={`/dashboard/products/${element.id}`}>
      <ProductCard key={index} user={element} />
    </Link>
  if(product) loadedProducts = product.map(productsToCards);
  return (
    <div className="Last-Cars">
        <div className="title">
            Últimos carros cadastrados:
        </div>
      <div className="itens">
        {loadedProducts}
      </div>
    </div> 
  )
}