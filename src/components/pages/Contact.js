import React from "react";
import { withFormik } from "formik";
import "../../styles/Contact.css";

const MyForm = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" style={{ display: "block" }}>
        Name
      </label>
      <input
        id="name"
        placeholder="Jane Doe"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.name && touched.name ? "text-input error" : "text-input"
        }
      />
      {errors.name && touched.name && (
        <div className="input-feedback">{errors.name}</div>
      )}

      <label htmlFor="email" style={{ display: "block" }}>
        Email
      </label>
      <input
        id="email"
        placeholder="email@email.com"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.email && touched.email ? "text-input error" : "text-input"
        }
      />
      {errors.email && touched.email && (
        <div className="input-feedback">{errors.email}</div>
      )}

      <label
        htmlFor="message"
        style={{ display: "block", width: "100%", height: "100%" }}
      >
        Message
      </label>
      <textarea
        id="message"
        type="text"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.message && touched.message ? "text-input error" : "text-input"
        }
      />
      {errors.message && touched.message && (
        <div className="input-feedback">{errors.message}</div>
      )}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export const Contact = withFormik({
  mapPropsToValues: () => ({ email: "" }),

  // Custom sync validation
  validate: (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.message) {
      errors.message = "Required";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm", // helps with React DevTools
})(MyForm);
