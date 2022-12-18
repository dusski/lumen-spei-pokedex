import React, { ChangeEvent, useState } from 'react'
import { Form, Card, Button } from 'react-bootstrap'
import validator from 'validator'

// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }: any) => {
  //creating error state for validation
  const [error, setError] = useState<{ password: boolean; confirmPassword: boolean | string }>({
    password: false,
    confirmPassword: false
  })
  const [input, setInput] = useState({ password: '', confirmPassword: '' })

  // after form submit validating the form data using validator
  const submitFormData = (e: any) => {
    e.preventDefault()

    if (values.password !== values.confirmPassword) {
      setError((prev) => ({
        ...prev,
        confirmPassword: 'not-same'
      }))
      return
    }

    // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.password) || validator.isEmpty(values.confirmPassword)) {
      setError(() => ({
        password: validator.isEmpty(values.password),
        confirmPassword: validator.isEmpty(values.confirmPassword)
      }))
      return
    }

    nextStep()
  }

  return (
    <>
      <Form style={{ marginTop: 100 }} onSubmit={submitFormData}>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            style={{ border: error.password ? '2px solid red' : '' }}
            type="password"
            placeholder="Password"
            onChange={handleFormData('password')}
          />
          {error.password ? (
            <Form.Text style={{ color: 'red' }}>This is a required field</Form.Text>
          ) : (
            ''
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Repeat password</Form.Label>
          <Form.Control
            name="confirmPassword"
            style={{ border: error.confirmPassword ? '2px solid red' : '' }}
            type="password"
            placeholder="Password"
            onChange={handleFormData('confirmPassword')}
          />
          {error.confirmPassword === true ? (
            <Form.Text style={{ color: 'red' }}>This is a required field</Form.Text>
          ) : (
            ''
          )}
          {error.confirmPassword === 'not-same' ? (
            <Form.Text style={{ color: 'red' }}>The passwords do not match, try again</Form.Text>
          ) : (
            ''
          )}
        </Form.Group>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Button variant="primary" onClick={prevStep}>
            Previous
          </Button>

          <Button variant="primary" type="submit">
            Next
          </Button>
        </div>
      </Form>
    </>
  )
}

export default StepTwo
