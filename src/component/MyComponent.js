import React from 'react'
import "./style.css"
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from "formik"

function MyComponent() {
    const initialValues = {
        name: "",
        age: "",
        comments: "",
        location: "",
        newData: [""]
    }
    const onSubmit = values => {
    }
    const lastnameValidations = (value) => {
        let error;
        if (!value) {
            error = "Required Last Name"

        }
        return error;

    }
    const validate = values => {
        const errors = {}
        if (values.name == "") {
            errors.name = "Please enter a name"
        }
        if (values.age == "") {
            errors.age = "Please enter a age"
        }
        if (values.comments == "") {
            errors.comments = "Please enter a Comments"
        }
        return errors;
    }
    return (
        <div className="main_div">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate} >
                <Form>
                    <label>Name</label>
                    <FastField name="name" id="name">{
                        (msg) => {

                            return null
                        }
                    }</FastField>
                    <ErrorMessage name="name">{
                        (errormsg) => {
                            return (<div className="error_text"  >{errormsg}</div>);
                        }
                    }</ErrorMessage>
                    <label>Age</label>
                    <Field type="number" name="age" id="age" />
                    <ErrorMessage name="age">
                        {
                            (msg) => {
                                return (<div className="error_text">{msg}</div>)
                            }
                        }
                    </ErrorMessage>
                    <label>Comments</label>
                    <Field as="textarea" name="comments" id="comments" />
                    <ErrorMessage name="comments">
                        {
                            (msg) => {
                                return (<div className="error_text">{msg}</div>)
                            }
                        }</ErrorMessage>

                    <Field as="input" name="location"></Field>
                    <ErrorMessage name="location" />
                    <FieldArray name="newData">{
                        msg => {

                            const { push, remove, form } = msg;
                            const { values } = form;
                            const { newData } = values;

                            return (<div>
                                {
                                    newData.map((data, index) => (
                                        <div key={index}>
                                            <Field name={`data[${index}]`} />
                                            <button type="button" onClick={() => remove(index)}>-</button>
                                            <button type="button" onClick={() => push('')}>+</button>
                                        </div>
                                    ))
                                }
                            </div>)
                        }
                    }</FieldArray>
                    <Field as="input" name="lastname" placeholder="Last Name" validate={lastnameValidations} />
                    <ErrorMessage name="lastname">
                        {
                            (error) => {
                                console.log(error)
                                return(<div>{error}</div>)
                            }
                        }
                    </ErrorMessage>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>

        </div>
    )
}

export default MyComponent
