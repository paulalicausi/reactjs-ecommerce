import './App.css';
import Home from './containers/home/Home';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Cart from './components/cart/Cart';
import CartIcon from './components/carticon/CartIcon';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home greeting="¡¡¡¡Bienvenid@s!!!!" />
          </Route>
          <Route exact path="/products/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart/">
            <Cart />
          </Route>
        </Switch>
        <CartIcon />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
