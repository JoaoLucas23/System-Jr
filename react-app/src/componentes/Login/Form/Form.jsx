import './Form.css';
import Logo from '../../../assests/logo.jpg';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export default function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('/users/login', {email, password}).then((res) => history.push('/dashboard'))
        .catch((err) => console.log(err));
    }

    return (
        <div className="Form">
            <form method="POST" onSubmit={handleSubmit}>
                <div className="container2">
                    <img src={Logo}
                        alt="logo"
                        width='240px'
                        height='220px' 
                    />
                    <br />
                    <div id="Email">
                        <label htmlFor="email"><p>Login:</p></label>
                        <input type="text" placeholder="Digite seu email" name="email"
                         required onChange={handleEmailChange} value={email} />
                    </div>
                    <div className="Password">
                        <input id="form-bottom" type="password" placeholder="Digite sua senha" name="password"
                         required onChange={handlePasswordChange} value={password}/>
                        <span className="password">
                            <Link to="/">
                                Esqueci minha senha
                            </Link>
                        </span>
                    </div>
                        <button type="submit">Entrar</button>
                        <br className="unselectable"/>
                        <br className="unselectable"/>
                </div>
            </form>
        </div>
    )
}
