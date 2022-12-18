import { useCallback, useState } from 'react'
import pokemonApi from '../services/pokemonApi'
import { AxiosError } from 'axios'

const usePokemonFetch = () => {
  const [pokemonList, setPokemonList] = useState<any[]>([])
  const [pokemon, setPokemon] = useState<any>(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState<boolean | null>(null)
  const [loadingSingle, setLoadingSingle] = useState<boolean | null>(null)
  const pokemonNumbers = 50
  const [pokemonOffset, setPokemonOffset] = useState(pokemonNumbers)

  const handlePokemonList = useCallback(async (offset: number = 0) => {
    let response
    let pokemon
    try {
      setError(null)
      setLoading(true)
      response = await pokemonApi.get('/pokemon/', {
        params: {
          limit: pokemonNumbers,
          offset
        }
      })

      const results = response.data.results
      setPokemonList(results)
    } catch (err: any) {
      pokemon = null
      setError(err.message)
    } finally {
      setLoading(false)
      return { response, pokemon }
    }
  }, [])

  const fetchMorePokemons = useCallback(async (offset: number = 0) => {
    setLoading(true)
    let res
    let results: any
    try {
      res = await pokemonApi.get('/pokemon/', {
        params: {
          limit: pokemonNumbers,
          offset
        }
      })

      results = res.data.results
      setPokemonList((poke) => [...poke, ...results])
      setPokemonOffset((offset) => offset + pokemonNumbers)
    } catch (err: any) {
      results = null
      setError(err.message)
    } finally {
      setLoading(false)
      return { res, results }
    }
  }, [])

  const getPokemonById = useCallback(async (pokemonId: number) => {
    setLoadingSingle(true)
    try {
      const response = await pokemonApi.get(`/pokemon/${pokemonId}`)
      console.log(response)
      setPokemon(response.data.result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingSingle(false)
    }
  }, [])

  return {
    pokemonList,
    error,
    loading,
    loadingSingle,
    handlePokemonList,
    getPokemonById,
    setPokemonList,
    fetchMorePokemons,
    pokemonOffset,
    pokemon
  }
}

export default usePokemonFetch
