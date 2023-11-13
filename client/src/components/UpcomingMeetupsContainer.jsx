import { Stack, Box } from "@mui/material";
import React from "react";
import { SidebarSectionHeading } from "../components";
import MeetupCard from "./MeetupCard";

const UpcomingMeetupsContainer = () => {
  return (
    <Box>
      <SidebarSectionHeading heading="Upcoming Meetups" count={2} />
      <Stack spacing={2}>
        <MeetupCard />
        <MeetupCard />
      </Stack>
    </Box>
  );
};

export default UpcomingMeetupsContainer;
