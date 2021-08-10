import axios from 'axios';
import { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import UserCard from '../UserCard/UserCard'
import './Users.css';

export default function User() {
  const match = useRouteMatch()
  const [user, setUser] = useState();
  useEffect(() =>
    axios.get('/users')
      .then( (res) => setUser(res.data) )
      .catch( (err) => console.log(err.response) ),
  []);
  let loadedUsers = [];
  const usersToCards = (element, index) =>
    <Link className="hoverable" key={index}
      to={`${match.path}/${element.id}`}>
      <UserCard key={index} user={element} />
    </Link>
  if(user) loadedUsers = user.map(usersToCards);
  return (
    <div className="User">
      <div className="botao-cadastro">
        <Link to={`${useRouteMatch().path}/cadastro`}>
          <Button id="botaoCadastro">
            Cadastrar Usuario
          </Button>
        </Link>
      </div>
      <div className="itens">
        {loadedUsers}
      </div>
    </div> 
  )
}