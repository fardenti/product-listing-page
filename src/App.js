import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Heading from './components/Heading';
import Product from './components/Product';
import './App.css';

// export default ({ limit }) => axios(`http://localhost:4000?limit=${limit}`)

function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    (async () => {
      const response = await axios('http://localhost:4000/')
      // const response = await apiHelper({ limit: 20 })
      const { data } = response.data
      console.log(data)
      setProducts(data)
    })();
  })


  return (
    <div className="App">
      <Heading>test</Heading>
      <header className="App-header">
        <div>
         {
           products.map(product => <Product {...product} />)
         }
       </div>
      </header>
    </div>
  );
}

export default App;
