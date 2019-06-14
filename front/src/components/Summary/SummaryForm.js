import React, { useState } from 'react'
import { Formik, Field } from 'formik'
import * as yup from 'yup'
import "./Summary.scss"
import { connect } from 'react-redux'
import axios from "axios"
import { Redirect } from 'react-router-dom'
const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  address: "",
  city: "",
  zip_code: "",
}

const phoneRegExp = /(?:[^\d]|^)(\d{3}\-\d{3}-\d{3})(?:[^\d]|$)/
const zip_codeRegExp = /(?:[^\d]|^)(\d{2}\-\d{3})(?:[^\d]|$)/
const userSchema = yup.object().shape({
  first_name: yup.string().required("Podaj Imie").min(3, "Za krotkie"),
  last_name: yup.string().required("Podaj Nazwisko").min(2, "Za krotkie"),
  email: yup.string().email("Podaj poprawny emial").required("Podaj Email"),
  phone_number: yup.string().matches(phoneRegExp, "Zly number telefonu "),
  address: yup.string().required("Podaj adres").min(6, "Zly adres"),
  city: yup.string().min(3, "Zle miasto").required("Podaj swoje miasto"),
  zip_code: yup.string().matches(zip_codeRegExp, "Zly kod pocztowy"),


})

const SummaryForm = (props) => {
  const [user, setUser] = useState(initialState)
  let checkIfOrderIsEmpty = null
  if(props.cartList.length < 1 ){
    checkIfOrderIsEmpty = <Redirect to ="/"/>
  }

  return (
    <>
    {checkIfOrderIsEmpty}
    <Formik
      initialValues={user}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true)
        const updatedValues = { ...values, order: props.cartList }
        console.log(updatedValues)
        axios.post("http://localhost:3001/api/order", updatedValues).then(res => {
          console.log(res)
          actions.setSubmitting(false)
        })
      }}
    >
      {props => (
        <div className=" container mx-auto  mt-5 pt-5">
          <form onSubmit={props.handleSubmit}>
            <div className="form-group">
              <Field
                type="text"
                name="first_name"
                placeholder="Wprowadz swoje imie"
                onChange={props.handleChange}
                value={props.values.first_name}
                className="form-control text-center"
              />
              {props.errors.first_name && props.touched.first_name ? (
                <span className="field_text">{props.errors.first_name}</span>
              ) : ("")}
              <div className="form-group mt-3">
                <Field
                  type="text"
                  name="last_name"
                  placeholder="Wprowadz swoje nazwisko"
                  onChange={props.handleChange}
                  value={props.values.last_name}
                  className="form-control text-center"
                />
                {props.errors.last_name && props.touched.last_name ? (
                  <span className="field_text">{props.errors.last_name}</span>
                ) : ("")}
              </div>
              <div className="form-group mt-3">
                <Field
                  type="email"
                  name="email"
                  placeholder="Wprowadz swoj email"
                  onChange={props.handleChange}
                  value={props.values.email}
                  className="form-control text-center"
                />
                {props.errors.email && props.touched.email ? (
                  <span className="field_text">{props.errors.email}</span>
                ) : ("")}
              </div>
              <div className="form-group mt-2">
                <Field
                  type="text"
                  name="phone_number"
                  placeholder="Wprowadz swoj numer telefonu"
                  onChange={props.handleChange}
                  value={props.values.phone_number}
                  className="form-control text-center"
                />
                {props.errors.phone_number && props.touched.phone_number ? (
                  <span className="field_text">{props.errors.phone_number}</span>
                ) : ("")}
              </div>
              <div className="form-group mt-2">
                <Field
                  type="text"
                  name="address"
                  placeholder="Wprowadz swoj adres"
                  onChange={props.handleChange}
                  value={props.values.address}
                  className="form-control text-center"
                />
                {props.errors.address && props.touched.address ? (
                  <span className="field_text">{props.errors.address}</span>
                ) : ("")}
              </div>
              <div className="form-group mt-2">
                <Field
                  type="text"
                  name="city"
                  placeholder="Wprowadz swoje miasto"
                  onChange={props.handleChange}
                  value={props.values.city}
                  className="form-control text-center"
                />
                {props.errors.city && props.touched.city ? (
                  <span className="field_text">{props.errors.city}</span>
                ) : ("")}
              </div>
              <div className="form-group mt-2">
                <Field
                  type="text"
                  name="zip_code"
                  placeholder="Wprowadz swoj kod pocztowy"
                  onChange={props.handleChange}
                  value={props.values.zip_code}
                  className="form-control text-center"
                />
                {props.errors.zip_code && props.touched.zip_code ? (
                  <span className="field_text">{props.errors.zip_code}</span>
                ) : ("")}
              </div>
              <button
                type="submit"
                disabled={!props.dirty && !props.isSubmitting}
                className="btn btn-primary mt-3"
              >
                Submit
            </button>
              <button
                disabled={!props.dirty}
                onClick={props.handleReset}
                type="button"
                className="btn btn-danger ml-2 mt-3"
              >
                Reset
            </button>
            </div>
          </form>
        </div>
      )}
    </Formik>
    </>

  )
}
const mapStateToProps = (state) => {
  return {
    cartList: state.products.cart,
  }
}

export default connect(mapStateToProps)(SummaryForm)


