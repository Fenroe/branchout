import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  TextField,
  Container,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { UserAvatar } from "../components";
import { useMediaQueries } from "../hooks";

const TopBar = () => {
  const { isTablet } = useMediaQueries();
  return (
    <AppBar position="sticky" sx={{ top: 0, bgcolor: "#fcfcfc" }} elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          <img
            src="/branchout-logo.svg"
            alt="Branchout"
            style={{ height: "24px", width: "24px" }}
          />
          <Typography
            variant="h6"
            component="div"
            color="primary"
            sx={{ flexGrow: 1, fontWeight: 700 }}
          >
            branchout
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          {isTablet ? (
            <form
              style={{
                backgroundColor: "#ebebeb",
                borderRadius: "2rem",
                paddingRight: "2rem",
              }}
            >
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
              <TextField
                id="search-bar"
                className="text"
                color="#ebebeb"
                hiddenLabel
                variant="filled"
                placeholder="Search..."
                size="small"
                InputProps={{ disableUnderline: true }}
                sx={{
                  "& .MuiFilledInput-root": {
                    bgcolor: "inherit",
                    "&:hover": {
                      bgcolor: "inherit",
                    },
                    "&:focus": {
                      bgcolor: "inherit",
                    },
                    "&:focus-within": {
                      bgcolor: "inherit",
                    },
                  },
                }}
              />
            </form>
          ) : (
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          )}
          <UserAvatar size="medium" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
