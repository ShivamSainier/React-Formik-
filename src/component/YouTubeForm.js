import React from 'react'
import "./style.css"
import { Formik, Form, ErrorMessage, Field } from "formik"

function YouTubeForm() {
    const initialValues = {
        name: "",
        email: "",
        channel: "",
    }
    const onSubmit = values => {
        const newObj = {
            name: values.name,
            email: values.email,
            channel: values.channel
        }
    }
    const validate = values => {
        let errors = {}
        if (values.name == "") {
            errors.name = "Required"
        }
        if (values.email == "") {
            errors.email = "Required"
        }
        if (values.channel == "") {
            errors.channel = "Required"
        }
        return errors
    }
    return (
        <div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
                <h1>You Tube Form</h1>
                <div className="main_div">
                    <Form>
                        <label htmlFor="Name">Name</label>
                        <Field type="text" id="name" placeholder="Name" name="" />
                        <ErrorMessage name="name" />
                        <label htmlFor="Name">E-mail</label>
                        <Field type="email" id="email" placeholder="email" name="email" />
                        <ErrorMessage name="email" />
                        <label htmlFor="Name">Channel</label>
                        <Field type="text" id="channel" placeholder="channel" name="channel" />
                        <ErrorMessage name="channel" />
                        <button type="submit">Submit</button>
                    </Form>
                </div>
                
            </Formik>
        </div>
    )
}

export default YouTubeForm
