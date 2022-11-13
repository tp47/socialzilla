const Menu = ({ heading, separator, children }) => {
  return (
    <>
      {separator && <hr className="w-4/6 m-auto"/>}
      <ul className="flex flex-col gap-3 p-3">
        {heading && <h4>{heading}</h4>}
        {children}
      </ul>
    </>
  );
};

export default Menu;
