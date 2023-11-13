import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { isLoggedInAtom } from "../store";
import { useAtomValue } from "jotai";
import { useMediaQueries } from "../hooks";
import { BottomBar, LeftBar, RightBar, TopBar } from "../components";

const Root = () => {
  const isLoggedIn = useAtomValue(isLoggedInAtom);

  const { isTablet, isDesktop } = useMediaQueries();

  return (
    <>
      {isLoggedIn === true && <TopBar />}
      <main
        style={{
          display: "flex",
          justifyCOntent: "space-between",
          backgroundColor: "#ebebeb",
          padding: "1rem",
          gap: "2rem"
        }}
      >
        {isLoggedIn === true && isTablet && <LeftBar />}
        <Outlet />
        {isLoggedIn === true && isDesktop && <RightBar />}
      </main>
      {isLoggedIn === true && !isTablet && <BottomBar />}
    </>
  );
};

export default Root;
