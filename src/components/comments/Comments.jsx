import Comment from "../comment/Comment";
import UserItem from "../userItem/UserItem";

const Comments = ({ comments }) => {
  return (
    <section>
      <form action="#">
        <UserItem user={{image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600", isOnline: true}} />
        <input type="text" />
        <button type="submit">Оправить</button>

      </form>


      {comments.map((comment) => (
        <Comment comment={comment} />
      ))}
    </section>
  );
};

export default Comments;
