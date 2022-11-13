import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <Link to={user.url}>
      <div className="flex items-center gap-3">
        <img
          className="rounded-full h-9 w-9"
          src={user.photo}
          alt={user.name}
        />
        <span className="text-sm">{user.name}</span>
      </div>
    </Link>
  );
};

export default UserItem;
