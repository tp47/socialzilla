import ActivitiesItem from "../activitiesItem/ActivitiesItem";

const Comment = ({ comment }) => {
  return (
    <article className="flex flex-col">
      <ActivitiesItem user={comment.user} time={comment.time} />
      <p className="px-12 py-1 dark:text-white">{comment.text}</p>
    </article>
  );
};

export default Comment;
