import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Titulo from '../assets/titulo.png'

const Login = () => {
    return (

  <div className='container bg-dark p-5 mt-5 col-md-4'>
      <div className='row justify-content-center'>
        <img className='img-fluid p-3 col-md-12' src={Titulo} alt="" width="300" />
        <h1 className='text-center text-light mb-3'>Login</h1>
        <div className='col-md-12'>
          <Formik 
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field className='col-12 mb-2' type="email" name="email" placeHolder="Email"/>
                <ErrorMessage className='col-12 text-danger' name="email" component="div" />
                <Field className='col-12 mb-3' type="password" name="password" placeHolder="Password" />
                <ErrorMessage className='col-12 mt-2 text-danger' name="password" component="div" />
                <div className='row p-3'>
                  <button className='btn btn-warning col-12' type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
  </div>
);
}

export default Login
