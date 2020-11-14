import './App.css';
import Home from './containers/home/Home';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
      <div>
        <NavBar />
        <Home greeting="Hola! :)" />
      </div>
  );
}

export default App;
