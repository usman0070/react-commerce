import { Link } from "react-router-dom";
import Paypalbtn from "./PaypalBtn";
const CartTotal = ({ value, history }) => {
  const { cartSubTotal, cartTax, cartTotal, removeAll } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right">
            <Link to="/">
              <button
                type="button"
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                onClick={() => removeAll()}
              >
                clear cart
              </button>
            </Link>
            <h5 className="text-title">
              <span className="text-blue">subtotal: </span>
              <strong>${cartSubTotal}</strong>
            </h5>
            <h5 className="text-title">
              <span className="text-blue">tax: </span>
              <strong>${cartTax}</strong>
            </h5>
            <h5 className="text-title">
              <span className="text-blue">total: </span>
              <strong>${cartTotal}</strong>
            </h5>
            <Paypalbtn total={cartTotal} clearCart={removeAll} history={history} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
