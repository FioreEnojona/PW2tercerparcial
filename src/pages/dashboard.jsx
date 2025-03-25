 import { useState } from 'react';
 import { Page } from '../components/Page';
 import { getPokemonList } from '../../services/pockemonapi';
export const DashboardPage = ()=>{
    const [ message, setMessage] = useState('Hola Mundo');
    const pokemons = getPokemonList();
    return (
        <Page title="DashBoard Page">
            <section>
                {message}
                <br/>
                
                  
            </section>
        </Page>
    );
}