import Comment from "../comment/Comment";
import UserItem from "../userItem/UserItem";

const Comments = ({ comments }) => {
  return (
    <section>
      <form action="#" className="flex flex-row items-center justify-between mb-6 flex-wrap sm:flex-nowrap">
        <UserItem user={{image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"}} isOnline={true} />
        <textarea className="sm:flex-1 p-3 mx-2 mb-2 sm:mx-5 sm:mb-0 border-2 border-gray-400 dark:bg-secondary-bg-dark dark:text-white" rows="1"></textarea>
        <button className="p-2 text-white bg-primary-button" type="submit">Оправить</button>
      </form>
      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </section>
  );
};

export default Comments;
