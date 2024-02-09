import { Attacks } from '@/models'

import { DataViewListItem } from './DataViewListItem'

interface DataViewListProps {
  attacks: Attacks
}

export const DataViewList = ({ attacks }: DataViewListProps) => {
  return (
    <ul>
      {attacks.special.map((specialAttack, index) => (
        <DataViewListItem
          key={`${specialAttack.name}-${index}`}
          specialAttack={specialAttack}
        />
      ))}
    </ul>
  )
}
