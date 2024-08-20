import { FavoritePokemons} from "@/pokemons";

export const metadata = {
 title: 'Favoritos',
 description: 'Lorem lorme',
};


export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Pokemons Favoritos <small className="text-blue-500">global state</small></span>

            <FavoritePokemons />
        </div>
    );
}

