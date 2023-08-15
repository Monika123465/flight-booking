import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Travell from './Pages/Travell.js'
import Memory from './Pages/Memory.js';
import { BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <div >
      <Router>
       <Navbar/>
       <Home/>
       <Travell/>
       <Memory/>
      <Footer/>
   </Router>
    
    </div>
  );
}

export default App;
