import UserItem from "../userItem/UserItem";

const ActivitiesItem = ({ user, activity, time }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        <UserItem user={user} />
        {activity && <span className="text-sm ml-1">{activity}</span>}
      </div>
      {time && <span className="text-sm">{time}</span>}
    </div>
  );
};

export default ActivitiesItem;
