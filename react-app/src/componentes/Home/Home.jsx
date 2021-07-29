import Logo from '../../assests/logo.jpg';
import LogoVariant from '../../assests/logoVariant.png';
import {Link} from 'react-router-dom';
import './Home.css'

export default function Home() {
    return (
        <div className="Home">
            <div className="Header">
                <div className="flex-title">
                    <img src={Logo}
                        alt="logo"
                        width='120px'
                        height='160px' 
                        padding='0' 
                    />
                </div>
                <div className="flex-button">
                    <Link to="/login">
                        <button className="Login-button">
                            Login
                        </button>
                    </Link>
                </div>
                
        </div>
        <div className="Conteudo">
            <figure>
                <img id="LogoV"
                    src={LogoVariant}
                    alt="variante logo"
                    height='150px'
                    width="300px" 
                />
                <figcaption>O maior e mais original site de compras</figcaption>
            </figure>
        </div>
        </div>
    )
}