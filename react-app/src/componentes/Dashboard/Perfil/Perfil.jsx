import React from 'react';
import { Container, Row, Col, Card, CardBody, CardText, ListGroup, ListGroupItem } from 'reactstrap';
import './Perfil.css'
export default function Home() {
    return (
        <>

            <Row  className= "mt-5 text-center">
                <p className="titlepage">Página de Perfil</p>
            </Row>

            <Row className= "m-5">
                <Col xs="4">
                    <Card>
                        <img width="40%" src='https://engenharia360.com/wp-content/uploads/2019/05/esta-pessoa-nao-existe-engenharia360-4.png' alt="foto de perfil"/>
                        <CardBody>
                            <CardText>Felipe Costa</CardText>
                        </CardBody>
                    </Card>
                </Col>
                    
                <Col>
                    <Card>
                    <ListGroup>
                        <ListGroupItem disabled tag="a" href="#">Felipe Costa Lopes</ListGroupItem>
                        <ListGroupItem disabled tag="a" href="#">felcoslop@ufmg.br</ListGroupItem>
                        <ListGroupItem disabled tag="a" href="#">31987895872</ListGroupItem>
                        <ListGroupItem disabled tag="a" href="#">******</ListGroupItem>
                    </ListGroup>
                    </Card>
                </Col>
            </Row>

            <Row  className= "mt-5 text-center">
                <p className="titlepage">Carros Adicionados</p>
            </Row>

            <Row className= "m-5">
                <Col xs="4">
                    <div className="ProductCard grid-item">
                        <img width="220px" src='https://s2.glbimg.com/3cbcYz2Vy0qQG2-_y87RARlVnVM=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/2/9/kUgT73SAawl5udid0DPA/2019-03-30-f-.jpg' alt="carro" />
                        <p className="name">Ferrari</p>
                        <p className="price">R$22.000,00</p>
                        <p className="description">teste</p>
                    </div>
                </Col>

                <Col xs="4">
                    <div className="ProductCard grid-item">
                        <img width="220px" src='https://s2.glbimg.com/3cbcYz2Vy0qQG2-_y87RARlVnVM=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/2/9/kUgT73SAawl5udid0DPA/2019-03-30-f-.jpg' alt="carro" />
                        <p className="name">Ferrari</p>
                        <p className="price">R$22.000,00</p>
                        <p className="description">teste</p>
                    </div>
                </Col>

                 <Col xs="4">
                    <div className="ProductCard grid-item">
                        <img width="220px" src='https://s2.glbimg.com/3cbcYz2Vy0qQG2-_y87RARlVnVM=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/2/9/kUgT73SAawl5udid0DPA/2019-03-30-f-.jpg' alt="carro" />
                        <p className="name">Ferrari</p>
                        <p className="price">R$22.000,00</p>
                        <p className="description">teste</p>
                    </div>
                </Col>
                
            </Row>

    </>
    )
}
