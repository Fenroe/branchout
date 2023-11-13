import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import React from "react";
import { UserAvatar } from "../components";

const SidebarFriendCard = () => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemAvatar>
          <UserAvatar size="medium" />
        </ListItemAvatar>
        <ListItemText sx={{ fontWeight: "700" }}>David Slade</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarFriendCard;
