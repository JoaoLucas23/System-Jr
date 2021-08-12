import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle} from 'reactstrap';
import './Cadastro.css'
import { useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



export default function Cadastro() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    image: '',
  })
  const inputChange = (event) => {
    if(event.target.name === "name")
      setFormValues({...formValues, name: event.target.value})

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
      .then( (res) => {console.log(res) 
                        alert("Cadastro realizado com sucesso!")})
      .catch( (err) => {console.log(err.response) 
                        alert(err.message)})
  }
  return (

<div className="Home">
    <div class="topnav">
            <Link to="/Home" className="linknav">Home</Link>
            <Link to="/login" className="linknav">Carros</Link>
            <Link to="/login" className="linknav">Usuários</Link>
            <Link to="/cadastro" className="linknav">Cadastro</Link>
            <Link to="/login" className="linknav">Login</Link>
    </div> 
<Row className= "justify-content-center mt-5">

<Col md={6}>
<Card>
    <CardBody>
        <CardTitle className="CardTitle" tag="h5">Cadastro</CardTitle>
        <Form className="formulario">
        <Col>
            <FormGroup>
              <Label for="exampleName">Nome</Label>
              <Input  type="text" name="name" id="exampleName" placeholder="John Doe"/>
            </FormGroup>
          </Col>

          <Col >
            <FormGroup className="mt-3">
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="john@doe.com"/>
            </FormGroup>
          </Col>

          <Col >
            <FormGroup className="mt-3">
              <Label for="examplePassword">Senha</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="**********" />
            </FormGroup>
          </Col>
   
        <Col >
        <FormGroup className="mt-3">
            <Label for="examplePhone">Telefone</Label>
            <Input type="tel" name="phone" id="examplePhone" placeholder="(99) 99999-9999"/>
        </FormGroup>
        </Col>

        <Col >
        <FormGroup className="mt-3">
          <Label for="exampleImage">Imagem</Label>
          <Input type="url" name="image" id="exampleImage" placeholder="https://bitly.com/"/>
        </FormGroup>
        </Col>

        
        <Button className= "justify-content-center mt-5" >Cadastrar</Button>

      </Form>
    </CardBody>
    </Card>


  </Col>
  </Row>
  </div>


);
}