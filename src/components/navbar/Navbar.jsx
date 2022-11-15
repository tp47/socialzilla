import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import MenuItem from "../menuItem/MenuItem";
import Menu from "../menu/Menu";
import UserItem from "../userItem/UserItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center border-b h-16">
      <div className="flex flex-row items-center justify-start">
        <Link to="/">
          <h2 className="font-semibold text-xl text-sky-900 mx-3">
            Socialzilla
          </h2>
        </Link>
        <Menu direction="row">
          <MenuItem icon={<HomeOutlinedIcon />} />
          <MenuItem icon={<DarkModeOutlinedIcon />} />
        </Menu>
      </div>

      <div className="flex flex-row items-center justify-end">
        <Menu direction="row">
          <MenuItem icon={<PersonOutlinedIcon />} />
          <MenuItem icon={<EmailOutlinedIcon />} />
          <MenuItem icon={<NotificationsOutlinedIcon />} />
          <MenuItem>
            <UserItem
              user={{
                name: "John Doe",
                image:
                  "https://yt3.ggpht.com/ytc/AMLnZu9U1YR60O4hjCfJHtYSjlpRNJx07bOADEDb6X-d=s48-c-k-c0x00ffffff-no-rj",
                url: "/",
              }}
            ></UserItem>
          </MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
