import { createContext, useContext, useState } from 'react';
import { getFirestore } from '../firebase';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [orderId, setOrderId] = useState();
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [confirmationEmail, setConfirmationEmail] = useState('');
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

       let validCharEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

       if(name === '' || lastname === '' || email === '' || confirmationEmail === '') {
            setErrror('Complete todos los campos.');
        } else if (!email.match(validCharEmail)) {
            setErrror('Ingrese un e-mail válido.');
        } else if(confirmationEmail !== email){
            setErrror('Los e-mail deben coincidir.');
        } else {
          const db = getFirestore();
          const orders = db.collection("orders");
          orders.add(sell).then(({id}) => {
             setOrderId(id);
          }).catch(error => {
             alert(error);
          });
       }
    }

    const newOrder = () => {
        setOrderId();
        setName();
        setLastname();
        setEmail();
        setCartItems([]);
    }

    return <CartContext.Provider value={{cartItems, ItemCount, handleCartItems, deleteItem, totalPrice, buyItems, setName, setLastname, setConfirmationEmail, setEmail, setOrderId, orderId, error, newOrder}}>{children}</CartContext.Provider>
}

export default useCartContext;