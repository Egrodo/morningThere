import React from 'react';
import CSS from '../../css/reusables/Input.module.css';

function Input(props) {
  return (
    <div className={CSS.InputContainer}>
      {props.label && (
        <label htmlFor={props.alt} className={CSS.label}>
          {props.label}
        </label>
      )}
      <input
        {...props}
        name={props.alt}
        className={`
          ${CSS.Input}
          ${props.classes ? props.classes : ''}
          ${props.fluid ? CSS.fluid : ''}
          ${props.error && CSS.error}
        `}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
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