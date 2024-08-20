'use client'

import { useAppSelector } from "@/store"
import { PokemoGrid } from "./PokemonGrid"
import { useState } from "react"
import { IoHeartOutline } from "react-icons/io5"

export const FavoritePokemons = () => {

    // convertir a arreglo
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites))
    // const [pokemons,setPokemons] = useState(favoritePokemons)
    // console.log({favoritePokemons});
    

  return (
    <>
        {/* <PokemoGrid pokemons={favoritePokemons} /> */}
        {
            favoritePokemons.length === 0
                ? (<NoFavorites />)
                : (<PokemoGrid pokemons={favoritePokemons} />)
        }
    </>
  )
}

export const NoFavorites = () => {
    return (
        <div className="flex flex-col h-[50v] items-center justify-center">
            <IoHeartOutline size={100} className="text-red-500" />
            <span>No hay favoritos</span>
        </div>
    )
}
