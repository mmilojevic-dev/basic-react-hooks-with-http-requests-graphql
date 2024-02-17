import React from 'react'

import { asyncReducer } from '@/components/reducers/asyncReducer'
import { AsyncStateType, AsyncStatus } from '@/models'

export const useAsync = <T>(initialState: AsyncStateType<T>) => {
  const [state, dispatch] = React.useReducer(asyncReducer, {
    ...initialState,
    status: AsyncStatus.IDLE,
    data: null,
    error: null
  })

  // TODO: improve typing here, avoid eslint-disable
  const run = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (promise: Promise<any>) => {
      dispatch({ type: AsyncStatus.PENDING })
      promise.then(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (data: any) => {
          dispatch({ type: AsyncStatus.RESOLVED, data })
        },
        (error: Error) => {
          dispatch({ type: AsyncStatus.REJECTED, error })
        }
      )
    },
    [dispatch]
  )

  return { run, ...state }
}
