import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductInfo from './components/ProductInfo';
import { Product} from './data/api';


function App() {
  // let myURL="https://www.hp.com/gb-en/shop/Html/Merch/Images/c07961042_1750x1285.jpg?imwidth=300";
  console.log(Product[0]);

  return (
    <div className="App">
      {/* <ProductInfo url={myURL}/> */}
      {/* <ProductInfo product={Product[0]}></ProductInfo> */}
      
      {Product.map((laptop) => (
          <ProductInfo product={laptop}></ProductInfo>
      ))}
    </div>
  );
}


export default App;

