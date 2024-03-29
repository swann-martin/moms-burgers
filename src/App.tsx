import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import FoodMenu from './pages/FoodMenu';
import Values from './pages/Values';
import { v4 as uuidv4 } from 'uuid';
import data from './data';
import Form from './components/Form';
import { supabase } from './util/connection';
import Cart from './components/Cart';

export interface Product {
  orderId?: string;
  id: string;
  ingredients: string[];
  image: string;
  title: string;
  price: number;
}

const App = () => {
  const [cart, setCart] = useState<Product[] | []>([]);
  const [total, setTotal] = useState(0);
  const [side, setSide] = useState('');
  const [products, setProducts] = useState<Product[]>(data);
  const [orderStatus, setOrderStatus] = useState(false);
  const [formStatus, setFormStatus] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const { data, error } = await supabase.from('products').select();
        if (error) console.error(error);
        if (data) {
          setProducts(data);
          localStorage.setItem('products', JSON.stringify(data));
        }
      };
      // const storedProducts = localStorage.getItem('products');
      // !!storedProducts
      //   ? setProducts(JSON.parse(storedProducts))
      //   : fetchProducts();

      fetchProducts();
      console.log('products fetched', products);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSideChange = (evt: any) => {
    setSide(evt.value);
  };

  const toggleOrderStatus = () => {
    setOrderStatus(!orderStatus);
  };
  const toggleFormStatus = () => {
    setFormStatus(!formStatus);
  };

  const toggleMenuStatus = () => {
    setMenuStatus(!menuStatus);
  };

  const addToCart = (product: Product) => {
    const addedProduct = { ...product, orderId: uuidv4() };
    const newCart = [...cart, addedProduct];
    setCart(newCart);
    let newTotal = total + product.price;
    setTotal(newTotal);
  };

  const removeFromCart = (productToRemove: Product) => {
    setCart(
      cart.filter((product) => product.orderId !== productToRemove.orderId)
    );
    let newTotal = total - productToRemove.price;
    setTotal(newTotal);
    if (total < 0) {
      setTotal(0);
    }
  };

  return (
    <div className="app">
      <Nav
        cart={cart}
        menuStatus={menuStatus}
        toggleMenuStatus={toggleMenuStatus}
        removeFromCart={removeFromCart}
        total={total}
        toggleOrderStatus={toggleOrderStatus}
        toggleFormStatus={toggleFormStatus}
        orderStatus={orderStatus}
      />
      {orderStatus && (
        <div className="cart" onClick={() => setOrderStatus(false)}>
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            total={total}
            toggleOrderStatus={toggleOrderStatus}
            toggleFormStatus={toggleFormStatus}
          />
        </div>
      )}
      {cart?.length > 0 && formStatus && (
        <Form toggleFormStatus={toggleFormStatus} />
      )}
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
            toggleOrderStatus={toggleOrderStatus}
            orderStatus={orderStatus}
          />
        </Route>

        <Route path="/values" component={Values} />

        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};
export default App;
