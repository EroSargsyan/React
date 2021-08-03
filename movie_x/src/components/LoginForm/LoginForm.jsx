import React from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import * as Yup from "yup";

export default function LoginForm() {
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required")
        .matches(
          /^(?=[a-z_\d]*[a-z])[a-z_\d]{6,}$/,
          "Username must contain at least one letter and  6 characters "
        ),
      password: Yup.string()

        .required("Please enter your password")
        .matches(
          /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        ),
    }),

    onSubmit: (values) => {
      window.localStorage.setItem("auth", JSON.stringify(formik.values));
      history.push("/movies");
    },
  });
  return (
    <div className="flex  justify-center">
      <div className="w-full max-w-md ">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4"
        >
          <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
            Login
          </div>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-gray-700 text-sm font-normal mb-2"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-600">{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-normal mb-2"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-600">{formik.errors.password}</div>
            ) : null}
          </div>
          <div className="flex items-center justify-center ">
            <button
              type="submit"
              className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 self-end"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
