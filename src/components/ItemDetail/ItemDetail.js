import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { useNotificationServices } from '../../services/notification/NotificationServices'
import { Card } from 'react-bootstrap'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)

    const setNotification = useNotificationServices()

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const productToAdd = {
            id,
            name,
            price,
            img,
            category,
            description,
            stock
        }

        addItem(productToAdd, quantity)
        setNotification('success',`Se agrego ${name} al carrito`)
    }
 
    return (

        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                Precio: {price}€
            </Card.Text>
            <Card.Text>
                {description}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            {
                    quantity > 0 ? 
                        <Link to={'/cart'} className='Option'>Ir al carrito de compras</Link> :
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                } 
            </Card.Footer>
        </Card>
        
    )
}

export default ItemDetail