import PropTypes from "prop-types";

const LoginInput = ({ placeholder, type, register }) => {
  return (
    <input
      {...register}
      className="px-3 py-3 border-b-2 border-b-gray-300"
      type={type}
      placeholder={placeholder}
    />
  );
};

LoginInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.object,
};

LoginInput.defaultProps = {
  placeholder: "",
  type: "text",
  register: {},
};

export default LoginInput;
