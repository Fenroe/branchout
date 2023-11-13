import {
    Typography,
    Box,
    Card,
  } from "@mui/material";
  import React from "react";
  import UserAvatar from "./UserAvatar";

const UserPin = () => {
  return (
    <Card
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
        borderRadius: "1rem",
      }}
    >
      <UserAvatar size="medium" />
      <Box>
        <Typography sx={{ fontWeight: 700 }}>David Slade</Typography>
      </Box>
    </Card>
  );
};

export default UserPin;
