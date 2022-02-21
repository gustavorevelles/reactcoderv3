import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asyncmock'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'




const ItemListContainer = ()=> {
    const [products, setProducts] = useState([])

    
    useEffect(() => {
        getProducts().then(item => {
            setProducts(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProducts()
        })          
    }, [])
    
    return (
        
        <Container>
            <Row>
            <ItemList products={products}/>
            </Row>
        </Container>
    )    
    
}

export default ItemListContainer