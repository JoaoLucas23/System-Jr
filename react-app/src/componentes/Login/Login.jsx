import './Login.css';
import Welcome from './Welcome/Welcome';
import Form from './Form/Form';
import {Link} from 'react-router-dom';

export default function Login() {

    return (
        <div className="Login">

            <div class="topnav">
            <Link to="/Home" className="linknav">Home</Link>
            <Link to="/login" className="linknav">Carros</Link>
            <Link to="/login" className="linknav">Usuários</Link>
            <Link to="/cadastro" className="linknav">Cadastro</Link>
            <Link to="/login" className="linknav">Login</Link>
            </div>    
            <section className="container">
                <div className="left">
                    <Welcome />
                </div>
                <div className="right">
                    <Form />
                </div>
            </section>
        </div>
    )
}