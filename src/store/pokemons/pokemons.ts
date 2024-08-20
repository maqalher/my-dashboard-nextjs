import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemons';

/**
 * 
  {
   '1' : {id: 1, name: 'bulbasur'}
  }
 * 
 */

interface PokemonState {
    favorites: {[key: string]:SimplePokemon}
}

// const getInitialState = (): PokemonState => {
//     const favorites = JSON.parse(localStorage.getItem('favosrite-pokemons') ?? '{}')

//     return favorites
// }

const initialState: PokemonState = {
    favorites: {}
    // ...getInitialState()
    // '1': {id: '1', name: 'bulbasaur'}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritePokemons(state, action: PayloadAction<{[key:string]:SimplePokemon}>){
        state.favorites = action.payload
    },

    toggleFavorite(state, action:PayloadAction<SimplePokemon>){
        const pokemon = action.payload
        const {id} = pokemon

        // state[id] !== undefined
        if(!!state.favorites[id]){
            delete state.favorites[id]
            // return
        }else{
            state.favorites[id] = pokemon 
        }

        //TODO ni se debe de hacer en redux
        // localStorage.setItem('favosrite-pokemons', JSON.stringify(state.favorites))
    }   
  }
});

export const {toggleFavorite,setFavoritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer