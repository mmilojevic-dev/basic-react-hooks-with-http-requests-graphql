export const ENTITY_NAME = 'pokemon'
export const FETCH_GRAPHQL_ENDPOINT = 'https://graphql-pokemon2.vercel.app/'
export const FETCH_GRAPHQL_QUERY = `
    query PokemonInfo($name: String) {
      pokemon(name: $name) {
        id
        number
        name
        image
        attacks {
          special {
            name
            type
            damage
          }
        }
      }
    }
  `
export const FETCH_ERROR_TEXT = 'No pokemon with the name '
export const FETCH_FORM_LABEL_TEXT = 'Pokemon Name'
export const FETCH_FORM_INPUT_PLACEHOLDER_TEXT = 'Pokemon Name...'
export const FETCH_BUTTON_INPUT_SUGGESTIONS = {
  SUGGESTION1: 'pikachu',
  SUGGESTION2: 'charizard',
  SUGGESTION3: 'mew'
}
export const ERROR_BOUNDARY_ERROR_LABEL_TEXT = 'There was an error:'
export const ERROR_BOUNDARY_RESET_BUTTON_TEXT = 'Try Again'
export const UNHANDLED_ERROR_TEXT = 'This is the unhandled error!'
export const INFO_FALLBACK_ID = 'fallback-id'
export const INFO_FALLBACK_NUMBER = 'XXX'
export const INFO_FALLBACK_IMAGE = '/img/fallback-pokemon.jpg'
export const INFO_FALLBACK_SPECIAL_ATTACKS_PLACEHOLDERS = [
  { name: 'Loading Attack 1', type: 'Type', damage: 'XX' },
  { name: 'Loading Attack 2', type: 'Type', damage: 'XX' },
  { name: 'Loading Attack 2', type: 'Type', damage: 'XX' }
]
export const INFO_FALLBACK_LOADING_PLACEHOLDER = 'loading...'
