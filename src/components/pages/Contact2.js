// import React from "react";
// import "../../styles/Contact.css";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import { withFormik } from "formik";

// const Contact = (props) => {
//   // const [state, setState] = useState({
//   //   email: "",
//   //   name: "",
//   // });

//   // const useEmailValidation = (email) => {
//   //   if (!email || email.length === 0) {
//   //     return "Email cannot be empty";
//   //   }

//   //   const isEmailValid = /@/.test(email); // use any validator you want
//   //   if (!isEmailValid) {
//   //     return "Invalid email provided";
//   //   }

//   //   return null;
//   // };

//   // const isEmailValid = useEmailValidation(state.email);

//   // const handleChange = (e) => {
//   //   const { id, value } = e.target;
//   //   setState((prevState) => ({
//   //     ...prevState,
//   //     [id]: value,
//   //   }));
//   // };

//   const {
//     values,
//     touched,
//     errors,
//     isSubmitting,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//     handleReset,
//   } = props;

//   // <form onSubmit={handleSubmit}>
//   //   <label htmlFor="email" style={{ display: "block" }}>
//   //     Email
//   //   </label>
//   //   <input
//   //     id="email"
//   //     placeholder="Enter your email"
//   //     type="text"
//   //     value={values.email}
//   //     onChange={handleChange}
//   //     onBlur={handleBlur}
//   //     className={
//   //       errors.email && touched.email ? "text-input error" : "text-input"
//   //     }
//   //   />
//   //   {errors.email && touched.email && (
//   //     <div className="input-feedback">{errors.email}</div>
//   //   )}

//   //   <button
//   //     type="button"
//   //     className="outline"
//   //     onClick={handleReset}
//   //     disabled={!dirty || isSubmitting}
//   //   >
//   //     Reset
//   //   </button>
//   //   <button type="submit" disabled={isSubmitting}>
//   //     Submit
//   //   </button>

//   //   <DisplayFormikState {...props} />
//   // </form>;

//   const MyEnhancedForm = withFormik({
//     mapPropsToValues: () => ({ email: "" }),

//     // Custom sync validation
//     validate: (values) => {
//       let errors = {};
//       if (!values.email) {
//         errors.email = "Required";
//       } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//       ) {
//         errors.email = "Invalid email address";
//       }
//       return errors;
//     },

//     handleSubmit: (values, { setSubmitting }) => {
//       setTimeout(() => {
//         alert(JSON.stringify(values, null, 2));
//         setSubmitting(false);
//       }, 1000);
//     },

//     displayName: "BasicForm", // helps with React DevTools
//   })(Contact);

//   return (
//     <Container>
//       <Form className="mt-5" onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control size="lg" type="email" placeholder="Jane Doe" />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email Address</Form.Label>
//           <Form.Control
//             id="email"
//             size="lg"
//             placeholder="Enter your email"
//             type="text"
//             value={values.email}
//             onChange={handleChange}
//             onBlur={handleBlur}
//             className={
//               errors.email && touched.email ? "text-input error" : "text-input"
//             }
//           />
//           {errors.email && touched.email && (
//             <div className="input-feedback">{errors.email}</div>
//           )}
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Content</Form.Label>
//           <Form.Control size="lg" as="textarea" rows={3} />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//         {/* <DisplayFormikState {...props} /> */}
//       </Form>
//     </Container>
//   );
// };

// export default Contact;
