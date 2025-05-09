import { useParams } from "react-router";
import { Loading } from "../components/Loading";
import {usePokemonDetail} from '../services/pokemonService';
import { PokemonAddCollection } from "../components/PokemonList/PokemonAddCollection";

export const Details = () => {
    const { pokeid } = useParams();
    const pokemonData = usePokemonDetail(pokeid);
    if(!pokemonData) {
        return (
            <Loading />
        )
    }
    return (
        <section className="Collection"> 
            <h1>{pokemonData.name}</h1>
            <section className="evolutions">
                <img src={pokemonData.sprites.front_default} />
                <img src={pokemonData.sprites.back_default} />
            </section>
            <section>
                <PokemonAddCollection
                    Pokecod={pokeid}
                    imgSprite={pokemonData.sprites.front_default}
                    name={pokemonData.name}
                    url=''
                />
            </section>
            <pre>
                {JSON.stringify(pokemonData, null, 2)}
            </pre>
        </section>
    );
};