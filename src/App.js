import './App.css';
import { Navigate, Route,Routes } from 'react-router-dom';
//context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';

//components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/products" element={<Store />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/*" element={<Navigate to="/products" />} />
          </Routes>
        </CartContextProvider>  
      </ProductsContextProvider>
      
    </div>
  );
}

export default App;
