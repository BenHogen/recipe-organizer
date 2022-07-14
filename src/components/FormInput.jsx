const FormInput = ({ label, onChange, ...props }) => {
  return (
    <div className="form-input">
      <label
        className="form-input__label"
        htmlFor={`input-${label}`}
        placeholder=" "
      >
        {label}
      </label>
      <br />
      <input
        className="box-input"
        type="text"
        name={`input-${label}`}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default FormInput;
