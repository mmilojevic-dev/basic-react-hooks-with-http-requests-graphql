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
export const FETCH_FORM_LABEL_TEXT = 'Pokemon Name'
export const FETCH_FORM_INPUT_PLACEHOLDER_TEXT = 'Pokemon Name...'
export const FETCH_BUTTON_INPUT_SUGGESTIONS = {
  SUGGESTION1: 'pikachu',
  SUGGESTION2: 'charizard',
  SUGGESTION3: 'mew'
}
export const ERROR_BOUNDARY_ERROR_LABEL_TEXT = 'There was an error:'
export const ERROR_BOUNDARY_RESET_BUTTON_TEXT = 'Try Again'
