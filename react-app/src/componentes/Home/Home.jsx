import logo from '../../assests/logoreal.png';
import {Link} from 'react-router-dom';
import './Home.css'
import { Nav } from 'react-bootstrap';

export default function Home() {
    return (
        
        <div className="Home">

            <Nav class="topnav">
            <Nav.Link href="/home" id="linknav">Home</Nav.Link>
            <Nav.Link href="/cadastro" id="linknav">Cadastro</Nav.Link>
            <Nav.Link href="/login" id="linknav">Login</Nav.Link>
            </Nav>          
            
            <div className="Header">
                <div className="flex-title">
                    <img src={logo}
                        alt="logo"
                        height = '120px'
                        padding='0' 
                    />
                </div>

                <div className="Titulo">TROPA PISTÃO</div>
                
                <div className="flex-button">
                    <Link to="/login">
                        <button className="Login-button">
                            Login
                        </button>
                    </Link>
                    
                    <Link to="/cadastro">
                        <button className="Login-button">
                            Cadastrar
                        </button>
                    </Link>
                
                </div>

        </div>
        <div className="Conteudo">
            <figure>
                <figcaption>O maior, melhor e mais original site de compras e vendas de carros.</figcaption>
            </figure>
        </div>


        </div>
    )
}