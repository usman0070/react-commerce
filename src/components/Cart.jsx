import React from "react";
import { ProductContext } from "../Context";
import CartColums from "./CartColums";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import EmptyCart from "./EmptyCart";
import Title from "./Title";
const Cart = (props) => {
  return (
    <ProductContext.Consumer>
      {(value) => {
        const { cart } = value;
        return cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <Title name="your" title="cart" />
            <CartColums />
            <CartList value={value} />
            <CartTotal value={value} history={props.history} />
          </>
        );
      }}
    </ProductContext.Consumer>
  );
};

export default Cart;
