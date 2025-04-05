import { useState } from "react"
import { useNavigate } from "react-router";
import { usePokemonList } from "../services/pokemonService"
import { PokemonList } from "../components/PokemonList/PokemonList";
import { Paging } from "../components/paging/Paging";

export const DashBoard = () => {
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const pokemons = usePokemonList(page - 1, limit);
    const navigateTo = useNavigate();

    const viewPokemonDetail = (code)=>{
        const url = `details/${code}`;
        navigateTo(url);
    }
    return (
        <section>
            <PokemonList
                pokemonList={pokemons.results}
                clickHandler={viewPokemonDetail}
            />
            <Paging
                totalElements={pokemons.count}
                limit={limit}
                page={page}
                onPageChange={setPage}
                onLimitChange={setLimit}
            />
        </section>
    );
}