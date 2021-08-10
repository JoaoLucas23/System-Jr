import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useParams} from 'react-router';

import './AlteraProduto.css'

export default function AlterarProduto() {
  const history = useHistory();
  const { id } = useParams();

  const [user, setUser] = useState(false);

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    image: ''
  })

  useEffect(()=>{
      axios.get(`/users/user/${id}`).then(res => setUser(res.data))
      .catch(err => console.log(err));
  }, []);

  const inputChange = (event) => {
    if(event.target.name === "name")
      setFormValues({...formValues, name: event.target.value})

    if(event.target.name === "email")
      setFormValues({...formValues, email: event.target.value})

    if(event.target.name === "phone")
      setFormValues({...formValues, phone: event.target.value})

    if(event.target.name === "image")
      setFormValues({...formValues, image: event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/users/user/${id}`, formValues)
    .then( (res) => {console.log(res) 
      alert("Alterações realizadas com sucesso!")
      history.push(`/dashboard/users/${id}`)})
    .catch( (err) => {console.log(err.response) 
      alert(err.message)})
  }

  useEffect(()=> {
    if(user) setFormValues({name: user.name,email:user.email,phone:user.phone,image:user.image});
  }, [user]);

  return (
    <div className="AlterarProduto">
      <Form onSubmit={handleSubmit} className="formProduto">
      <Form.Group className="type-spc" controlId="formbasicModel">
          <Form.Control name="name" defaultValue={user.name} onChange={inputChange} type="text" placeholder="Modelo" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicBrand">
          <Form.Control name="email" defaultValue={user.email} onChange={inputChange} type="text" placeholder="Marca" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicColor">
          <Form.Control name="phone" defaultValue={user.phone} onChange={inputChange} type="text" placeholder="Cor" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicImage">
          <Form.Control name="image" defaultValue={user.image} onChange={inputChange} type="text" placeholder="Imagem" />
        </Form.Group>
          <Button variant="warning" type="submit">Concluir Edição</Button>   
      </Form>
    </div>
  )
}