import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard'
import './Products.css';

export default function Product() {
  const match = useRouteMatch()
  const [product, setProduct] = useState();
  useEffect(() =>
    axios.get('/cars')
      .then( (res) => setProduct(res.data) )
      .catch( (err) => console.log(err.response) ),
  []);
  let loadedProducts = [];
  const productsToCards = (element, index) =>
    <Link className="hoverable" key={index}
      to={`${match.path}/${element.id}`}>
      <ProductCard key={index} user={element} />
    </Link>
  if(product) loadedProducts = product.map(productsToCards);
  return (
    <div className="Product">
      <div className="botao-cadastro">
        <Link to={`${useRouteMatch().path}/cadastro`}>
          <Button id="botaoCadastro">
            Cadastrar Produto
          </Button>
        </Link>
      </div>
      <div className="itens">
        {loadedProducts}
      </div>
    </div> 
  )
}