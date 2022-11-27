import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ActivitiesItem from "../activitiesItem/ActivitiesItem";
import ShareIcon from "@mui/icons-material/Share";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import Menu from "../menu/Menu";
import MenuItem from "../menuItem/MenuItem";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
  const [isCommentOpen, setIsCommentOpen] = useState(false);

  return (
    <article className="flex flex-col w-full p-3 bg-white shadow-md sm:rounded-xl dark:bg-primary-bg-dark gap-3 dark:shadow-none">
      <div className="flex flex-row items-center justify-between">
        <ActivitiesItem user={post.user} time={post.time} />
        <MenuItem icon={<MoreHorizIcon />} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="dark:text-white">{post.description}</p>
        {post.image && (
          <img
            className="h-[400px] object-cover"
            src={post.image}
            alt={post.description}
          />
        )}
      </div>
      <div className="flex flex-row items-center justify-start">
        <Menu direction="row">
          <MenuItem icon={<FavoriteBorderIcon />} text="Нравиться" />
          <MenuItem
            icon={<CommentOutlinedIcon />}
            text="Комментарии"
            onClick={() => setIsCommentOpen(!isCommentOpen)}
          />
          <MenuItem icon={<ShareIcon />} text="Поделиться" />
        </Menu>
      </div>
      {post.comments && isCommentOpen && <Comments comments={post.comments} />}
    </article>
  );
};

export default Post;
