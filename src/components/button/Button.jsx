const Button = ({ size, icon, text, onClick }) => {
  let sizeClasses;

  switch (size) {
    case "xs":
      sizeClasses = "text-xs px-1";
      break;
    case "md":
    default:
      sizeClasses = "text-md p-2 px-3";
      break;
  }
  return (
    <button
      className={sizeClasses + " bg-primary-button text-white flex items-center rounded-sm"}
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
