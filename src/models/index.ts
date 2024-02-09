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

export type FetchedInfoState =
  | { status: FetchStatus.IDLE; pokemon: null; error: null }
  | { status: FetchStatus.PENDING; pokemon: null; error: null }
  | { status: FetchStatus.REJECTED; pokemon: null; error: Error }
  | { status: FetchStatus.RESOLVED; pokemon: Pokemon; error: null }

export enum FetchStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected'
}
