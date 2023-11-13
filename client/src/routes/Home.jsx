import React from "react";
import { isLoggedInAtom } from "../store";
import Feed from "./Feed";
import Login from "./Login";
import { useAtomValue } from "jotai";

const Home = () => {
  const isLoggedIn = useAtomValue(isLoggedInAtom);

  return (
    <>
      {isLoggedIn === null ? (
        <h1>Loading</h1>
      ) : isLoggedIn === true ? (
        <Feed />
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
