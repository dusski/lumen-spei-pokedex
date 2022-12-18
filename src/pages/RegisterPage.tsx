import Header from '../components/header/Header';
import RegisterForm from '../components/register-form/RegisterForm';

function RegisterPage() {
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