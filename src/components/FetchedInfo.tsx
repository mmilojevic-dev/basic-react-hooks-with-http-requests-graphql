import { Label } from '@radix-ui/react-label'
import { useEffect, useState } from 'react'

import { fetchPokemon } from '@/lib/services'
import { FetchedInfoState } from '@/models'

import { DataView } from './DataView'
import { InfoFallback } from './InfoFallback'

interface FetchedInfoProps {
  pokemonName: string
}

export const FetchedInfo = ({ pokemonName }: FetchedInfoProps): JSX.Element => {
  const [state, setState] = useState<FetchedInfoState>({
    status: pokemonName ? 'pending' : 'idle',
    pokemon: null,
    error: null
  })

  const { status, pokemon, error } = state

  useEffect(() => {
    const fetchData = async () => {
      if (!pokemonName) {
        return
      }

      try {
        setState({ status: 'pending', pokemon: null, error: null })

        const fetchedPokemon = await fetchPokemon(pokemonName)

        setState({ status: 'resolved', pokemon: fetchedPokemon, error: null })
      } catch (fetchError) {
        const error = fetchError as Error
        setState({ status: 'rejected', pokemon: null, error })
      }
    }

    fetchData()
  }, [pokemonName])

  switch (status) {
    case 'idle':
      return <Label>Submit a Pokemon</Label>
    case 'pending':
      return <InfoFallback name={pokemonName} />
    case 'rejected':
      throw error
    case 'resolved':
      return <DataView pokemon={pokemon} />
    default:
      throw new Error('This is the unhandled error!')
  }
}
