import './ProductCard.css'

export default function ProductCard(props) {
    return (
        <div className="ProductCard grid-item">
            <img width="200px" src={props.user.image} alt="produto" />
            <p className="name">{props.user.model}</p>
            <p className="description">{props.user.description}</p>
        </div>
    )
}
