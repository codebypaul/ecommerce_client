import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import {Navbar} from 'react-bootstrap'

export default class NavigationBar extends Component {
  render() {
    return (
      <Nav>
        <Navbar className='d-flex flex-column'>
          <div className="row m-0">
            <Navbar.Brand href="/" className='brand'>eCommerce Store</Navbar.Brand>
          </div>
          <div className="row m-0 w-100 d-flex justify-content-around">
            <Link to='/products'>New!</Link>
            <Link to='/products'>Products</Link>
            <Link to="/cart" className="cart">
              <ButtonContainer>
                <span className="mr-2">
                  <i className="fas fa-cart-plus " />
                </span>
                my cart
              </ButtonContainer>
            </Link>
          </div>
        </Navbar>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainBlue);
  .brand {
    font-size: 4rem;
  }
  .cart {
    position: absolute;
    top: .5rem;
    right: .5rem;
  }
`;

// const ButtonContainer = styled.button`
//   text-transform: capitalize;
// font - size: 1.4rem;
// background: transparent;
// border: 0.05rem solid var(--lightBlue);
// border - radius: 0.5rem;
// padding: 0.2rem 0.5rem;
// outline - color: red;
// cursor: pointer;
// display: inline - block;
// margin: 0.2rem 0.5rem 0.2rem 0;
// transition: all 0.5s ease -in -out;
//   &: hover {
//   background: var(--lightBlue);
//   color: var(--mainBlue);
// }
// `;