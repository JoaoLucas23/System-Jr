import logo from '../../assests/logoreal.png';
import {Link} from 'react-router-dom';
import './Home.css'

export default function Home() {
    return (
        
        <div className="Home">

            <div class="topnav">
            <Link to="/Home" className="linknav">Home</Link>
            <Link to="/login" className="linknav">Carros</Link>
            <Link to="/login" className="linknav">Usuários</Link>
            <Link to="/cadastro" className="linknav">Cadastro</Link>
            <Link to="/login" className="linknav">Login</Link>
            </div>            
            
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