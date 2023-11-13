import {
    Grid,
    Paper,
    Stack,
    Button,
    Avatar,
    Box,
    Divider,
    Typography,
    IconButton,
    TextField,
  } from "@mui/material";
  import React from "react";
  import AddIcon from "@mui/icons-material/Add";
  import OptionsIcon from "@mui/icons-material/MoreHoriz";
  import CommentIcon from "@mui/icons-material/CommentOutlined";
  import LikeIcon from "@mui/icons-material/ThumbUpAltOutlined";

const AddComment = () => {
  return (
    <Stack sx={{ p: 2 }}>
      <Grid gap={2} container flexWrap="nowrap">
        <Avatar>DS</Avatar>
        <TextField variant="standard" multiline fullWidth hiddenLabel />
      </Grid>
      <Grid gap={2} container flexWrap="nowrap" justifyContent="end">
        <Button disabled>Send</Button>
      </Grid>
    </Stack>
  );
};

export default AddComment;
