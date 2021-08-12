import { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import './ProductProfile.css';

export default function ProductProfile(props) {
  const history = useHistory();
  const [product, setProduct] = useState();
  const [user, setUser] = useState();
  let { id } = useParams();

  const disableButton = () => ( (props.user.role !== 'admin') && (props.user.id !== (product ? product.UserId : null)) ) ? true : false;
  useEffect(() => 
    axios.get(`/cars/car/${id}`)
      .then( (res) => setProduct(res.data) )
      .catch( (err) => console.log(err.response) ),
  [id])

  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`/cars/car/${id}`)
      .then( (res) => history.push('/dashboard/products') )
      .catch( (err) => console.log(err.response) );
  }

  useEffect (()=>{
    if(product){
      axios.get(`/users/user/${product.UserId}`)
      .then((res)=> setUser(res.data))
      .catch((err)=> console.log(err.response))
    };
  }, [product]);

  return (
    <div className="ProductProfile">
      <Card id="cartao" style={{ width: '50%'}}>
        <Card.Img id="image" variant="top" src={product ? product.image : ''} />
              <Card.Body>
                  <p className="type">Modelo: <Card.Text className="data">{product ? product.model : ''}</Card.Text></p>
                  <p className="type">Marca: <Card.Text className="data">{product ? product.brand : ''}</Card.Text></p>
                  <p className="type">Preço: <Card.Text className="data">R$ {product ? product.price : ''}</Card.Text></p>
                  <p className="type">Cor: <Card.Text className="data">{product ? product.color : ''}</Card.Text></p>
                  <p className="type">Ano: <Card.Text className="data">{product ? product.year : ''}</Card.Text></p>
                  <p className="type">Kilometragem Atual: <Card.Text className="data">{product ? product.km : ''} km</Card.Text></p>
                  <p className="type">Descrição: <Card.Text className="data">{product ? product.description : ''}</Card.Text></p>
                  <p className="type">Condição: <Card.Text className="data">{product ? product.condition : ''}</Card.Text></p>
                  <Link to={`/dashboard/users/user-profile/${user.id}`}>
                    <p className="type">Dono: <Card.Text className="data">{user ? user.name : ''}</Card.Text></p>
                  </Link>
                  <Link style={disableButton() ? {pointerEvents: 'none'} : null} to={`/dashboard/products/edit/${id}`}>
                    <Button id="edit-but" disabled={disableButton() ? true : false} variant="outline-warning">
                      Editar Produto
                    </Button>
                  </Link>
                  <Button id="delet-but" disabled={disableButton() ? true : false} onClick={handleDelete} variant="outline-danger">
                    Deletar Produto
                  </Button>
            </Card.Body>
      </Card>
    </div>
  )
}