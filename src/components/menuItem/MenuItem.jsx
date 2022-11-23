const MenuItem = ({ icon, text, onClick, children }) => {
  return (
    <li className="flex flex-row items-center justify-start dark:text-white">
      <button onClick={onClick}>
        {icon}
        {text && <span className="text-sm ml-3">{text}</span>}
      </button>
      {children}
    </li>
  );
};

export default MenuItem;
