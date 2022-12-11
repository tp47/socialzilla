const MenuItem = ({ icon, text, onClick, children }) => {
  return (
    <li className="flex flex-row items-center justify-start dark:text-white">
      <button onClick={onClick} className="flex flex-row items-center justify-center">
        {icon}
        {text && <span className="hidden ml-3 text-sm sm:block">{text}</span>}
      </button>
      {children}
    </li>
  );
};

export default MenuItem;
