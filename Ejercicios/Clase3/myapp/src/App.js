import './App.css';
import { ProductDetails } from './Components/ProductDetails/ProductDetails';
import {Raqueta} from "./utils/Raqueta.js"

function App() {
  return (
    <ProductDetails producto={Raqueta}/>
  );
}

export default App;
