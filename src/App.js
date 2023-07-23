import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import { BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <div >
      <Router>
       <Navbar/>
       <Home/>
      <Footer/>
   </Router>
    
    </div>
  );
}

export default App;
