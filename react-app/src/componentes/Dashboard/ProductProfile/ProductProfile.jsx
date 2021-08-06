import { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import './ProductProfile.css';

export default function ProductProfile(props) {
  const history = useHistory();
  const [product, setProduct] = useState();
  let { id } = useParams();

  const disableButton = () => ( (props.user.role !== 'admin') || (props.user.id !== (product ? product.UserId : null)) ) ? true : false;
  useEffect(() => 
    axios.get(`/cars/${id}`)
      .then( (res) => setProduct(res.data) )
      .catch( (err) => console.log(err.response) ),
  [id])
  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`/cars/${id}`)
      .then( (res) => history.push('/dashboard/products') )
      .catch( (err) => console.log(err.response) );
  }
  return (
    <div className="ProductProfile">
      <Card style={{ width: '20rem'}}>
        <Card.Img variant="top" src={product ? product.image : ''} />
        <Card.Body>
          <Card.Title>{product ? product.name : ''}</Card.Title>
          <Card.Subtitle>{product ? product.price : ''}</Card.Subtitle>
          <Card.Text>{product ? product.description : ''}</Card.Text>
          <Card.Text>{product ? product.condition : ''}</Card.Text>
          <Link style={disableButton() ? {pointerEvents: 'none'} : null} to={`/dashboard/products/edit/${id}`}>
            <Button disabled={disableButton() ? true : false} variant="outline-warning">
              Editar Produto
            </Button>
          </Link>
          <Button disabled={disableButton() ? true : false} onClick={handleDelete} variant="outline-danger">
            Deletar Produto
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}