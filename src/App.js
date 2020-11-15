import './App.css';
import Home from './containers/home/Home';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

function App() {
  return (
      <div>
        <NavBar />
        <Home greeting="Hola! :)" />
        <Footer />
      </div>
  );
}

export default App;
