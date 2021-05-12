import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Default from "./components/Default";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { ProductContext } from "./Context";
import { Switch, Route } from "react-router-dom";
import { storeProducts, detailProduct } from "./Data";
import Modal from "./components/Modal";
//-----------------function component-----------------
function App() {
  //useState--------------
  const [products] = useState(storeProducts);
  const [details, setDetails] = useState({ handleDetail: detailProduct });
  const [cart, setCart] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(null);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [count, setCount] = useState(null);
  //----------------------find function----------------
  const getItems = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };
  //----------------------detail product function----------------

  const handleDetail = (id) => {
    let product = getItems(id);
    setDetails(() => {
      return { handleDetail: product };
    });
  };
  //----------------------add product in function----------------

  const addToCart = (id) => {
    // setCart(getItems(id));
    const temProducts = products;
    const index = temProducts.indexOf(getItems(id));
    const product = temProducts[index];
    setCart(() => {
      return [...cart, product];
    });
    // setCount((product.count = 1));
    setCount((product.count = 1));
    product.inCart = true;
    //prices at initial stage
    let price = product.price;
    product.total = product.total + price;
    cart.map((item) => (price += item.price));
    let tax = 0.1 * price;
    setCartSubTotal(price);
    setCartTax(parseFloat(tax).toFixed(2));
    setCartTotal(price + tax);
  };
  //----------------------add product totals function----------------
  const addTotals = (id) => {
    const product = getItems(id);

    //subtotal
    let subtotal = 0; //price of 1st item
    //product.total = product.price * product.total;  both works
    product.total = product.price * product.count;
    cart.map((item) => (subtotal += item.total));
    setCartSubTotal(subtotal);
    //tax
    const tepmtax = 0.1 * subtotal;
    const tax = parseFloat(tepmtax.toFixed(2));
    setCartTax(tax);
    //total
    const total = tax + subtotal;
    setCartTotal(total);
  };
  const decreaseTotals = (id) => {
    const product = getItems(id);
    //subtotal
    let subtotal = 0; //price of 1st item
    product.total = product.total - product.price;
    cart.map((item) => (subtotal += item.total));
    setCartSubTotal(subtotal);
    //tax
    const tepmtax = 0.1 * subtotal;
    const tax = parseFloat(tepmtax.toFixed(2));
    setCartTax(tax);
    //total
    const total = tax + subtotal;
    setCartTotal(total);
  };
  //----------------------open and close modal function----------------

  const toggleModal = (id) => {
    const product = getItems(id);
    setModalProduct(() => {
      return product;
    });
    setOpenModal(!openModal);
  };
  const closeModal = () => {
    setOpenModal(false);
  };
  //----------------------increment and decrement function----------------

  const increment = (id) => {
    const product = getItems(id);
    setCount((product.count = product.count + 1));
  };

  const decrement = (id) => {
    const product = getItems(id);
    if (product.count === 1) {
      removeItem(id);
    } else {
      setCount((product.count = product.count - 1));
      product.total = product.price * count;
    }
  };
  //----------------------remove items function----------------

  const removeItem = (id) => {
    const updatedProduct = cart.filter((product) => product.id !== id);
    setCart(updatedProduct);
    const removedItem = getItems(id);
    removedItem.inCart = false; //so that we can add it again
    //set states
    setCartSubTotal(cartSubTotal - removedItem.price);
    let tax = (cartSubTotal - removedItem.price) * 0.1;
    setCartTax(parseFloat(tax).toFixed(2));
    setCartTotal(cartSubTotal - removedItem.price + (cartSubTotal - removedItem.price) * 0.1);
  };
  const removeAll = () => {
    setCart([]);
    products.map((product) => (product.inCart = false));
    products.map((product) => (product.total = 0));
    setCartSubTotal(null);
    setCartTax(null);
    setCartTotal(null);
    setCount(null);
  };

  //----------------return statement-----------------------
  return (
    <h1>
      <ProductContext.Provider
        value={{
          products,
          handleDetail,
          addToCart: addToCart,
          getItems: getItems,
          details: details.handleDetail,
          openModal,
          modalProduct,
          toggleModal,
          closeModal,
          increment,
          decrement,
          removeItem,
          removeAll,
          cart,
          cartSubTotal,
          cartTax,
          cartTotal,
          addTotals,
          count,
          decreaseTotals,
        }}
      >
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/details" component={Details} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </ProductContext.Provider>
    </h1>
  );
}

export default App;
