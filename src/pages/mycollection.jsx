import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import { useLocalStorage } from "../services/localStorage"
import { PokemonList } from "../components/PokemonList/PokemonList";

export const MyCollection = () => {
    const [pokeCollection,] = useLocalStorage("mycollection");
    const [finalCollection, setFinalCollection] = useState([]);
    const navigate = useNavigate();
    useEffect(
        () => {
            if (pokeCollection) {
                setFinalCollection(Object.entries(pokeCollection).map(
                    ([, pokemon]) => {
                        return pokemon
                    }
                ));
            }
        }
        , [pokeCollection]
    );
    return (
        <section className="bodycollection">
            <section className="titulocollection">
                <h1>Mi Coleccion</h1>
            </section>
        <PokemonList
            pokemonList={finalCollection}
            clickHandler={(code) => {
                console.log("Code", code);
                navigate(`/details/${code}`)
            }}
        />
        </section>
    )
}