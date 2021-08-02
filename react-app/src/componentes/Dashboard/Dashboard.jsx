import axios from 'axios';
import { useState, useEffect } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Product from './Products/Products';

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

  if(user)
    return (
      <div className="Dashboard">
        <Nav className="flex-column">
          <Nav.Item as="h1" className="dashboard">Dashboard</Nav.Item>
          <hr />
          <img src={user.image} alt="User" className="userImage" />
          <Nav.Item id="nome">{user.name}</Nav.Item>
          <Nav.Item id="email">{user.email}</Nav.Item>
          <Nav.Link id="link" href="/dashboard/users">Usuários</Nav.Link>
          <Nav.Link id="link" href="/dashboard/products">Produtos</Nav.Link>
          <hr />
          <Button id="logout-button" variant="outline-danger" onClick={handleLogout}>Logout</Button>
        </Nav>
        <Router>
          <Switch>
            <Route path="/dashboard/users">

            </Route>
            <Route path="/dashboard/products">
              <Product />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  else
    return (
      <h1>Loading</h1>
    )
}
