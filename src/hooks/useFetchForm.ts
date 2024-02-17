import React from 'react'

interface FetchFormHook {
  initialPokemonName: string
  externalPokemonName?: string
  onSubmit: (name: string) => void
}

export const useFetchForm = ({
  initialPokemonName,
  externalPokemonName,
  onSubmit
}: FetchFormHook) => {
  const [pokemonName, setPokemonName] = React.useState(() => initialPokemonName)

  React.useEffect(() => {
    setPokemonName(externalPokemonName ?? initialPokemonName)
  }, [initialPokemonName, externalPokemonName])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(pokemonName)
  }

  const handleSelect = (newPokemonName: string) => {
    setPokemonName(newPokemonName)
    onSubmit(newPokemonName)
  }

  return {
    pokemonName,
    handleChange,
    handleSubmit,
    handleSelect
  }
}
