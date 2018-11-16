import React from 'react';
import CSS from '../../css/Input.module.css';

function Input(props) {
  return (
    <div className={CSS.InputContainer}>
      {props.label && (
        <label htmlFor={props.alt} className={CSS.label}>
          {props.label}
        </label>
      )}
      <input
        name={props.alt}
        className={`
          ${CSS.Input}
          ${props.fluid && CSS.fluid}
          ${props.error && CSS.error}
        `}
        {...props}
      />
      {props.error && (
        <label htmlFor={props.alt} className={`${CSS.label} ${CSS.error}`}>
          {props.error}
        </label>
      )}
    </div>
  );
}

export default Input;
