import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = { username: "", email: "", password: "" };

  const validationSchema = Yup.object({
    username: Yup.string().min(3, "Too short").required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    try {
      const response = await fetch("https://reqres.in/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Registration failed");

      const data = await response.json();
      setStatus(`User registered! Token: ${data.token}`);
    } catch (error) {
      setStatus("Registration failed. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Register (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <div>
              <Field type="text" name="username" placeholder="Username" />
              <ErrorMessage name="username" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            </div>

            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="p" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registering..." : "Register"}
            </button>

            {status && <p>{status}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
