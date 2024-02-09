import { Label } from '@radix-ui/react-label'

import {
  FETCH_BUTTON_INPUT_SUGGESTIONS,
  FETCH_FORM_INPUT_PLACEHOLDER_TEXT
} from '@/config/app'
import { useFetchForm } from '@/hooks/useFetchForm'

import { Button } from './ui/button'
import { Input } from './ui/input'

interface FetchFormProps {
  pokemonName: string
  initialPokemonName?: string
  onSubmit: (name: string) => void
}

export const FetchForm = ({
  pokemonName: externalPokemonName,
  initialPokemonName = externalPokemonName || '',
  onSubmit
}: FetchFormProps) => {
  const { pokemonName, handleChange, handleSubmit, handleSelect } =
    useFetchForm({
      initialPokemonName,
      externalPokemonName,
      onSubmit
    })

  const renderSuggestionButton = (name: string) => (
    <Button variant="link" onClick={() => handleSelect(name)}>
      "{name}"
    </Button>
  )

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <Label htmlFor="pokemonName-input">Pokemon Name</Label>
      <small>
        Try {renderSuggestionButton(FETCH_BUTTON_INPUT_SUGGESTIONS.SUGGESTION1)}
        , {renderSuggestionButton(FETCH_BUTTON_INPUT_SUGGESTIONS.SUGGESTION2)},
        or {renderSuggestionButton(FETCH_BUTTON_INPUT_SUGGESTIONS.SUGGESTION3)}
      </small>
      <div className="flex w-full items-center space-x-2">
        <Input
          placeholder={FETCH_FORM_INPUT_PLACEHOLDER_TEXT}
          id="pokemonName-input"
          name="pokemonName"
          value={pokemonName}
          onChange={handleChange}
        />
        {pokemonName.length > 0 && (
          <Button type="submit" disabled={!pokemonName.length}>
            Submit
          </Button>
        )}
      </div>
    </form>
  )
}
