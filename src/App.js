import './App.css';
import Home from './containers/home/Home';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import ItemDetailContainer from './containers/itemDetailContainer/ItemDetailContainer';

function App() {
  return (
      <div>
        <NavBar />
        <Home greeting="¡¡¡¡Bienvenid@s!!!!" />
        <ItemDetailContainer />
        <Footer />
      </div>
  );
}

export default App;
