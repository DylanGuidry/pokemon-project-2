import React from "react";
import NavbarPokemon from "./navbar.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import Cards from "./card.component";
import Footer from './footer.component'
import Searchbar from "./searchbar.component";

function Home() {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchPokemon();
    }, [])

    const fetchPokemon = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
            const data = await response.json();
            const pokemonPromises = data.results.map(async (pokemon) => {
                const pokemonResponse = await fetch(pokemon.url);
                const pokemonData = await pokemonResponse.json();
                return pokemonData;
            });
            const pokemonDetails = await Promise.all(pokemonPromises);
            setPokemon(pokemonDetails);
            setLoading(false);
        } catch (error) {
            setError('Error fetching Pokemon!');
            setLoading(false);
        }
    }

    console.log(pokemon)
    if (loading) {
        return (
            <div className="d-flex justify-content-center m-3">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    
    if (error) {
        return (
            <div>{error}</div>
        )
    }
    
    return (
        <div>
            <section>
                <NavbarPokemon />
                <Searchbar />
                <Cards pokemonList={pokemon}/>
                <Footer />
            </section>
        </div>
    )
}

export default Home;





