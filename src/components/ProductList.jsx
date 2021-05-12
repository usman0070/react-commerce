import React from "react";
import Title from "./Title";
import Product from "./Product";
import { ProductContext } from "../Context";

const ProductList = () => {
  // console.log(storeProducts);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductContext.Consumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product product={product} key={value.id} />;
                });
              }}
            </ProductContext.Consumer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
