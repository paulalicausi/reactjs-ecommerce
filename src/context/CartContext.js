import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const handleCartItems = (product, quantity) => {
        const productInCart = cartItems.find((p) => p.id === product);
        if(productInCart){
            productInCart.quantity += quantity;
            setCartItems([...cartItems]);
        }else{
            setCartItems([...cartItems, {...product, quantity}]);
        }
    }

    const ItemCount = () => {
        return cartItems.reduce((acc, p) => (acc += p.quantity), 0);
    }


    return <CartContext.Provider value={{cartItems, ItemCount, handleCartItems}}>{children}</CartContext.Provider>
}

export default useCartContext;