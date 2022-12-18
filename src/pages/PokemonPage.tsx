import { useLoaderData } from 'react-router-dom'
import Header from '../components/header/Header'
import pokemonApi from '../services/pokemonApi'

export async function pokemonIdLoader({ params: { pokemonId } }: any) {
  return await pokemonApi.get(`/pokemon/${pokemonId}`)
}

export default function PokemonPage() {
  const { data } = useLoaderData() as { data: Record<string, string> }
  return (
    <>
      <Header showBackButton={true}></Header>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
