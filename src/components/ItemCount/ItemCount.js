import { useState } from 'react'
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";

const ItemCount = ({stock = 1, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 0) {
           setQuantity(quantity - 1)
       }     
   }

   return(

        <Container>
            <InputGroup>
                <FormControl placeholder={quantity}/>
                <Button variant="outline-secondary" onClick={()=>decrement()}>-</Button>
                
                <Button variant="outline-secondary" onClick={()=>increment()}>+</Button>
                <Row>
                    <Button onClick={()=>onAdd(quantity)} >Agregar</Button>
                </Row>
            </InputGroup>
        </Container>
   )

}
export default ItemCount