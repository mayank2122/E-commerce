
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Header from "./Components/Header"
import Cart  from './Pages/Cart/Cart';
import Home from  "./Pages/Home/Home"
import  { HomeContextProvider } from './context/context';


function App() {

  return (
    <HomeContextProvider>
       <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
    </HomeContextProvider>
   
  );
}

export default App;
