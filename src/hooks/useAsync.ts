import React from 'react'

import { UNHANDLED_ERROR_TEXT } from '@/config/app'
import { AsyncStatus } from '@/models'

type AsyncStateType<T> =
  | { status: AsyncStatus.IDLE | AsyncStatus.PENDING; data: null; error: null }
  | { status: AsyncStatus.RESOLVED; data: T; error: null }
  | { status: AsyncStatus.REJECTED; data: null; error: Error }

type AsyncActionType<T> =
  | { type: AsyncStatus.PENDING }
  | { type: AsyncStatus.RESOLVED; data: T }
  | { type: AsyncStatus.REJECTED; error: Error }

function asyncReducer<T>(
  state: AsyncStateType<T>,
  action: AsyncActionType<T>
): AsyncStateType<T> {
  switch (action.type) {
    case AsyncStatus.PENDING:
      return { status: AsyncStatus.PENDING, data: null, error: null }
    case AsyncStatus.RESOLVED:
      return { status: AsyncStatus.RESOLVED, data: action.data, error: null }
    case AsyncStatus.REJECTED:
      return { status: AsyncStatus.REJECTED, data: null, error: action.error }
    default:
      throw new Error(UNHANDLED_ERROR_TEXT)
  }
}

export const useAsync = <T>(
  asyncCallback: () => Promise<T> | undefined,
  initialState: AsyncStateType<T>,
  dependencies: React.DependencyList
): AsyncStateType<T> => {
  const [state, dispatch] = React.useReducer(
    asyncReducer as React.Reducer<AsyncStateType<T>, AsyncActionType<T>>,
    {
      ...initialState,
      status: AsyncStatus.IDLE,
      data: null,
      error: null
    }
  )

  React.useEffect(() => {
    const promise = asyncCallback()
    if (!promise) {
      return
    }
    dispatch({ type: AsyncStatus.PENDING })
    promise.then(
      (data) => {
        dispatch({ type: AsyncStatus.RESOLVED, data })
      },
      (error) => {
        dispatch({ type: AsyncStatus.REJECTED, error })
      }
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return state
}
