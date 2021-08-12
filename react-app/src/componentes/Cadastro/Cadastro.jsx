import axios from 'axios';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import './Cadastro.css'

export default function CadastroUsuario() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    image: '',
  })
  const inputChange = (event) => {
    if(event.target.name === "name")
      setFormValues({...formValues,  name: event.target.value})

    if(event.target.name === "email")
      setFormValues({...formValues, email: event.target.value})

    if(event.target.name === "password")
      setFormValues({...formValues, color: event.target.value})

    if(event.target.name === "phone")
      setFormValues({...formValues, year: event.target.value})

    if(event.target.name === "image")
      setFormValues({...formValues, image: event.target.value})

    
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/cars', formValues)
      .then( (res) => {console.log(res) 
                        alert("Cadastro realizado com sucesso!")})
      .catch( (err) => {console.log(err.response) 
                        alert(err.message)})
  }
  return (
    <div className="CadastroUsuario">
      <Form onSubmit={handleSubmit} className="formUsuario">
        <Form.Group className="type-spc" controlId="formbasicName">
          <Form.Control name=  "name" onChange={inputChange} type="text" placeholder= "name" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicEmail">
          <Form.Control name="email" onChange={inputChange} type="text" placeholder="email" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicPassword">
          <Form.Control name="password" onChange={inputChange} type="text" placeholder="password" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicPhone">
          <Form.Control name="phone" onChange={inputChange} type="text" placeholder="phone" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicImage">
          <Form.Control name="image" onChange={inputChange} type="text" placeholder="Image" />
        </Form.Group>
        <Button id="cad-but" variant="success" type="submit">Concluir Cadastro</Button>
      </Form>
    </div>
  )
}