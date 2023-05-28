import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/navbar.component";
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import './pokemondetails.css'
import Image from "react-bootstrap/Image";
import Figure from "react-bootstrap/Figure";
import Badge from 'react-bootstrap/Badge';
import Footer from '../components/footer.component'

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
        .then((response) => {
            if (!response.ok) {
            throw new Error("Failed to fetch Pokemon details");
            }
            return response.json();
        })
        .then((pokemonItem) => {
            setPokemonDetails(pokemonItem);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    };

console.log(pokemonDetails);

if (loading) {
    return <ProgressBar animated now={100} />;
}

if (error) {
    return <div>Error: {error}</div>;
}

  // Concatenate move names into a single string
const moves = pokemonDetails.moves.map((move) => move.move.name).join(", ");
const forms = pokemonDetails.forms.map((form) => form.name).join(", ");

function getTypeClass(pokemon) {
    const primaryType = pokemon.types[0].type.name;
    return primaryType.toLowerCase();
}

return (
    <div>
        <Navbar />
        <Card className="text-center card-font shadow p-3 mb-5 rounded m-5">
            <Card.Header>Who's That Pokemon?</Card.Header>
            {pokemonDetails.types.map((type, index) => (
            <Badge
                key={index}
                className="p-1 mt-2"
                bg={`type ${getTypeClass(pokemonDetails)}`}
                >
            {type.type.name}
            </Badge>
            ))}
            <Card.Body>
            <Image
                className="w-25"
                src={pokemonDetails?.sprites?.front_default}
                alt={pokemonDetails?.name}
            />
            <Card.Title className="mt-5">
                {pokemonDetails.name.toUpperCase()}
            </Card.Title>
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
        <Figure className="m-5 shadow p-3 mb-5 text-center">
            <Figure.Image
            width={171}
            height={180}
            alt={pokemonDetails?.name}
            src={pokemonDetails?.sprites?.front_shiny}
            />
            <Figure.Caption className="figure-caption-font text-center m-2">
            <h5>Moves:</h5>
            <p>{moves}</p>
            <h5 className="mt-5">Forms:</h5>
            <p>{forms}</p>
            </Figure.Caption>
        </Figure>
        <Footer />
        </div>
    );
}

export default Details;
