import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { ErrorFallback } from './ErrorFallback'
import { FetchedInfo } from './FetchedInfo'
import { FetchForm } from './FetchForm'

const App = () => {
  const [pokemonName, setPokemonName] = React.useState<string>('')

  function handleSubmit(newPokemonName: string) {
    setPokemonName(newPokemonName)
  }

  function handleReset() {
    setPokemonName('')
  }

  return (
    <div className="container mt-24 flex max-w-md flex-col items-center space-y-4">
      <FetchForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="w-full max-w-xs text-center">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={handleReset}
          resetKeys={[pokemonName]}
        >
          <FetchedInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
