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
import Home from '../Home/Home'
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
            <div class="topnav">
            <Link to="/Dashboard/LastCars" className="linknav">Home</Link>
            <Link to="/dashboard/products" className="linknav">Carros</Link>
            <Link to="/Dashboard/Users" className="linknav">Usuários</Link>
            <Link to="/Dashboard/home" className="linknav">Cadastro</Link>
            <Link to="/Dashboard/home" className="linknav">Login</Link>
            </div> 
        <Nav className="flex-column">
          <hr />
          <img width="130" height="130" src={user.image} alt="User" onClick={handleClick} />
          <Nav.Item onClick={handleClick}>{user.name}</Nav.Item>
          <Nav.Item>{user.email}</Nav.Item>
          <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
          <hr />
          <Nav.Link href="/dashboard/users">Usuários</Nav.Link>
          <Nav.Link href="/dashboard/products">Carros</Nav.Link>
        </Nav>
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
    )
  else
    return (
      <Home />
    )
}