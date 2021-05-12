import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
const Default = (props) => {
  const { location } = props;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-uppercase text-title pt-5">
            <h1 className="display-3">404</h1>
            <h1>error</h1>
            <h2>page not found</h2>
            <h3>
              the requsted url <span className="text-danger">{location.pathname}</span> does not exist
            </h3>
            <Link to="/">
              <ButtonContainer>Go back</ButtonContainer>
            </Link>
            {/* auto push */}
            <div className="d-none">
              {setInterval(() => {
                props.history.push("/");
              }, 3000)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Default;
