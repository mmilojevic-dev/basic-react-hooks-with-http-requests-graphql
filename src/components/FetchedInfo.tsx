import { Label } from '@radix-ui/react-label'
import { useEffect, useState } from 'react'

import { UNHANDLED_ERROR_TEXT } from '@/config/app'
import { fetchPokemon } from '@/lib/services'
import { FetchedInfoState, FetchStatus } from '@/models'

import { DataView } from './DataView'
import { InfoFallback } from './InfoFallback'

interface FetchedInfoProps {
  pokemonName: string
}

export const FetchedInfo = ({ pokemonName }: FetchedInfoProps): JSX.Element => {
  const [state, setState] = useState<FetchedInfoState>({
    status: pokemonName ? FetchStatus.PENDING : FetchStatus.IDLE,
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
        setState({ status: FetchStatus.PENDING, pokemon: null, error: null })

        const fetchedPokemon = await fetchPokemon(pokemonName)

        setState({
          status: FetchStatus.RESOLVED,
          pokemon: fetchedPokemon,
          error: null
        })
      } catch (fetchError) {
        const error = fetchError as Error
        setState({ status: FetchStatus.REJECTED, pokemon: null, error })
      }
    }

    fetchData()
  }, [pokemonName])

  switch (status) {
    case FetchStatus.IDLE:
      return <Label>Submit a Pokemon</Label>
    case FetchStatus.PENDING:
      return <InfoFallback name={pokemonName} />
    case FetchStatus.REJECTED:
      throw error
    case FetchStatus.RESOLVED:
      return <DataView pokemon={pokemon} />
    default:
      throw new Error(UNHANDLED_ERROR_TEXT)
  }
}
