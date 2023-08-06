import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Travell from './Pages/Travell.js'
import { BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <div >
      <Router>
       <Navbar/>
       <Home/>
       <Travell/>
      <Footer/>
   </Router>
    
    </div>
  );
}

export default App;
