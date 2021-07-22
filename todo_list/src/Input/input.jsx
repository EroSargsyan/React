import PropTypes from "prop-types";

export default function Input({ type, placeholder, value, labelName }) {
  return (
    <form>
      <label>
        {labelName}
        <input type={type} placeholder={placeholder} value={value} />
      </label>
    </form>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(["text", "submit"]).isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.oneOfType(["string", "number"]).isRequired,
  labelName: PropTypes.string.isRequired,
};
