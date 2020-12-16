import { createContext, useContext, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
  import { getFirestore } from '../firebase';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [orderId, setOrderId] = useState();
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [error, setErrror] = useState('');

    const handleCartItems = (product, quantity) => {
        const productInCart = cartItems.find((p) => p.id === product.id);
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

    const deleteItem = (item) => {
        for(var i = 0; i < cartItems.length; i++){
            if ( cartItems[i].id === item) {
                cartItems.splice(i, 1);
            }
        }
        setCartItems([...cartItems])
    }

    const totalPrice = () => {
        return cartItems.reduce((a, b) => a + (b.price * b.quantity), 0);
    }
 
    const buyItems = (e) => {
       e.preventDefault();
       const sell = {
          buyer: {
             name: name,
             lastname: lastname,
             email: email
          },
          items: cartItems,
          total: totalPrice()
       };
 
       if(name === '' || lastname === '' || email === '') {
          setErrror('Complete todos los campos.');
       }else {
          const db = getFirestore();
          const orders = db.collection("orders");
          orders.add(sell).then(({id}) => {
             setOrderId(id);
          }).catch(error => {
             console.log(error);
          });
       }
    }

    return <CartContext.Provider value={{cartItems, ItemCount, handleCartItems, deleteItem, totalPrice, buyItems, setName, setLastname, setEmail, setOrderId, orderId, error}}>{children}</CartContext.Provider>
}

export default useCartContext;