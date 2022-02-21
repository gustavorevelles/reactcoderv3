import { Card } from "react-bootstrap"
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ product }) => {
    return (

        <Card>
            <Card.Img variant="top" src={product?.img} />
            <Card.Body>
            <Card.Title>{product?.name}</Card.Title>
            <Card.Text>
                Precio: {product?.price}€
            </Card.Text>
            <Card.Text>
                {product?.description}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <ItemCount stock={product?.stock} />
            </Card.Footer>
        </Card>

        
    )
}

export default ItemDetail