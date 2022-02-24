import { CardGroup } from "react-bootstrap"
import Item from "../Item/Item"

const ItemList = ({ products }) => {

    return (
        <CardGroup>
            {products.map(product => <Item key={product.id} product={product}/>)}
        </CardGroup>
       
    )
}

export default ItemList