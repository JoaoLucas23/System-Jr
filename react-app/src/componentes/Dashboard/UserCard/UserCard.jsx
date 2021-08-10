import './UserCard.css'

export default function UserCard(props) {
    return (
        <div className="UserCard grid-item">
            <img width="220px" src={props.user.image} alt="usuario" />
            <p className="name">{props.user.name}</p>
            <p className="email">{props.user.email}</p>
            <p className="role">{props.user.role}</p>
        </div>
    )
}
