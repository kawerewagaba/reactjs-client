import React from 'react';

const Button = (props) => {
  return (
    <button className={props.className}>
      {props.buttonText}
    </button>
  );
}

export default Button;
