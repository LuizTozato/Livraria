import './App.css';
import Header from './components/Header';
import Rotas from './Router';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Rotas/>
        <Footer/>
      </div>    
    </BrowserRouter>
  )
}

export default App;
