import React, { useState, Fragment, useEffect } from "react";
import { Formik, Field } from "formik";
import "./Summary.scss";
import * as yup from 'yup'

const initialState = {
  name: "",
  email: "",
  password: ""
};
const userSchema = yup.object().shape({
  name: yup.string().required("Name is Required."),
  email: yup
    .string()
    .email("Please Enter an valid Email")
    .required("Email is Required."),
  password: yup
    .string()
    .required("Password is Required.")
    .max(13,"Too long")
    .min(8,"Too short")
})
function MyComponent(props) {
  const [user, setUser] = useState(initialState);
  
  return (
    <Fragment>
      <Formik
        initialValues={user}
        onSubmit={(values, actions) => {
          console.log(actions);
          actions.setSubmitting(true);
          setUser(values);
          setTimeout(() => {
            actions.resetForm(initialState);
            actions.setSubmitting(false);
          }, 2000);
        }}
        validationSchema={userSchema}
      >
        {props => (
          <form onSubmit={props.handleSubmit} className="form">
            <Field
              type="email"
              placeholder="Enter email"
              onChange={props.handleChange}
              name="email"
              value={props.values.email}
              className="text_field"
            />
            {props.errors.email && props.touched.email ? (
              <span className="field_text">{props.errors.email}</span>
            ) : (
              ""
            )}
            <Field
              type="password"
              onChange={props.handleChange}
              name="password"
              value={props.values.password}
              placeholder="Password"
              className="text_field"
            />
            {props.errors.password && props.touched.password ? (
              <span className="field_text">{props.errors.password}</span>
            ) : (
              ""
            )}
            <Field
              name="name"
              onChange={props.handleChange}
              value={props.values.name}
              type="text"
              placeholder="Name"
              className="text_field"
            />
            {props.errors.name && props.touched.name ? (
              <span className="field_text">{props.errors.name}</span>
            ) : (
              ""
            )}
            <button
              type="submit"
              disabled={!props.dirty && !props.isSubmitting}
              className="button"
            >
              Submit
            </button>
            <button
              disabled={!props.dirty}
              onClick={props.handleReset}
              type="button"
              className="button"
            >
              Reset
            </button>
          </form>
        )}
      </Formik>
    </Fragment>
  );
}

export default MyComponent;