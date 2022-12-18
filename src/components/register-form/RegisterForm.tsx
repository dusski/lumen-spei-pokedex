import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import StepOne from './StepOne'
import StepThree from './StepThree';
import StepTwo from './StepTwo'

function RegisterForm() {
  //state for steps
  const [step, setstep] = useState(1)

  //state for form data
  const [formData, setFormData] = useState({
    firstName: 'Dusan',
    lastName: 'Skiljevic',
    email: 'dusan@sk.com',
    password: 'ddd',
    confirmPassword: 'ddd',
    agreeWithTOS: true
  })

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1)
  }

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1)
  }

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input: string) => (e: any) => {
    // input value from the form
    const { value } = e.target

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value
    }))
  }

  const getStepForm = (step: number): JSX.Element => {
    return (
      {
        1: <StepOne nextStep={nextStep} handleFormData={handleInputData} values={formData} />,
        2: (
          <StepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        ),
        3: (
          <StepThree
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        )
      } as { [key: number]: JSX.Element }
    )[step]
  }

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="custom-margin">
            {step && getStepForm(step)}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RegisterForm
