import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import FoodMenu from './pages/FoodMenu';
import Values from './pages/Values';
import Order from './pages/Order';

import data from './data';

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [side, setSide] = useState('');
  const [products, setProducts] = useState(data);

  const handleSideChange = (evt) => {
    setSide(evt.value);
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
    let newTotal = total + product.price;
    setTotal(newTotal);
  };
  return (
    <div className="app">
      <Nav cart={cart} />
      <Switch>
        <Route path="/menu">
          <FoodMenu
            products={products}
            cart={cart}
            addToCart={addToCart}
            handleSideChange={handleSideChange}
            side={side}
            total={total}
          />
        </Route>

        <Route path="/values" component={Values} />
        <Route path="/order">
          <Order cart={cart} />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
