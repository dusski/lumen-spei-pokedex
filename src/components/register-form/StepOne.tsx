import React, { ChangeEventHandler, FormEvent, useState } from 'react'
import { Form, Card, Button } from 'react-bootstrap'
import validator from 'validator'

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({
  nextStep,
  handleFormData,
  values
}: {
  nextStep: () => void
  handleFormData: any
  values: any
}) => {
  //creating error state for validation
  const [error, setError] = useState<{
    firstName: boolean
    lastName: boolean
    email: boolean | string
  }>({
    firstName: false,
    lastName: false,
    email: false
  })

  // after form submit validating the form data using validator
  const submitFormData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName) ||
      validator.isEmpty(values.email)
    ) {
      setError({
        firstName: validator.isEmpty(values.firstName),
        lastName: validator.isEmpty(values.lastName),
        email: validator.isEmpty(values.email)
      })
      return
    }

    if (!validator.isEmail(values.email)) {
      setError((prev) => ({ ...prev, email: 'format' }))
      return
    }

    nextStep()
  }

  return (
    <div>
      <Form style={{ marginTop: 100 }} onSubmit={submitFormData}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            style={{ border: error.firstName ? '2px solid red' : '' }}
            name="firstName"
            defaultValue={values.firstName}
            type="text"
            placeholder="First Name"
            onChange={handleFormData('firstName')}
          />
          {error.firstName ? (
            <Form.Text style={{ color: 'red' }}>This is a required field</Form.Text>
          ) : (
            ''
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            style={{ border: error.lastName ? '2px solid red' : '' }}
            name="lastName"
            defaultValue={values.lastName}
            type="text"
            placeholder="Last Name"
            onChange={handleFormData('lastName')}
          />
          {error.lastName ? (
            <Form.Text style={{ color: 'red' }}>This is a required field</Form.Text>
          ) : (
            ''
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            style={{ border: error.email ? '2px solid red' : '' }}
            type="email"
            defaultValue={values.email}
            placeholder="email"
            onChange={handleFormData('email')}
          />
          {error.email === true ? (
            <Form.Text style={{ color: 'red' }}>This is a required field</Form.Text>
          ) : (
            ''
          )}
          {error.email === 'format' ? (
            <Form.Text style={{ color: 'red' }}>This is not a valid email address</Form.Text>
          ) : (
            ''
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Next
        </Button>
      </Form>
    </div>
  )
}

export default StepOne
