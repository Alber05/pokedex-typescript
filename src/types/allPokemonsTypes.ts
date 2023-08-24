type Sprites = {
  normal: string
  large: string
  animated: string
}

export type allPokemonsType = {
  national_number: string
  evolution: null
  sprites: Sprites
  name: string
  type: string[]
  total: number
  hp: number
  attack: number
  defense: number
  sp_atk: number
  sp_def: number
  speed: number
}
