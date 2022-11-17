import AddIcon from "@mui/icons-material/Add";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

import UserItem from "../userItem/UserItem";

const SuggestionItem = ({ user }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <UserItem user={user} />
      <div>
        <button className="text-sm bg-green-300 rounded-full px-2">
          <AddIcon />
        </button>
        <button className="text-sm bg-red-300 rounded-full px-2 ml-2">
          <ClearOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default SuggestionItem;
