import React from "react";
import styled from "styled-components";
import { ProductContext } from "../Context";
import { Link } from "react-router-dom";
//------------------------------------>>>>>
const Product = ({ product }) => {
  const { id, title, img, price, inCart } = product;
  return (
    <ProductWrapper className="col-9 col-md-6 col-lg-3 mx-auto my-3">
      <div className="card">
        <ProductContext.Consumer>
          {(value) => (
            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
              <Link to="/details">
                <img src={img} alt="product" className="card-img-top" />
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.toggleModal(id);
                }}
              >
                {inCart ? <p className="text-capitalize mb-0">In cart</p> : <i className="fas fa-cart-plus" />}
              </button>
            </div>
          )}
        </ProductContext.Consumer>
        {/* cart footer */}
        <div className="card-footer d-flex justify-content-between">
          <h6 className="align-self-center mb-0">{title}</h6>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgb(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .cart-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: var(--lightBlue);
    color: var(--mainWhite);
    border: none;
    border-radius: 0.5rem 0 0 0;
    padding: 0.2rem 0.4rem;
    font-size: 1.4rem;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0%, 0%);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
`;

export default Product;
