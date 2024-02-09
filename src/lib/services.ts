import { FETCH_GRAPHQL_ENDPOINT, FETCH_GRAPHQL_QUERY } from '@/config/app'
import { Pokemon } from '@/models'

import { formatDate } from './utils'

export const fetchPokemon = async (
  name: string,
  delay: number = 1500
): Promise<Pokemon> => {
  try {
    const response = await window.fetch(FETCH_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
        delay: delay.toString()
      },
      body: JSON.stringify({
        query: FETCH_GRAPHQL_QUERY,
        variables: { name: name.toLowerCase() }
      })
    })

    const responseData = await response.json()

    if (response.ok) {
      const pokemon = responseData?.data?.pokemon
      if (pokemon) {
        pokemon.fetchedAt = formatDate(new Date())
        return pokemon
      } else {
        throw new Error(`No pokemon with the name "${name}"`)
      }
    } else {
      throw {
        message: responseData?.errors?.map((e: Error) => e.message).join('\n')
      }
    }
  } catch (error) {
    return Promise.reject(error)
  }
}
