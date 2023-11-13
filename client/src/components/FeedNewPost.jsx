import {
  Grid,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { UserAvatar } from "../components";
import CreatePost from "./CreatePost";

const FeedNewPost = () => {
  const [createPostIsOpen, setCreatePostIsOpen] = useState(false);

  const openCreatePost = () => {
    setCreatePostIsOpen(true);
  };

  const closeCreatePost = () => {
    setCreatePostIsOpen(false);
  };

  return (
    <>
      <CreatePost open={createPostIsOpen} onClose={closeCreatePost} />
      <Paper sx={{ borderRadius: "1rem" }}>
        <Grid container sx={{ p: 2 }} gap="1rem" flexWrap="nowrap">
          <UserAvatar size="medium" />
          <Button
            onClick={openCreatePost}
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: "10rem",
              display: "flex",
              textTransform: "unset",
            }}
          >
            <Typography variant="body2">What's on your mind?</Typography>
          </Button>
        </Grid>
      </Paper>
    </>
  );
};

export default FeedNewPost;
