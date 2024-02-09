import { Label } from '@radix-ui/react-label'

import { SpecialAttack } from '@/models'

interface DataViewListItemProps {
  specialAttack: SpecialAttack
}

export const DataViewListItem = ({ specialAttack }: DataViewListItemProps) => {
  const { name, damage, type } = specialAttack

  return (
    <li key={name}>
      <Label className="font-bold">{name}</Label>:
      <Label className="ml-2">
        {damage} <small>({type})</small>
      </Label>
    </li>
  )
}
