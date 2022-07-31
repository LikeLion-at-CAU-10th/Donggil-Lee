import React from "react";
import { useLocation } from "react-router-dom";
const Detail = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <div>
      <div>{state.productname}</div>
      <div>{state.price}</div>
      <div>{state.description}</div>
    </div>
  );
};

export default Detail;
