import React from "react";
import {ErrorMessage, useField } from "formik";

export const Inputfield = ({ label, ...props }) => {
    const [field] = useField(props)
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input className="form-control shadow-none"
                {...field}{...props}
                autoCapitalize="off" />
                  <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    )
}