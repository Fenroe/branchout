import * as yup from "yup";

const loginFormValidationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("This field is required"),
  password: yup
    .string("Enter your password")
    .min(7, "Your password should contain at least 7 characters")
    .required("This field is required"),
});

export default loginFormValidationSchema;
