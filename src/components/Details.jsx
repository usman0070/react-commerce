import { Link } from "react-router-dom";
import React from "react";
import { ProductContext } from "../Context";
import { ButtonContainer } from "./Button";
const Details = () => {
  return (
    <ProductContext.Consumer>
      {(value) => {
        const { id, title, img, info, company, price, inCart } = value.details;
        return (
          <div className="container py-5 ">
            {/* title */}
            {/* row 1 ***********************/}
            <div className="row">
              <div className="col-10 mx-auto text-center text-blue my-5 text-slanted">
                <h1>{title}</h1>
              </div>
            </div>
            {/* product info */}
            {/* row 2 ******************************/}
            <div className="row">
              <div className="col-10 col-md-6 mx-auto my-3 ">
                <img src={img} alt="phone" className="img-fluid" />
              </div>

              {/* wrapper of product div **********************************/}
              <div className="col-10 col-md-6 mx-auto my-3 text-capitalize ">
                {/* heading 1 */}
                <h1>model:{title}</h1>
                {/* heading 2 */}
                <h4 className="text-title text-muted mt-3 mb-2 text-uppercase">
                  made by:<span>{company}</span>
                </h4>
                {/* heading 3 */}
                <h4 className="text-blue">
                  <strong>
                    price : <span>$</span>
                    {price}
                  </strong>
                </h4>
                {/*info */}
                <h6 className="text-capitalize font-weight-bold mt-3 mb-0">Some info about the product:</h6>
                <h6 className="text-muted lead">{info}</h6>
                {/* Button */}
                <div>
                  <Link to="/">
                    <ButtonContainer>back to products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    {inCart ? "in cart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
              {/* wrapper of product div ends here***************************** */}
              {/* row 2 ends here */}
            </div>
          </div>
        );
      }}
    </ProductContext.Consumer>
  );
};

export default Details;
