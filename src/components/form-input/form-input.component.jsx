import "./form-input.styles.scss";

const FormInput = ({ label, ...othterProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...othterProps} />
      {label && (
        <label
          htmlFor="displayName"
          className={`${
            othterProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
