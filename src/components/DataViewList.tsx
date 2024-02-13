import { Attacks } from '@/models'

import { DataViewListItem } from './DataViewListItem'

interface DataViewListProps {
  attacks: Attacks
  attacksShown: number
}

export const DataViewList = ({ attacks, attacksShown }: DataViewListProps) => {
  const { special } = attacks
  const slicedAttacks =
    special.length > attacksShown ? special.slice(0, attacksShown) : special
  return (
    <ul>
      {slicedAttacks.map((specialAttack, index) => (
        <DataViewListItem
          key={`${specialAttack.name}-${index}`}
          specialAttack={specialAttack}
        />
      ))}
    </ul>
  )
}
