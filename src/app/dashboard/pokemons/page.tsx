import { PokemoGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";


export const metadata = {
 title: '151 Pokemons',
 description: 'Lorem lorme',
};


const getPokemons = async(limit = 20, offset = 0):Promise<SimplePokemon[]> => {
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offser=${offset}`)
                    .then(res => res.json())

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))

    // throw new Error('Esto es un error que no deberia de suceder')

    return pokemons
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(151)

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Listado de Pokemons <small className="text-blue-500">estatico</small></span>

            <PokemoGrid pokemons={pokemons} />
        </div>
    );
}