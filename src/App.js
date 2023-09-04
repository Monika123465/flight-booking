import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import AllRoutes from './Pages/AllRoutes';



function App() {
  return (
    <div  >
      <Router>
       <Navbar/>
       <AllRoutes/>
       <Footer/>
   </Router>
    
    </div>
  );
}

export default App;
