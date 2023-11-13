import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Avatar,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Inbox";
import FriendsIcon from "@mui/icons-material/People";
import UserAvatar from "./UserAvatar";

const BottomBar = () => {
  return (
    <Paper sx={{ bottom: 0, position: "sticky" }} elevation={3}>
      <BottomNavigation>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Friends" icon={<FriendsIcon />} />
        <BottomNavigationAction label="Messages" icon={<MessageIcon />} />
        <BottomNavigationAction
          label="Profile"
          icon={
            <UserAvatar size="small" />
          }
        />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomBar;
