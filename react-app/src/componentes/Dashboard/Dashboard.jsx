import axios from 'axios';
import { useState, useEffect } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Product from './Products/Products';
import Users from './Users/Users';
import ProductProfile from './ProductProfile/ProductProfile';
import CadastroProduto from './CadastrarProduto/CadastroProduto';
import AlterarProduto from './AlterarProduto/AlteraProduto';
import AlterarUser from './AlterarUsuario/AlterarUsuario';
import UserProfile from './UserProfile/UserProfile';
import LastCars from './LastCars/LastCars';
import Perfil from './Perfil/Perfil'


import './Dashboard.css';

export default function Dashboard() {
  
  const [user, setUser] = useState(false);
  useEffect(() => {
    axios.get('/users/me')
      .then( (res) => setUser(res.data) )
      .catch( (err) => console.log(err.response) )
  }, []);

  const history = useHistory();
  const handleLogout = () => {
    axios.get('/users/logout');
    history.push('/')
  }
  const handleClick = () => {
    history.push(`/dashboard/users/user-profile/${user.id}`)
  }

  if(user)
    return (
      <div className="Dashboard">
            <Nav class="top-nav">
            <Nav.Link href="/home" id="link-nav">Home</Nav.Link>
            <Nav.Link href="/dashboard/home" id="link-nav">Dashboard</Nav.Link>
            <Nav.Link href="/dashboard/products" id="link-nav">Carros</Nav.Link>
            <Nav.Link href="/dashboard/users" id="link-nav">Usuários</Nav.Link>
            <Nav.Link href="/cadastro" id="link-nav">Cadastro</Nav.Link>
            <Nav.Link href="/login" id="link-nav">Login</Nav.Link>
            </Nav> 
        <section className="Cont">
        <Nav className="flex-column">
          <hr />
          <Nav.Link href={`/dashboard/users/user-profile/${user.id}`} >
          <img width="130" height="130" src={user.image} alt="User" onClick={handleClick} />
          <Nav.Item id="to-user" onClick={handleClick}>{user.name}</Nav.Item>
          </Nav.Link>
          <Nav.Item id="email">{user.email}</Nav.Item>
          <hr />
          <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
        </Nav>
        <div className="right-Itens">
        <Router>
          <Switch>
          <Route path="/dashboard/users/user-profile/:id">
              <Perfil user={user} />
            </Route>
            <Route path="/dashboard/users/edit/:id">
              <AlterarUser user={user} />
            </Route>
            <Route path="/dashboard/users/:id">
              <UserProfile user={user} />
            </Route>
            <Route path="/dashboard/users">
             <Users/>
            </Route>
            <Route path="/dashboard/products/cadastro">
              <CadastroProduto />
            </Route>
            <Route path="/dashboard/products/edit/:id">
              <AlterarProduto user={user} />
            </Route>
            <Route path="/dashboard/products/:id">
              <ProductProfile user={user} />
            </Route>
            <Route path="/dashboard/products">
              <Product />
            </Route>
            <Route path="/dashboard/home">
              <LastCars />
            </Route>
          </Switch>
        </Router>
        </div>
        </section>
      </div>
    )
  else
    return (
      <div className="carregando">
        Carregando...
      </div>
    )
}