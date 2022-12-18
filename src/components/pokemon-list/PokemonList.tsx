import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import usePokemonFetch from '../../hooks/usePokemonFetch'
import { PaginatedList } from 'react-paginated-list'
import './PokemonList.scss'

export default function PokemonList() {
  const navigate = useNavigate()
  // for pokemons
  const { pokemonList, handlePokemonList, loading, fetchMorePokemons, pokemonOffset } =
    usePokemonFetch()

  const listOfPokemon = useMemo(() => {
    handlePokemonList()
  }, [pokemonOffset])

  const getPokemonId = (pokemonUrl: string): string | undefined => {
    return pokemonUrl
      .substring(0, pokemonUrl.length - 1)
      .split('/pokemon/')
      .pop()
  }

  const onPokemonClick = (name: string) => {
    navigate(`/pokemon/${name}`)
  }

  return (
    <>
      <PaginatedList
        list={pokemonList}
        itemsPerPage={50}
        renderList={(list) => (
          <>
            {list.map((pokemon, index) => {
              return (
                <div
                  className="pokemon-item"
                  onClick={() => onPokemonClick(pokemon.name)}
                  key={`${pokemon.name}-${index}`}>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(
                      pokemon.url
                    )}.png`}
                    alt={pokemon.name}
                  />
                  <span>{pokemon.name}</span>
                </div>
              )
            })}
          </>
        )}
      />
    </>
  )
}
