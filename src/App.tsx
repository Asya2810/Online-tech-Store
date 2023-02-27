import './App.css';
import ProductInfo from './components/productInfo';
import { product } from './components/data/api';


function App() {
  // let myURL="https://www.hp.com/gb-en/shop/Html/Merch/Images/c07961042_1750x1285.jpg?imwidth=300";
  console.log(product[0]);

  return (
    <div className="App">
      {/* <button className="btn btn-primary">Details</button> */}
      {/* <ProductInfo url={myURL}/> */}
      {/* <ProductInfo product={Product[0]}></ProductInfo> */}
      
      {product.map((laptop: any) => (
          <ProductInfo product={laptop}></ProductInfo>
      ))}
    </div>
  );
}



export default App;
