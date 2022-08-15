import logo from './logo.svg';
import './App.css';
import Products from './pages/products/products';
import {BrowserRouter, Switch, Link, Route, Router} from 'react-router-dom'
import {items} from '../src/data/list'
import { useReducer, useState } from 'react';
import Cart from './pages/cart/cart';
import Product from './pages/product/product';
import LeftComponents from './components/navigation/leftcomponents';
import { StoreContext, StoreProvider } from '../src/context/context'
// import Common from './context/contextprovider';

function App() {
  /*const [cart, setCart] = useState([])
  console.log(cart)
  */
 const children = {Cart, Product}
  /*return (
    <div>
      <LeftComponents />
      <Switch>
      <StoreProvider>
        <Route path='/cart'>
        <Cart />
        </Route>
        <Route path='/product/:id'>
        <Product />
        </Route>
      </StoreProvider>
      
      <Route path='/products'>
        <Products />
      </Route>
      </Switch>
    </div>
    

  );*/

  // cái này ban đầu e nháp với chưa gắn routes vào nên e wrap thủ công như này
  return (
    <StoreProvider>
      {items.map((item, index) => <Product id = {index} />)}
      <Cart />
    </StoreProvider>
  )
}

export default App;
