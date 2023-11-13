import {
  Typography,
  Card,
  CardActions,
  Button,
  IconButton,
  CardMedia,
  CardContent,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const MeetupCard = () => {
  return (
    <Card sx={{ borderRadius: "1rem" }}>
      <CardMedia>
        <img src="/default-event.png" alt="" style={{ maxWidth: "100%" }} />
      </CardMedia>
      <CardContent>
        <Typography variant="overline">SAT, NOV 18 AT 6 PM</Typography>
        <Typography sx={{ fontWeight: 700 }}>The Pilot Episode</Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", gap: 1 }}>
        <Button variant="contained" fullWidth>
          I'm interested
        </Button>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default MeetupCard;
