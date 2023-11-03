import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Divider,
} from "@mui/material";
import { useFormik } from "formik";
import { signupFormValidationSchema } from "../schemas";

const Signup = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signupFormValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <Button
        variant="contained"
        onClick={() => setModalIsOpen(true)}
        disableRipple
        color="secondary"
      >
        Create an account
      </Button>
      <Dialog open={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <DialogTitle sx={{ fontWeight: 700, color: "##02100b" }} variant="h4">
          Sign up
        </DialogTitle>
        <Divider />
        <DialogContent>
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <Grid container flexDirection="column" gap="1rem">
              <Grid container gap="1rem">
                <TextField
                  hiddenLabel
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  type="text"
                  variant="outlined"
                  sx={{ flex: 1, "& .MuiInputBase-input": { bgcolor: "#f0f0f0" }}}
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.firstName && !!formik.errors.firstName}
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
                <TextField
                  hiddenLabel
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  type="text"
                  variant="outlined"
                  sx={{ flex: 1, "& .MuiInputBase-input": { bgcolor: "#f0f0f0" }}}
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.lastName && !!formik.errors.lastName}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid container gap="1rem">
                <TextField
                  hiddenLabel
                  name="email"
                  id="email"
                  placeholder="Email"
                  type="email"
                  variant="outlined"
                  sx={{ flex: 1, "& .MuiInputBase-input": { bgcolor: "#f0f0f0" }}}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && !!formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid container gap="1rem">
                <TextField
                  hiddenLabel
                  name="password"
                  id="password"
                  placeholder="Password"
                  type="password"
                  variant="outlined"
                  sx={{ flex: 1, "& .MuiInputBase-input": { bgcolor: "#f0f0f0" }}}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && !!formik.errors.password}
                  helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid container gap="1rem">
                <TextField
                  hiddenLabel
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  variant="outlined"
                  sx={{ flex: 1, "& .MuiInputBase-input": { bgcolor: "#f0f0f0" }}}
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.confirmPassword &&
                    !!formik.errors.confirmPassword
                  }
                  helperText={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword
                  }
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              type="submit"
              disableRipple
              color="secondary"
            >
              Sign up
            </Button>
          </form>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
};

export default Signup;
