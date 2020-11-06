import './App.css';
import Home from './containers/home/Home';
import NavBar from './components/navbar/NavBar';
import ItemCount from './components/itemcount/ItemCount';

function App() {
  return (
      <div>
        <NavBar />
        <Home greeting="Hola! :)">
          <ItemCount min="0" max="5" />
        </Home>
      </div>
  );
}

export default App;
