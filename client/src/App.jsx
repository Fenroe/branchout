import React from "react";
import {
  Grid,
  Container,
  Box,
  Divider,
  Typography,
  FormControl,
  TextField,
  InputLabel,
  Paper,
  FormLabel,
  Input,
  Button,
} from "@mui/material";

const App = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100vw", bgcolor: "#f4fdf9", minHeight: "100vh" }}
    >
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" sx={{ color: "#24db8f", fontWeight: 700 }}>
              Branchout
            </Typography>
            <Typography variant="h5" sx={{ color: "#062218" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              dolore delectus facilis eligendi?
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ flex: 1 }}>
            <Paper
              elevation={2}
              sx={{
                flexDirection: "column",
                display: "flex",
                p: "1rem",
                gap: "1rem",
                maxWidth: 375,
                bgcolor: "#ffffff"
              }}
            >
              <TextField placeholder="Email" variant="outlined" />
              <TextField placeholder="Password" variant="outlined" />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#24db8f",
                  fontWeight: 700,
                  color: "#eefcf8",
                  "&:hover": { bgcolor: "#21ca92", color: "#eefcf8" },
                }}
              >
                Log In
              </Button>
              <Divider />
              <Button
                variant="contained"
                sx={{ bgcolor: "#DB2470", color: "#eefcf8", fontWeight: 700 }}
              >
                Create an account
              </Button>
            </Paper>
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
};

export default App;
