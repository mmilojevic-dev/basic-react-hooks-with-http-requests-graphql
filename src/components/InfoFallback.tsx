import React from 'react'

import { Pokemon } from '@/models'

import { DataView } from './DataView'

interface InfoFallbackProps {
  name: string
}

export const InfoFallback = ({ name }: InfoFallbackProps) => {
  const initialName = React.useRef(name).current
  const fallbackPokemonData: Pokemon = {
    id: 'fallback-id',
    name: initialName,
    number: 'XXX',
    image: '/img/fallback-pokemon.jpg',
    attacks: {
      special: [
        { name: 'Loading Attack 1', type: 'Type', damage: 'XX' },
        { name: 'Loading Attack 2', type: 'Type', damage: 'XX' }
      ]
    },
    fetchedAt: 'loading...'
  }
  return <DataView pokemon={fallbackPokemonData} />
}
