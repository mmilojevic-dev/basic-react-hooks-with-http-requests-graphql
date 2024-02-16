export interface Attacks {
  special: SpecialAttack[]
}
export interface SpecialAttack {
  name: string
  type: string
  damage: string
}

export interface Pokemon {
  id: string
  number: string
  name: string
  image: string
  attacks: Attacks
  fetchedAt?: string
}

export enum AsyncStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected'
}

export type AsyncStateType<T> =
  | { status: AsyncStatus.IDLE | AsyncStatus.PENDING; data: null; error: null }
  | { status: AsyncStatus.RESOLVED; data: T; error: null }
  | { status: AsyncStatus.REJECTED; data: null; error: Error }

export type AsyncActionType<T> =
  | { type: AsyncStatus.PENDING }
  | { type: AsyncStatus.RESOLVED; data: T }
  | { type: AsyncStatus.REJECTED; error: Error }
