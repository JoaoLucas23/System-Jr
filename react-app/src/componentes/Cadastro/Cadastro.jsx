import axios from 'axios';
import { useState } from 'react';
import { Form, Button, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import './Cadastro.css';

export default function CadastroUsuario() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    image: ''
  })

  const history = useHistory();

  const inputChange = (event) => {
    if(event.target.name === "name")
      setFormValues({...formValues,  name: event.target.value})

    if(event.target.name === "email")
      setFormValues({...formValues, email: event.target.value})

    if(event.target.name === "password")
      setFormValues({...formValues, password: event.target.value})

    if(event.target.name === "phone")
      setFormValues({...formValues, phone: event.target.value})

    if(event.target.name === "image")
      setFormValues({...formValues, image: event.target.value})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/users', formValues)
      .then( (res) => {history.push('/login') 
        alert("Cadastro realizado com sucesso!")})
      .catch( (err) => {console.log(err.response) 
                        alert(err.message)})
  }
  return (
    <div className="CadastroUsuario">
      <Nav class="topnav">
            <Nav.Link href="/home" id="linknav">Home</Nav.Link>
            <Nav.Link href="/cadastro" id="linknav">Cadastro</Nav.Link>
            <Nav.Link href="/login" id="linknav">Login</Nav.Link>
      </Nav>   
      <div className = "divCadastro">
      <Form onSubmit={handleSubmit} className="formUsuario">
        <h1 className="cad_title">Cadastro</h1>
        <Form.Group className="type-spc" controlId="formbasicName">
          <Form.Control name=  "name" onChange={inputChange} type="text" placeholder= "Nome" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicEmail">
          <Form.Control name="email" onChange={inputChange} type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicPassword">
          <Form.Control name="password" onChange={inputChange} type="password" placeholder="Senha" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicPhone">
          <Form.Control name="phone" onChange={inputChange} type="tel" placeholder="Telefone" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicImage">
          <Form.Control name="image" onChange={inputChange} type="url" placeholder="Link da Imagem" />
        </Form.Group>
          <Button id="cad-but" variant="success" type="submit">Concluir Cadastro</Button>
      </Form>
      </div>
    </div>
  )
}