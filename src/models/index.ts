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
