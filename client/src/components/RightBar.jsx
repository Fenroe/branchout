import { Stack } from "@mui/material";
import React from "react";
import FriendsRequestsContainer from "./FriendsRequestsContainer";
import SidebarFriendsContainer from "./SidebarFriendsContainer";

const RightBar = () => {
  return (
    <Stack spacing={2} sx={{ maxWidth: "280px", width: "100%" }}>
      <FriendsRequestsContainer />
      <SidebarFriendsContainer />
    </Stack>
  );
};

export default RightBar;
