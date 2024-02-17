import { Label } from '@radix-ui/react-label'
import React from 'react'

import { FETCHED_INFO_IDLE_TEXT, UNHANDLED_ERROR_TEXT } from '@/config/app'
import { useAsync } from '@/hooks/useAsync'
import { fetchPokemon } from '@/lib/services'
import { AsyncStatus, Pokemon } from '@/models'

import { DataView } from './DataView'
import { InfoFallback } from './InfoFallback'

interface FetchedInfoProps {
  pokemonName: string
}

export const FetchedInfo = ({ pokemonName }: FetchedInfoProps): JSX.Element => {
  const state = useAsync({
    status: pokemonName ? AsyncStatus.PENDING : AsyncStatus.IDLE,
    data: null,
    error: null
  })

  const { status, data, error, run } = state

  React.useEffect(() => {
    if (!pokemonName) {
      return
    }
    // note the absence of `await` here. Just passing the promise
    // to `run` so `useAsync` can attach it's own `.then` handler on it to keep
    // track of the state of the promise.
    const pokemonPromise: Promise<Pokemon> = fetchPokemon(pokemonName)
    run(pokemonPromise)
  }, [pokemonName, run])

  switch (status) {
    case AsyncStatus.IDLE:
      return <Label>{FETCHED_INFO_IDLE_TEXT}</Label>
    case AsyncStatus.PENDING:
      return <InfoFallback name={pokemonName} />
    case AsyncStatus.REJECTED:
      throw error
    case AsyncStatus.RESOLVED:
      // TODO: avoid using type assertion here
      return <DataView pokemon={data as Pokemon} />
    default:
      throw new Error(UNHANDLED_ERROR_TEXT)
  }
}
