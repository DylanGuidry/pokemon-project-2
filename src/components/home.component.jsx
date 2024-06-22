import React from "react";
import NavbarPokemon from "./navbar.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
import Cards from "./card.component";
import Footer from './footer.component'
import Searchbar from "./searchbar.component";
import { Pagination } from 'react-bootstrap';

function Home() {
    const [pokemon, setPokemon] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage] = useState(20);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
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
        };

        fetchPokemon();
    }, []);

    // Get current pokemon
    const indexOfLastPokemon = currentPage * pokemonPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
    const currentPokemon = pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

    // Change page and scroll to top
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center m-3">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    
    if (error) {
        return (
            <div>{error}</div>
        );
    }
    
    return (
        <div>
            <section>
                <NavbarPokemon />
                <Searchbar />
                <Cards pokemonList={currentPokemon}/>
                <Pagination className="d-flex justify-content-center">
                    {Array.from({ length: Math.ceil(pokemon.length / pokemonPerPage) }, (_, index) => (
                        <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
                <Footer />
            </section>
        </div>
    );
}

export default Home;