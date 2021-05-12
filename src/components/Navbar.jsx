import React from "react";
import { Link } from "react-router-dom";
import StoreIcon from "@material-ui/icons/Store";
import { ButtonContainer } from "./Button";
import styled from "styled-components";
const Navbar = () => {
  return (
    <NavWrapper className="navbar align-items-centernavbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        {/* <img src={StoreIcon} alt="store" className="navbar-brand" /> */}
        <StoreIcon style={{ color: "black" }} />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    text-transform: capitalize;
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
  }
`;

export default Navbar;
