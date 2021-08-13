import './Login.css';
import Welcome from './Welcome/Welcome';
import Form from './Form/Form';
import { Nav } from 'react-bootstrap';

export default function Login() {

    return (
        <div className="Login">

            <Nav class="topnav">
                <Nav.Link href="/home" id="linknav">Home</Nav.Link>
                <Nav.Link href="/cadastro" id="linknav">Cadastro</Nav.Link>
                <Nav.Link href="/login" id="linknav">Login</Nav.Link>
            </Nav>   

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