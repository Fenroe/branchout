import {
  Stack,
  Box,
} from "@mui/material";
import React from "react";
import SidebarSectionHeading from "./SidebarSectionHeading";
import FriendRequestCard from "./FriendRequestCard";

const FriendsRequestsContainer = () => {
  return (
    <Box>
      <SidebarSectionHeading count={3} heading="Friend Requests" />
      <Stack spacing={2}>
        <FriendRequestCard />
        <FriendRequestCard />
        <FriendRequestCard />
      </Stack>
    </Box>
  );
};

export default FriendsRequestsContainer;
