import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/header/Header'

import { AuthContext } from '../context/Auth.context'
import PokemonList from '../components/pokemon-list/PokemonList'

function HomePage() {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  // for search - not implemented
  const [input, setInput] = useState('')

  useEffect(() => {
    if (!user.email) {
      navigate('/register')
      return
    }
  })

  return (
    <>
      <Header></Header>
      <PokemonList></PokemonList>
    </>
  )
}

export default HomePage
