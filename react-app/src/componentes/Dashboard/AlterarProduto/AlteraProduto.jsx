import axios from 'axios';
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

import './AlteraProduto.css'

export default function AlterarProduto() {

  const [product,setProduct] = useState(false);

  const [formValues, setFormValues] = useState({
    model: '',
    brand: '',
    color: '',
    year: '',
    image: '',
    price: '',
    km: '',
    description: '',
    condition: ''
  })
  const inputChange = (event) => {
    if(event.target.name === "model")
      setFormValues({...formValues, model: event.target.value})

    if(event.target.name === "brand")
      setFormValues({...formValues, brand: event.target.value})

    if(event.target.name === "color")
      setFormValues({...formValues, color: event.target.value})

    if(event.target.name === "year")
      setFormValues({...formValues, year: event.target.value})

    if(event.target.name === "image")
      setFormValues({...formValues, image: event.target.value})

    if(event.target.name === "price")
      setFormValues({...formValues, price: event.target.value})

    if(event.target.name === "km")
      setFormValues({...formValues, km: event.target.value})
    
    if(event.target.name === "description")
      setFormValues({...formValues, description: event.target.value})
    
    if(event.target.name === "condition")
      setFormValues({...formValues, condition: event.target.value})
  }
  let { id } = useParams();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/cars/car/${id}`, setProduct)
    .then( (res) => {console.log(res) 
      alert("Alterações realizadas com sucesso!")})
    .catch( (err) => {console.log(err.response) 
      alert(err.message)})
  }

  useEffect(()=> {
    if(product) setFormValues({model:product.model, brand:product.brand,color:product.color,year:product.year,image:product.image,price:product.price,km:product.km,description:product.description,condition:product.condition});
  }, [product])

  return (
    <div className="AlterarProduto">
      <Form onSubmit={handleSubmit} className="formProduto">
      <Form.Group className="type-spc" controlId="formbasicModel">
          <Form.Control name="model" defaultValue={product.model} onChange={inputChange} type="text" placeholder="Modelo" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicBrand">
          <Form.Control name="brand" defaultValue={product.brand} onChange={inputChange} type="text" placeholder="Marca" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicColor">
          <Form.Control name="color" defaultValue={product.color} onChange={inputChange} type="text" placeholder="Cor" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasic=Year">
          <Form.Control name="year" defaultValue={product.year} onChange={inputChange} type="text" placeholder="Ano" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicImage">
          <Form.Control name="image" defaultValue={product.image} onChange={inputChange} type="text" placeholder="Imagem" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicPrice">
          <Form.Control name="price" defaultValue={product.price} onChange={inputChange} type="text" placeholder="Preço" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicKM">
          <Form.Control name="km" defaultValue={product.km} onChange={inputChange} type="text" placeholder="Kilometragem" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicDescription">
          <Form.Control name="description" defaultValue={product.description} onChange={inputChange} type="text" placeholder="Descrição" />
        </Form.Group>
        <Form.Group className="type-spc" controlId="formbasicCondition">
          <Form.Control name="condition" defaultValue={product.condition} onChange={inputChange} type="text" placeholder="Condição" />
        </Form.Group>
        <Button variant="warning" type="submit">Concluir Edição</Button>
      </Form>
    </div>
  )
}