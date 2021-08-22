import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './pages/Home';
import FoodMenu from './pages/FoodMenu';
import Values from './pages/Values';
import Order from './pages/Order';
const App = () => (
  <div className="app">
    <Nav />
    <Switch>
      <Route path="/menu" component={FoodMenu} />
      <Route path="/values" component={Values} />
      <Route path="/order" component={Order} />
      <Route path="/" component={Home} />
    </Switch>
    <Footer />
  </div>
);
export default App;
