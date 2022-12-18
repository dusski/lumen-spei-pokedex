import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header/Header';
import RegisterForm from '../components/register-form/RegisterForm';
import { AuthContext } from '../context/Auth.context';

function RegisterPage() {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (user.email) {
      navigate('/')
      return
    }
  })

  return (
    <>
      <Header></Header>
      <div className={'d-flex justify-content-center align-items-center '}>
        <RegisterForm></RegisterForm>
      </div>
    </>
  )
}

export default RegisterPage