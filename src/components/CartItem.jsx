const CartItem = ({ item, value }) => {
  const { id, img, title, price, count, total } = item;
  const { decrement, increment, removeItem, addTotals, decreaseTotals } = value;
  return (
    <div
      className="row my-2 text-capitalize text-center text-blue pt-2"
      style={{ borderTop: "0.1rem solid rgba(0,0,0,0.2)" }}
    >
      <div className="col-10 col-lg-2 mx-auto ">
        <img className="img-fluid" src={img} alt="product" style={{ width: "5rem", height: "5rem" }} />
      </div>
      <div className="col-10 col-lg-2 mx-auto mt-2">
        <h6 className="text-uppercase">
          <span className="d-lg-none text-danger ">Product: </span>
          {title}
        </h6>
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <h6 className="text-uppercase ">
          <span className="d-lg-none text-danger">Price: </span>${price}
        </h6>
      </div>
      {/* button div */}
      <div className="col-10 col-lg-2 mx-auto my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-black mx-1"
            onClick={() => {
              decrement(id);
              decreaseTotals(id);
            }}
          >
            -
          </button>
          <button className="btn btn-black mx-1">{count}</button>
          <button
            className="btn btn-black mx-1"
            onClick={() => {
              increment(id);
              addTotals(id);
            }}
          >
            +
          </button>
        </div>
      </div>
      {/* button div end */}
      <div className="col-10 col-lg-2 mx-auto">
        <div className="delete-icon p-1" onClick={() => removeItem(id)}>
          <i className="fa fa-trash " aria-hidden="true"></i>
        </div>
      </div>
      <div className="col-10 col-lg-2 mx-auto" style={{ fontSize: "1.2rem" }}>
        <strong>
          <span className="d-lg-none">Item total :</span>${total}
        </strong>
      </div>
    </div>
  );
};

export default CartItem;
