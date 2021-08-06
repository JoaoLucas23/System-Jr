import axios from 'axios';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import './CadastroProduto.css'

export default function CadastroProduto() {
  const [formValues, setFormValues] = useState({
    model: '',
    brand: '',
    color: '',
    year: 0,
    image: '',
    price: 0,
    km: 0,
    description: '',
    condition: ''
  })
  const inputChange = (event) => {
    if(event.target.name === "model")
      setFormValues({...formValues, name: event.target.value})

    if(event.target.name === "brand")
      setFormValues({...formValues, name: event.target.value})

    if(event.target.name === "color")
      setFormValues({...formValues, name: event.target.value})

    if(event.target.name === "year")
      setFormValues({...formValues, name: event.target.value})

    if(event.target.name === "image")
      setFormValues({...formValues, image: event.target.value})

    if(event.target.name === "price")
      setFormValues({...formValues, price: event.target.value})

    if(event.target.name === "km")
      setFormValues({...formValues, description: event.target.value})
    
    if(event.target.name === "description")
      setFormValues({...formValues, description: event.target.value})
    
    if(event.target.name === "condition")
      setFormValues({...formValues, condition: event.target.value})
    console.log(formValues)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/cars', formValues)
      .then( (res) => console.log(res) )
      .catch( (err) => console.log(err.response) )
  }
  return (
    <div className="CadastroProduto">
      <Form onSubmit={handleSubmit} className="formProduto">
        <Form.Group controlId="formbasicName">
          <Form.Control name="model" onChange={inputChange} type="text" placeholder="Modelo" />
        </Form.Group>
        <Form.Group controlId="formbasicName">
          <Form.Control name="brand" onChange={inputChange} type="text" placeholder="Marca" />
        </Form.Group>
        <Form.Group controlId="formbasicName">
          <Form.Control name="color" onChange={inputChange} type="text" placeholder="Cor" />
        </Form.Group>
        <Form.Group controlId="formbasicName">
          <Form.Control name="year" onChange={inputChange} type="text" placeholder="Ano" />
        </Form.Group>
        <Form.Group controlId="formbasicImage">
          <Form.Control name="image" onChange={inputChange} type="text" placeholder="Imagem" />
        </Form.Group>
        <Form.Group controlId="formbasicPrice">
          <Form.Control name="price" onChange={inputChange} type="text" placeholder="Preço" />
        </Form.Group>
        <Form.Group controlId="formbasicPrice">
          <Form.Control name="km" onChange={inputChange} type="text" placeholder="Kilometragem" />
        </Form.Group>
        <Form.Group controlId="formbasicDescription">
          <Form.Control name="description" onChange={inputChange} type="text" placeholder="Descrição" />
        </Form.Group>
        <Form.Group controlId="formbasicCondition">
          <Form.Control name="condition" onChange={inputChange} type="text" placeholder="Condição" />
        </Form.Group>
        <Button variant="success" type="submit">Concluir Cadastro</Button>
      </Form>
    </div>
  )
}