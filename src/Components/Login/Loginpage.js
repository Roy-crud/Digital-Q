import React from "react";
import { Formik, Form } from "formik";
import { Inputfield } from "./Inputfieldd";
import * as Yup from 'yup';
export const Login = () => {
    const validate = Yup.object({
       
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6,'Password must be at least 6 charaters')
          .required('Password is required'),
      })
    return (
        <div>
            <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                validationSchema={validate}
                onSubmit={values => {
                  console.log(values)
                }} >
                {formik => (
                    <div>
                        <h1 className="my-4 font-weight-bold-display-4">Login</h1>
                        <Form >
                            <Inputfield label="Email" name="email" type="email" />
                            <Inputfield label="Password" name="password" type="password" />
                            <button className="btn btn-dark mt-3" type="submit">Login</button>&nbsp;
                            <button className="btn btn-dark mt-3" type="reset">Reset</button>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}