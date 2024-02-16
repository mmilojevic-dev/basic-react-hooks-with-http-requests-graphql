import React from 'react'

import { asyncReducer } from '@/components/reducers/asyncReducer'
import { AsyncStateType, AsyncStatus } from '@/models'

type AsyncRunCallbackType<T> = {
  run: (promise: Promise<T>) => void
}

type AsyncHookReturnStateType<T> = AsyncStateType<T> & AsyncRunCallbackType<T>

export const useAsync = <T>(
  initialState: AsyncStateType<T>
): AsyncHookReturnStateType<T> => {
  const [state, dispatch] = React.useReducer(asyncReducer, {
    ...initialState,
    status: AsyncStatus.IDLE,
    data: null,
    error: null
  })

  const run = React.useCallback(
    (promise: Promise<T>) => {
      dispatch({ type: AsyncStatus.PENDING })
      promise.then(
        (data) => {
          dispatch({ type: AsyncStatus.RESOLVED, data })
        },
        (error) => {
          dispatch({ type: AsyncStatus.REJECTED, error })
        }
      )
    },
    [dispatch]
  )

  return { run, ...state } as AsyncHookReturnStateType<T>
}
