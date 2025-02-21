import logo from './logo.svg';
import './App.css';

import Products from './components/Products/Products';
import { useState } from 'react';

function App() {
  const [cart,setCart] = useState([]);
  const addToCart = (product) => {
    console.log(product);
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item)=>item.id ===product.id);
      if (existingProduct) {
        return prevCart.map((item) => item.id ===product.id ? {...item,quantity:item.quantity+1}:item);
      } else {
        return [...prevCart,{product,quantity:1}];
      }
    })
  }

  const removefromCart = () => {

  }
  return (
    <div className="App">
     <Products addToCart={addToCart} removefromCart={removefromCart} />
    </div>
  );
}

export default App;
