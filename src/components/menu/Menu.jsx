const Menu = ({ heading, separator, children, direction }) => {
  return (
    <>
      {separator && <hr className="w-4/6 m-auto" />}
      <ul className={`flex flex-${direction === 'row' ? 'row gap-6' : 'col gap-3'} p-3`}>
        {heading && <h4>{heading}</h4>}
        {children}
      </ul>
    </>
  );
};

export default Menu;
