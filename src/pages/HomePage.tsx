import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header/Header'

import { AuthContext } from '../context/Auth.context'

function HomePage() {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (!user.email) {
      navigate('/register')
      return
    }
  })


  return (
    <>
      <Header></Header>
      {/* <p>HomePage works!</p> */}
      {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
    </>
  )
}

export default HomePage

// {!!token ?
//  :
// <div>
//   {/* <Button className="btn btn-link">ASd</Button> */}
//   <Link className="btn btn-link" to={'/register'}>Register</Link>
//   <Link className="btn btn-link" to={'/login'}>Login</Link>
// </div>
// }
