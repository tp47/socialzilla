import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";

import MenuItem from "../menuItem/MenuItem";
import Menu from "../menu/Menu";
import UserItem from "../userItem/UserItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center border-b h-16 bg-white">
      <div className="flex flex-row items-center justify-start">
        <Link to="/">
          <h2 className="font-semibold text-xl text-sky-900 mx-3">
            Socialzilla
          </h2>
        </Link>
        <Menu direction="row">
          <MenuItem icon={<HomeOutlinedIcon />} />
          <MenuItem icon={<DarkModeOutlinedIcon />} />
          <MenuItem>
            <span className="flex flex-row items-center border-gray-400 border rounded-full overflow-hidden pr-1">
              <input className="px-3 py-1" type="text" placeholder="Search..."/>
              <button>
                <SearchIcon />
              </button>
            </span>
          </MenuItem>
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
