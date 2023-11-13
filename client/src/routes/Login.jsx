import React from "react";
import {
  Grid,
  Container,
  Box,
  Divider,
  Typography,
  TextField,
  Paper,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Signup } from "../components";
import { useFormik } from "formik";
import { loginFormValidationSchema } from "../schemas";
import { userAtom, isLoggedInAtom } from "../store";
import { useSetAtom } from "jotai";

const Login = () => {
  const isDesktop = useMediaQuery("(min-width:800px)");

  const setUser = useSetAtom(userAtom);
  const setIsLoggedIn = useSetAtom(isLoggedInAtom);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginFormValidationSchema,
    onSubmit: async (values) => {
      try {
        const res = await fetch("http://localhost:8080/api/users/login", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        })
        const data = await res.json();
        console.log(data);
        localStorage.setItem("token", data.token);
        setUser(data.user);
        setIsLoggedIn(true);
      } catch (err) {
        alert(err.message);
      }
    },
  });
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100vw", bgcolor: "#e8f6f1", minHeight: "100vh", maxWidth: "100%" }}
    >
      <Container maxWidth="md" sx={{ minWidth: 450 }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          gap="1rem"
          sx={{ flexDirection: isDesktop ? "row" : "column", p: 2 }}
        >
          <Box sx={{ flex: 1, width: "100%", maxWidth: 400 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                textAlign: isDesktop ? "left" : "center",
              }}
            >
              <Typography variant="h3" color="primary" sx={{ fontWeight: 700 }}>
                Branchout
              </Typography>
              <Typography variant="h5" sx={{ color: "#02100b" }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita dolore delectus facilis eligendi?
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box sx={{ flex: 1, width: "100%", maxWidth: 400 }}>
            <Paper
              elevation={2}
              sx={{
                bgcolor: "#ffffff",
                width: "100%",
              }}
            >
              <form
                onSubmit={formik.handleSubmit}
                style={{
                  flexDirection: "column",
                  display: "flex",
                  padding: "1rem",
                  gap: "1rem",
                }}
              >
                <TextField
                  name="email"
                  id="email"
                  placeholder="Email"
                  type="email"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && !!formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  name="password"
                  id="password"
                  placeholder="Password"
                  type="password"
                  variant="outlined"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.password && !!formik.errors.password
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Button variant="contained" disableRipple color="primary" type="submit">
                  Log In
                </Button>
              </form>
              <Divider />
              <Box
                sx={{
                  flexDirection: "column",
                  display: "flex",
                  p: "1rem",
                  gap: "1rem",
                }}
              >
                <Signup />
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Login;
