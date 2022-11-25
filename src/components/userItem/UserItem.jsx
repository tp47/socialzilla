import { Link } from "react-router-dom";

const UserItem = ({ user, isOnline }) => {
  return (
    <Link to={user.url}>
      <div className={`flex items-center gap-3 ${isOnline ? "relative before:block before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-green-500 before:absolute before:left-6 before:top-6" : ""}`}>
        <img
          className="rounded-full h-9 w-9 object-cover"
          src={user.image}
          alt={user.name}
        />
        <span className="text-sm dark:text-white font-bold">{user.name}</span>
      </div>
    </Link>
  );
};

export default UserItem;
