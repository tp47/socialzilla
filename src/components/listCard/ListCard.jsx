const ListCard = ({ heading, children }) => {
  return (
    <section className="rounded-md bg-white p-2 w-full shadow-md">
      {heading && <h3 className="text-gray-500 text-sm">{heading}</h3>}
      <div className="py-3 flex flex-col gap-3">{children}</div>
    </section>
  );
};

export default ListCard;
