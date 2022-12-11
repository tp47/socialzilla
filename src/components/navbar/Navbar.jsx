import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import MenuItem from "../menuItem/MenuItem";
import Menu from "../menu/Menu";
import UserItem from "../userItem/UserItem";
import { useActions } from "../../hooks/actions/actions";

const Navbar = () => {
  const { toggleDarkMode } = useActions();
  const { isDarkMode } = useSelector((state) => state.darkMode);

  return (
    <nav className="flex flex-row justify-between items-center border-b dark:border-neutral-500 h-12 sm:h-16 bg-white dark:bg-primary-bg-dark">
      <div className="flex flex-row items-center justify-start">
        <Link to="/">
          <h2 className="font-semibold text-xl text-sky-900 mx-3 dark:text-white">
            Socialzilla
          </h2>
        </Link>
        <Menu direction="row">
          <MenuItem icon={<HomeOutlinedIcon />} />
          <MenuItem
            icon={
              isDarkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />
            }
            onClick={() => {
              toggleDarkMode();
            }}
          />
          <MenuItem>
            <span className="hidden sm:flex flex-row items-center border-gray-400 border rounded-full overflow-hidden pr-1">
              <input
                className="px-3 py-1 dark:text-neutral-300 dark:bg-primary-bg-dark"
                type="text"
                placeholder="Search..."
              />
              <button>
                <SearchIcon />
              </button>
            </span>
          </MenuItem>
        </Menu>
      </div>

      <div className="hidden sm:flex flex-row items-center justify-end">
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
