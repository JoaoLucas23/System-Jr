import logo from '../../assests/logoreal.png';
import {Link} from 'react-router-dom';
import './Home.css'

export default function Home() {
    return (
        
        <div className="Home">

            <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
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
                <img id="LogoV"
                    src={logo}
                    alt="variante logo"
                    height='200px'
                />
                <figcaption>O maior, melhor e mais original site de compras e vendas de carros.</figcaption>
            </figure>
        </div>


        </div>
    )
}