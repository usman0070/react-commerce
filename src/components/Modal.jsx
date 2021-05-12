import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductContext } from "../Context";
import { ButtonContainer } from "./Button";
const Modal = () => {
  //----------return statement-------
  return (
    <ProductContext.Consumer>
      {(value) => {
        const { openModal, closeModal } = value;
        const { img, title, price } = value.modalProduct;
        return openModal ? (
          <ModalContainer onClick={() => closeModal()}>
            <div className="container">
              <div className="row">
                <div id="modal" className="col-8 col-md-6 col-lg-4 mx-auto text-capitalize text-center p-5">
                  <h2>Item Added to cart</h2>
                  <img src={img} alt="Product" className="img-fluid" />
                  <h3>{title}</h3>
                  <h3 className="text-capitalize text-muted">Price:${price}</h3>
                  <Link to="/cart">
                    <ButtonContainer cart onClick={() => closeModal()}>
                      Go to cart
                    </ButtonContainer>
                  </Link>
                  <Link to="/">
                    <ButtonContainer onClick={() => closeModal()}>back to products</ButtonContainer>
                  </Link>
                </div>
              </div>
            </div>
          </ModalContainer>
        ) : null;
      }}
    </ProductContext.Consumer>
  );
};
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  #modal {
    background: var(--mainWhite);
  }
`;
export default Modal;
