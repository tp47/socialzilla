const MenuItem = ({ icon, text, children }) => {
  return (
    <li className="flex flex-row items-center justify-start gap-2">
      {icon}
      {text && <span className="text-sm">{text}</span>}
      {children}
    </li>
  );
};

export default MenuItem;
