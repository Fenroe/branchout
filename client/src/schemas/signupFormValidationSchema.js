import * as yup from "yup";

const signupFormValidationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .required("This field is required"),
  lastName: yup
    .string("Enter your last name")
    .required("This field is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("This field is required"),
  password: yup
    .string("Enter your password")
    .min(7, "Your password should contain at least 7 characters")
    .required("This field is required"),
  confirmPassword: yup
    .string("Confirm your password")
    // checks if value matches password
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default signupFormValidationSchema;
