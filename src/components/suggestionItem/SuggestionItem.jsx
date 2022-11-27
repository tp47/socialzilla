import AddIcon from "@mui/icons-material/Add";

import UserItem from "../userItem/UserItem";

const SuggestionItem = ({ user }) => {
  return (
    <div className="flex flex-col items-start justify-between">
      <UserItem user={user} />
        <button className="flex items-center ml-12 text-xs bg-primary-button px-1 text-white">
          <AddIcon fontSize="small" />
          <span>Подписатсья</span>
        </button>
    </div>
  );
};

export default SuggestionItem;
