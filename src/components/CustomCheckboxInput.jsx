import React from "react";

export const customCheckbox = ({
  input,
  name,
  id,
  label,
  type,
  className,
  meta: { error }
}) => (
  <div className="custom-control custom-checkbox">
    <input
      {...input}
      value="false"
      name={name}
      id={id}
      type={type}
      className={className}
    />

    <label className="custom-control-label" htmlFor={id}>
      {label}
    </label>

    {error && <small className="form-text text-danger">{error}</small>}
  </div>
);
