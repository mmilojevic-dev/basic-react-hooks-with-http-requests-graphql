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
    if (!pokemonName) {
      return
    }

    setState({ status: 'pending', pokemon: null, error: null })

    fetchPokemon(pokemonName)
      .then((fetchedPokemon) => {
        setState({ status: 'resolved', pokemon: fetchedPokemon, error: null })
      })
      .catch((fetchError) => {
        setState({ status: 'rejected', pokemon: null, error: fetchError })
      })
  }, [pokemonName])

  switch (status) {
    case 'idle':
      return <Label>Submit a Pokemon</Label>
    case 'pending':
      return <InfoFallback name={pokemonName} />
    case 'rejected':
      // Provide more context in the error message
      throw new Error(`Failed to fetch ${pokemonName}: ${error?.message}`)
    case 'resolved':
      return <DataView pokemon={pokemon} />
    default:
      throw new Error('This is the unhandled error!')
  }
}
