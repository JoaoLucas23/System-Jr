import './UserCard.css'

export default function UserCard(props) {
    return (
        <div className="UserCard grid-item">
            <img width="220px" src={props.user.image} alt="usuario" />
            <p className="name">{props.user.model}</p>
            <p className="price">R$ {props.user.price}</p>
            <p className="description">{props.user.description}</p>
        </div>
    )
}
