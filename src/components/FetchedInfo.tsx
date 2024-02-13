import { Label } from '@radix-ui/react-label'
import React from 'react'

import { FETCHED_INFO_IDLE_TEXT, UNHANDLED_ERROR_TEXT } from '@/config/app'
import { useAsync } from '@/hooks/useAsync'
import { fetchPokemon } from '@/lib/services'
import { AsyncStatus } from '@/models'

import { DataView } from './DataView'
import { InfoFallback } from './InfoFallback'

interface FetchedInfoProps {
  pokemonName: string
}

export const FetchedInfo = ({ pokemonName }: FetchedInfoProps): JSX.Element => {
  const asyncCallback = React.useCallback(() => {
    if (!pokemonName) {
      return
    }
    return fetchPokemon(pokemonName)
  }, [pokemonName])

  const state = useAsync(asyncCallback, {
    status: pokemonName ? AsyncStatus.PENDING : AsyncStatus.IDLE,
    data: null,
    error: null
  })

  const { status, data, error } = state

  switch (status) {
    case AsyncStatus.IDLE:
      return <Label>{FETCHED_INFO_IDLE_TEXT}</Label>
    case AsyncStatus.PENDING:
      return <InfoFallback name={pokemonName} />
    case AsyncStatus.REJECTED:
      throw error
    case AsyncStatus.RESOLVED:
      return <DataView pokemon={data} />
    default:
      throw new Error(UNHANDLED_ERROR_TEXT)
  }
}
