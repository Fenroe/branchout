import { Stack } from "@mui/material";
import React from "react";
import UserPin from "./UserPin";
import SidebarNav from "./SidebarNav";
import UpcomingMeetupsContainer from "./UpcomingMeetupsContainer";

const LeftBar = () => {
  return (
    <Stack
      spacing={2}
      sx={{ maxWidth: "280px", width: "100%" }}
    >
      <UserPin />
      <SidebarNav />
      <UpcomingMeetupsContainer />
    </Stack>
  );
};

export default LeftBar;
