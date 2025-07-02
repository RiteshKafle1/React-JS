import React from "react";

function Card(props) {
  return <div>
    I am {props.name}
    {props.children}
  </div>;
}

export default Card;
