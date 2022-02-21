import './Item.css'
import { Link } from 'react-router-dom'
import { Card } from "react-bootstrap"

const Item = ({product}) => {
   
    return (

        <Card>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                Precio: {product.price}€
            </Card.Text>
            <Card.Text>
                {product.description}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Link to={`/item/${product.id}`}>Ver detalle</Link>
            </Card.Footer>
        </Card>
    )
}

export default Item