import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

import Menu from "../menu/Menu";
import MenuItem from "../menuItem/MenuItem";

const Leftbar = () => {
  return (
    <section className="flex flex-col flex-initial w-1/6 sticky top-16 h-[100vh-64px]">
      <Menu>
        <MenuItem icon={<PersonOutlinedIcon />} text="Моя страница" />
        <MenuItem icon={<ChatOutlinedIcon />} text="Сообщения" />
        <MenuItem icon={<ArticleOutlinedIcon />} text="Новости" />
        <MenuItem icon={<GroupOutlinedIcon />} text="Друзья" />
        <MenuItem icon={<GroupsOutlinedIcon />} text="Сообщества" />
      </Menu>
    </section>
  );
};

export default Leftbar;
