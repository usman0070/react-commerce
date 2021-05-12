import Title from "./Title";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 m-auto text-center text-title">
          <Title name="your cart" title="is empty" />
        </div>
      </div>
    </div>
  );
}
