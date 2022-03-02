import React, { useContext } from 'react';
import { CartContextProvider } from '../../context/CartContext'

const Cart = () => {
    const { cart } = useContext(CartContextProvider);

    return (
        <>
            {cart.map((prod) => (
                <li key={prod.id}>{prod.quantity}</li>
                
            ))}
        </>
    );
};

export default Cart;