import React, { useContext, useState } from 'react'
import { Form, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import { AuthContext } from '../../context/Auth.context'

// creating functional component ans getting props from app.js and destucturing them
const StepThree = ({ nextStep, handleFormData, prevStep, values }: any) => {
  //creating error state for validation
  const [error, setError] = useState(false)
  const { setUser } = useContext(AuthContext)
  const navigate = useNavigate()

  // after form submit validating the form data using validator
  const submitFormData = (e: any) => {
    e.preventDefault()

    // checking if value of first name and last name is empty show error else take to next step
    if (!values.agreeWithTOS) {
      setError(true)
    } else {
      setUser(values)
      navigate('/')
    }
  }
  return (
    <>
      <Form style={{ marginTop: 100 }} onSubmit={submitFormData}>
        <Form.Group className="mb-3">
          <Form.Check
            name="agreeWithTOS"
            type="checkbox"
            id="agreeWithTOS"
            label="Accept terms of service"
            style={{ border: error ? '2px solid red' : '' }}
            onChange={handleFormData('agreeWithTOS')}
          />
          {error ? <Form.Text style={{ color: 'red' }}>This is a required field</Form.Text> : ''}
        </Form.Group>
        <div>
          <Button variant="primary" type="submit">
            Finish
          </Button>
        </div>
      </Form>
    </>
  )
}

export default StepThree
