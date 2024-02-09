import { Label } from '@radix-ui/react-label'

import { Pokemon } from '@/models'

import { DataViewList } from './DataViewList'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from './ui/card'

interface DataViewProps {
  pokemon: Pokemon
}

export const DataView = ({ pokemon }: DataViewProps) => {
  const { name, number, image, attacks } = pokemon

  return (
    pokemon.image && (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{number}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <img className="max-h-72 max-w-full" src={image} alt={name} />
        </CardContent>
        <CardFooter className="flex flex-col justify-center">
          <DataViewList attacks={attacks} />
          <Label className="mt-3">
            Fetched at <span className="underline">{pokemon.fetchedAt}</span>
          </Label>
        </CardFooter>
      </Card>
    )
  )
}
