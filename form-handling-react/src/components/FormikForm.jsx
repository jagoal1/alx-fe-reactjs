import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Mock API simulation
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("User registered successfully!");
        resetForm();
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      <Form className="p-4 border rounded-md w-80 mx-auto mt-10">
        <h2 className="text-xl font-bold mb-4">Register with Formik</h2>

        <div className="mb-2">
          <Field name="username" placeholder="Username" className="border p-2 w-full rounded" />
          <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />
        </div>

        <div className="mb-2">
          <Field type="email" name="email" placeholder="Email" className="border p-2 w-full rounded" />
          <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
        </div>

        <div className="mb-4">
          <Field type="password" name="password" placeholder="Password" className="border p-2 w-full rounded" />
          <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />
        </div>

        <button type="submit" className="bg-green-500 text-white p-2 w-full rounded">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
