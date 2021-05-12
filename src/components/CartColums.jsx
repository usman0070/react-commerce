const CartColums = () => {
  return (
    <div className="container-fluid d-none d-lg-block">
      <div className="row text-center text-danger">
        <div className="col-10 col-lg-2 mx-auto">
          <h6 className="text-uppercase">Products</h6>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <h6 className="text-uppercase">name of product</h6>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <h6 className="text-uppercase">price</h6>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <h6 className="text-uppercase">quantity</h6>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <h6 className="text-uppercase">remove</h6>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <h6 className="text-uppercase">total</h6>
        </div>
      </div>
    </div>
  );
};

export default CartColums;
