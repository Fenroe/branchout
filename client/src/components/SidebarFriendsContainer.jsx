import {
  List,
  Stack,
  Box,
  Card,
} from "@mui/material";
import React from "react";
import { SidebarSectionHeading } from "../components";
import SidebarFriendCard from "./SidebarFriendCard";

const SidebarFriendsContainer = () => {
  return (
    <Box>
      <SidebarSectionHeading heading="Friends" />
      <Stack spacing={2}>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            borderRadius: "1rem",
          }}
        >
          <List sx={{ width: "100%" }}>
            <SidebarFriendCard />
            <SidebarFriendCard />
            <SidebarFriendCard />
            <SidebarFriendCard />
            <SidebarFriendCard />
          </List>
        </Card>
      </Stack>
    </Box>
  );
};

export default SidebarFriendsContainer;
