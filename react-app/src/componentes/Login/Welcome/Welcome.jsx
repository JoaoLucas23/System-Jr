import './Welcome.css';
import Logo from '../../../assests/logoreal.png';

export default function Welcome() {
    return (
        <div className="Welcome">
            <p id="name">Tropa Pistão</p>
            <img src={Logo}
                        alt="logo"
                    />
            <p className="saudacao">
                Acesse sua conta!
            </p>
        </div>
    )
}
