export const PokemonListItem = (
    {
        name,
        url,
        img =''
    }
)=>{
    return (
        <div>
            <img src={img} alt{name}/>
        </div>
    );
}