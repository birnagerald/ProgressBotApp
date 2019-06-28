import React from "react";

export const renderField = ({
  input,
  label,
  type,
  className,
  meta: { error }
}) => (
  <div className="form-group">
    {label !== null && label !== "" && <label>{label}</label>}
    {type === "text" && <input {...input} type={type} className={className} />}
    {type === "password" && (
      <input {...input} type={type} className={className} />
    )}
    {type === "number" && (
      <input {...input} type={type} className={className} />
    )}
    {type === "textarea" && <textarea {...input} className={className} />}
    {error && <small className="form-text text-danger">{error}</small>}
  </div>
);
