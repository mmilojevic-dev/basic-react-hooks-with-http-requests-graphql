import {
  INFO_FALLBACK_ID,
  INFO_FALLBACK_IMAGE,
  INFO_FALLBACK_LOADING_PLACEHOLDER,
  INFO_FALLBACK_NUMBER,
  INFO_FALLBACK_SPECIAL_ATTACKS_PLACEHOLDERS
} from '@/config/app'
import { Pokemon } from '@/models'

import { DataView } from './DataView'

interface InfoFallbackProps {
  name: string
}

export const InfoFallback = ({ name }: InfoFallbackProps) => {
  const fallbackPokemonData: Pokemon = {
    id: INFO_FALLBACK_ID,
    name,
    number: INFO_FALLBACK_NUMBER,
    image: INFO_FALLBACK_IMAGE,
    attacks: {
      special: INFO_FALLBACK_SPECIAL_ATTACKS_PLACEHOLDERS
    },
    fetchedAt: INFO_FALLBACK_LOADING_PLACEHOLDER
  }
  return <DataView pokemon={fallbackPokemonData} />
}
