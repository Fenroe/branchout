import { Typography, Avatar, Box } from "@mui/material";
import React from "react";

const SidebarSectionHeading = ({ heading, count }) => {
  const formatCount = (value) => {
    if (value > 10) {
      return "10+";
    } else {
      return value;
    }
  };
  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="overline">{heading}</Typography>
      {count && (
        <Avatar
          sx={{
            height: 24,
            width: 24,
            fontSize: 12,
            bgcolor: "#a71a4d",
          }}
        >
          {formatCount(count)}
        </Avatar>
      )}
    </Box>
  );
};

export default SidebarSectionHeading;
