import './ProductCard.css'

export default function ProductCard(props) {
    return (
        <div className="ProductCard grid-item">
            <img width="220px" src={props.user.image} alt="carro" />
            <p className="name">{props.user.model}</p>
            <p className="price">R$ {props.user.price}</p>
            <p className="description">{props.user.description}</p>
        </div>
    )
}
