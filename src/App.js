import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
// pages
import ProductList from "./pages/ProductList";
import Cart from "./components/Cart";
import Default from "./pages/Default";
import Details from "./pages/Details";
import Home from "./pages/Home"
// components
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Footer from './components/Footer'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;