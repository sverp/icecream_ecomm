import {Freezer} from './component/Freezer'
import Cart from './component/Cart';
import Navigation from './component/Navigation';
import './App.css'
import  {BrowserRouter ,Route,Routes} from 'react-router-dom';
import { ShopContextProvider } from './context/ShopContext';
export default function App() {

  return (
    <>  
        <ShopContextProvider>
          <BrowserRouter >
          <Navigation />
          <Routes>
            <Route path="/" element={<Freezer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          </BrowserRouter>
        </ShopContextProvider>
    </>
  )
}
