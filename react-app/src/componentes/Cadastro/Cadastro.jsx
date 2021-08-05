import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle} from 'reactstrap';
import './Cadastro.css'

const Cadastro = (props) => {
    return (

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



    );
  }
  
  export default Cadastro;