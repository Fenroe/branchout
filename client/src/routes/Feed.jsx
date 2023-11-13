import {
  Grid,
  Fab,
  Stack,
  Container,
  Box,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { FeedNewPost, PostThread } from "../components";
import { useMediaQueries } from "../hooks";

const Feed = () => {
  const { isTablet } = useMediaQueries();

  return (
    <Grid
      container
      sx={{ minHeight: "100vh", flexDirection: "column", position: "relative" }}
    >
      <Container disableGutters maxWidth="sm">
        <Stack spacing={1}>
          <FeedNewPost />
          <Box sx={{ width: "100%" }}>
            <Stack spacing={2} sx={{ py: 2 }}>
              <PostThread />
              <PostThread />
              <PostThread />
            </Stack>
          </Box>
        </Stack>
      </Container>
      {isTablet === false && (
        <Fab
          sx={{
            position: "fixed",
            bottom: 70,
            right: 20,
            bgcolor: "#3dbe80",
            color: "#abffcf",
          }}
        >
          <AddIcon />
        </Fab>
      )}
    </Grid>
  );
};

export default Feed;
