import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer';
import { BrowserRouter as Router} from 'react-router-dom';
import AllRoutes from './Pages/AllRoutes';



function App() {
  return (
    <div  >
      {/* either remove router from here  or remove browser router from index.js both weould be fine. */}
      
       <Navbar/>
       <AllRoutes/>
       <Footer/>
   
    
    </div>
  );
}

export default App;
