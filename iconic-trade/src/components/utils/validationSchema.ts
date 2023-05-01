import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(3, "Must be 50 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(3, "Must be 50 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

export default validationSchema;
