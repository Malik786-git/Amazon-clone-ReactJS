import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Sidebar from './components/Sidebar';
import { AppProvider } from './context/context';
import ImageCarousel from './components/ImageCarousel';
import Products from './components/Products';


function App() {    

  return ( 
   <>
    <AppProvider>

      <Navbar/>
      <Menu/>
      <Sidebar/>
       <ImageCarousel/>
       <Products/>
    </AppProvider>
   </>
    
  );
}

export default App;
