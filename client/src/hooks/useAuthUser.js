import { useEffect } from "react";
import { userAtom, isLoggedInAtom } from "../store";
import { useSetAtom } from "jotai";

const useAuthUser = () => {
  const setUser = useSetAtom(userAtom);
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:8080/api/users/auth", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((result) => {
          return result.json();
        })
        .then((result) => {
          console.log(result);
          setUser(result.user);
          setIsLoggedIn(true);
        })
        .catch((error) => {
          alert(error);
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);
};

export default useAuthUser;
