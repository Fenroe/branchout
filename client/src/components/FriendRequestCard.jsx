import {
  Typography,
  Box,
  Card,
  CardActions,
  Button,
  CardContent,
  IconButton,
} from "@mui/material";
import React from "react";
import UserAvatar from "./UserAvatar";
import CloseIcon from "@mui/icons-material/Close";

const FriendRequestCard = () => {
  return (
    <Card sx={{ borderRadius: "1rem" }}>
      <CardContent>
        <Box sx={{ display: "flex", gap: 2 }}>
          <UserAvatar size="medium" profilePicture="/it-is-me.png" />
          <Typography><span style={{ fontWeight: "700" }}>Billy Brapps</span> wants to be your friend</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button variant="contained" fullWidth>
          Accept
        </Button>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default FriendRequestCard;
