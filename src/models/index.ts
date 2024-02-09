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
  | { status: 'idle'; pokemon: null; error: null }
  | { status: 'pending'; pokemon: null; error: null }
  | { status: 'rejected'; pokemon: null; error: Error }
  | { status: 'resolved'; pokemon: Pokemon; error: null }
