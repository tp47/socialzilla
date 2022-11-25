import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ActivitiesItem from "../activitiesItem/ActivitiesItem";
import ShareIcon from '@mui/icons-material/Share';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import Menu from '../menu/Menu';
import MenuItem from '../menuItem/MenuItem';

const Post = ({ post }) => {
  return (
    <article className="w-full rounded-xl bg-white dark:bg-neutral-900 p-3 flex flex-col gap-3 shadow-md dark:shadow-none">
      <div className="flex flex-row items-center justify-between">
        <ActivitiesItem user={post.user} time={post.time} />
        <MenuItem icon={<MoreHorizIcon />} />
      </div>
      <div className="flex flex-col gap-2">
        <p className='dark:text-white'>{post.description}</p>
        {post.image && <img className='h-[400px] object-cover'src={post.image} alt={post.description} />}
      </div>
      <div className='flex flex-row items-center justify-start'>
        <Menu direction="row">
          <MenuItem icon={<FavoriteBorderIcon />} text="Нравиться"/>
          <MenuItem icon={<CommentOutlinedIcon />} text="Комментарии"/>
          <MenuItem icon={<ShareIcon />} text="Поделиться"/>
        </Menu>
      </div>
    </article>
  );
};

export default Post;
