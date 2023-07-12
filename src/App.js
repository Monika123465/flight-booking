import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer';
import { BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <div >
      <Router>
       <Navbar/>
       <Footer/>
   </Router>
    
    </div>
  );
}

export default App;
