import React, { useEffect, useState } from "react";
import { useParams } from "react-router"; 
import Navbar from '../components/navbar.component'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

function Details() {
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();

    useEffect(() => {
        const pokemonid = params.id;
        fetchPokemonDetails(pokemonid);
    }, []);

    const fetchPokemonDetails = (pokemonid) => {
        const PokemonDetailsURL = `https://pokeapi.co/api/v2/pokemon/${pokemonid}/`;
        setLoading(true);
        setError(null);

        fetch(PokemonDetailsURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch Pokemon details');
                }
                return response.json();
            })
            .then(pokemonItem => {
                setPokemonDetails(pokemonItem);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    console.log(pokemonDetails)

    if (loading) {
        return <ProgressBar animated now={100} />;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Navbar />
            <Card className="text-center card-font">
                <Card.Header>Who's That Pokemon?</Card.Header>
                <Card.Body>
                    <Image className="w-25" src={pokemonDetails?.sprites?.front_default} alt={pokemonDetails?.name} />
                    <Card.Title className="mt-5">{pokemonDetails.name.toUpperCase()}</Card.Title>
                    <Card.Text>
                        {pokemonDetails.stats.map((stat, index) => (
                            <div key={index}>
                                {stat.stat.name}:{" "}
                                <ProgressBar
                                    className="mt-2 justify-content-center"
                                    striped
                                    variant="info"
                                    now={stat.base_stat}
                                    label={`${stat.base_stat}`}
                                />
                            </div>
                        ))}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Details;