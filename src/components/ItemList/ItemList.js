import { CardGroup } from "react-bootstrap"
import { Card } from "react-bootstrap"
import Item from "../Item/Item"

const ItemList = ({ products }) => {

    return (
        <CardGroup>
            {products.map((product)=>(
                            <Item product={product} key={product.id} />
                        ))}
        </CardGroup>
       
    )
}

export default ItemList