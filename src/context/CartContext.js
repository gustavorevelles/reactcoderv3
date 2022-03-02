import { createContext, useState } from "react"

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd, quantity) => {
        isInCart(productToAdd.id)
            ? sumarCantidad(productToAdd, quantity)
            : setCart([...cart, { ...productToAdd, quantity }]);
    }

    const removeItem = (id) => {

    }

    const isInCart = (id) => {
        return cart.some(p => p.id === id)
    }

    //función que agrega cantidad
    const sumarCantidad = (productToAdd, quantity) => {
        const newProducts = cart.map((prod) => {
            if (prod.id === productToAdd.id) {
                const newProduct = {
                    ...prod,
                    quantity: prod.quantity + quantity,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(newProducts);
    };

    return (
        <Context.Provider value={{
            cart,
            addItem
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context