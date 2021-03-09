import React from "react";
import styled from 'styled-components'

export default function EmptyCart() {
  return (
    <EmptyCartCont>
      <div className="row mt-5">
        <div className="col-10 mx-auto text-center text-title text-capitalize">
          <h1>your cart is currently empty</h1>
        </div>
      </div>
    </EmptyCartCont>
  );
}

const EmptyCartCont = styled.div`
  height: 80vh;
`