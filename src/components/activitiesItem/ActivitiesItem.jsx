import UserItem from "../userItem/UserItem";

const ActivitiesItem = ({ user, activity, time }) => {
  return (
    <div className={`flex flex-row items-center ${activity ? "justify-between" : "justify-start gap-1"}`}>
      <div className="flex flex-row items-center">
        <UserItem user={user} />
        {activity && <span className="text-sm ml-1 dark:text-white">{activity}</span>}
      </div>
      {time && <span className="text-sm dark:text-white">{time}</span>}
    </div>
  );
};

export default ActivitiesItem;
