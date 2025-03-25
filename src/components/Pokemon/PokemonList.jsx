import { PokemonListItem } from "./PokemonListItem";
export const PokemonList =(
    {
        PokemonList,
        nextHandler,
        previosHandler
    }
)=>{
    return(
        <section className="pokemonList">
            {PokemonList.map(
                (item)=>{
                    return (
                        <PokemonListItem
                            key={item.name}
                            name={item.name}
                            url={item.url}
                        />
                    )
                }
            )}
        </section>
    );

}