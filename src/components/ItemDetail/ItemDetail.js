import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'


const ItemDetail = ({ product }) => {
    const [qty, setQty] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (quantity) => {
        setQty(quantity);
        addToCart(product, quantity);
    };
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
            {
                    product.quantity > 0 ? 
                        <Link to={'/cart'} className='Option'>Ir al carrito de compras</Link> :
                        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                } 
            </Card.Footer>
        </Card>

        
    )
}

export default ItemDetail