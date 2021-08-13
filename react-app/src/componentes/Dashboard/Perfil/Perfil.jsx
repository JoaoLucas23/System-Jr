import { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import './Perfil.css';
import ProductCard from '../ProductCard/ProductCard'

export default function Perfil(props) {
  const history = useHistory();
  const [user, setUser] = useState();
  let { id } = useParams();

  useEffect(() => 
    axios.get(`/users/user/${id}`)
      .then( (res) => setUser(res.data) )
      .catch( (err) => console.log(err.response) ),
  [id])
  const handleDelete = (event) => {
    event.preventDefault();
    axios.delete(`/users/user/${id}`)
      .then( (res) => history.push('/dashboard/users') )
      .catch( (err) => console.log(err.response) );
  }

  const [product, setProduct] = useState();

  useEffect(() =>
    axios.get(`/cars/user-cars/${id}`)
      .then( (res) => setProduct(res.data) )
      .catch( (err) => console.log(err.response) ),
  [id]);

  let loadedProducts = [];
  const productsToCards = (element, index) =>
    <Link className="hoverable" key={index}
    to={`/dashboard/products/${element.id}`}>
      <ProductCard key={index} user={element} />
    </Link>
  if(product) loadedProducts = product.map(productsToCards);

  const disableButton = () => ( (props.user.role !== 'admin') && (props.user.id !== (user ? user.id : null)) ) ? true : false;
  const disableDeleteButton = () => (props.user.role !== 'admin') ? true : false;
  return (
    <div className="Perfil">
    <section className="CONTAINER">
        <div className="left-side">
            <Card id="perfil-cartao" style={{ width: '85%'}}>
                <Card.Img id="perfil-user-Image" variant="top" src={user ? user.image : ''} />
                <Card.Body>
                    <p className="perfil-user-Type">Nome: <Card.Text className="data">{user ? user.name : ''}</Card.Text></p>
                    <p className="perfil-user-Type">Email: <Card.Text className="data">{user ? user.email : ''}</Card.Text></p>
                    <p className="perfil-user-Type">Telefone: <Card.Text className="data">{user ? user.phone : ''}</Card.Text></p>
                    <p className="perfil-user-Type">Papel: <Card.Text className="data">{user ? user.role : ''}</Card.Text></p>
                    <Link style={disableButton() ? {pointerEvents: 'none'}:null } to={`/dashboard/users/edit/${id}`}>
                        <Button id="perfil-user-edit-but" disabled={disableButton() ? true : false} variant="outline-warning">
                        Editar Usuário
                        </Button>
                    </Link>
                    <Button id="perfil-user-delet-but" disabled={disableDeleteButton() ? true : false} onClick={handleDelete} variant="outline-danger">
                        Deletar Usuário
                    </Button>
                </Card.Body>
            </Card>
        </div>
        <div className="right-side">
        {loadedProducts}
        </div>
      </section>
    </div>
  )
}