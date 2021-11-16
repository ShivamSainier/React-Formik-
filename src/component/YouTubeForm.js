import React from 'react'
import "./style.css"
import { Formik, Form, ErrorMessage, Field, useFormik } from "formik"
import TextError from './TextError'

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

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    return (
        <div className="main_div">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate} >
                <Form>
                    <label htmlFor="Name">Name</label>
                    <Field
                        type="text"
                        id="name" placeholder="Name"
                        name="name" />
                    <ErrorMessage name="name" />
                    <label htmlFor="Name">E-mail</label>
                    <Field
                        type="email"
                        id="email"
                        placeholder="email"
                        name="email" />
                    <ErrorMessage name="email" />
                    <label htmlFor="Name">Channel</label>
                    <Field type="text" id="channel" placeholder="channel" name="channel" />
                    <ErrorMessage name="channel" component={TextError} />
                    <Field as="h1" name="address">{
                        props => {
                            const { field, form } = props;
                            console.log(field)
                            console.log(form)
                            return (
                                <div>
                                    <input type="text"></input>
                                </div>
                            )
                        }
                    }
                    </Field>

                    <button type="submit">Submit</button>
                </Form>

            </Formik>
        </div>
    )
}

export default YouTubeForm
