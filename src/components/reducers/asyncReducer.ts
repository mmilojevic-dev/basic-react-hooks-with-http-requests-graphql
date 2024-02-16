import { UNHANDLED_ERROR_TEXT } from '@/config/app'
import { AsyncActionType, AsyncStateType, AsyncStatus } from '@/models'

export const asyncReducer = <T>(
  state: AsyncStateType<T>,
  action: AsyncActionType<T>
): AsyncStateType<T> => {
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
