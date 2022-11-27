import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { memo } from "react";

import Menu from "../menu/Menu";
import MenuItem from "../menuItem/MenuItem";

const Leftbar = () => {
  return (
    <section className="hidden sm:flex flex-col flex-initial w-1/6 sticky top-16 h-[calc(100vh-64px)] dark:bg-neutral-900">
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

export default memo(Leftbar);
