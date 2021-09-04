import React, { useState, useEffect } from 'react';
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
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');
  const [cart, setCart] = useState(cartFromLocalStorage);
  const [total, setTotal] = useState(0);
  const [side, setSide] = useState('');
  const [products, setProducts] = useState(data);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleSideChange = (evt) => {
    setSide(evt.value);
  };

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
    let newTotal = total + product.price;
    setTotal(newTotal);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product.id !== productToRemove.id));
    let newTotal = total - productToRemove.price;
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
            removeFromCart={removeFromCart}
            handleSideChange={handleSideChange}
            side={side}
            total={total}
          />
        </Route>

        <Route path="/values" component={Values} />
        <Route path="/order">
          <Order cart={cart} removeFromCart={removeFromCart} />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
