import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Card,
  ListItemIcon,
  ListItemAvatar,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import FriendsIcon from "@mui/icons-material/People";
import UserAvatar from "./UserAvatar";
import { useLocation } from "react-router";

const SidebarNav = () => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        borderRadius: "1rem",
      }}
    >
      <List sx={{ width: "100%" }}>
        <ListItem disablePadding>
          <ListItemButton  sx={{ borderLeft: "5px solid transparent" }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton  sx={{ borderLeft: "5px solid transparent" }}>
            <ListItemIcon>
              <FriendsIcon />
            </ListItemIcon>
            <ListItemText>Friends</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderLeft: "5px solid transparent" }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Clubs</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderLeft: "5px solid transparent" }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Meetups</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ borderLeft: "5px solid transparent" }}>
            <ListItemAvatar>
              <UserAvatar size="small" />
            </ListItemAvatar>
            <ListItemText>Profile</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Card>
  );
};

export default SidebarNav;
