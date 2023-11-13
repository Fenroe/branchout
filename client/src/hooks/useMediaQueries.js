import { useMediaQuery } from "@mui/material";

const useMediaQueries = () => {
  const isDesktop = useMediaQuery("(min-width:1200px)");
  const isTablet = useMediaQuery("(min-width:900px)");
  return {
    isDesktop,
    isTablet,
  };
};

export default useMediaQueries;