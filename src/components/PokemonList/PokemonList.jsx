import { getPokemonImg } from "../../services/pokemonService";
import { PokemonListItem } from "./PokemonListItem";

export const PokemonList = (
    {
        pokemonList,
        clickHandler = (code)=>{}
    }
)=>{
    return (
        <section className="pokemonHolder">
            { pokemonList.map(
                (item)=>{
                    return (
                        <PokemonListItem
                            key={item.name}
                            name={item.name}
                            url={item.url}
                            {...getPokemonImg(item.url)}
                            onClickHandler={clickHandler}
                        />
                    )
                }
            )}
        </section>
    );
}