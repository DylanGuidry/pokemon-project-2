import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Badge from 'react-bootstrap/Badge';
import './cards.css'
import { NavLink } from "react-router-dom";

function Cards({ pokemonList }) {

        function getHP(pokemon) {
            for (const stat of pokemon.stats) {
            if (stat.stat.name === "hp") {
                return stat.base_stat;
            }
            }
            return "N/A";
        }

        function getType(pokemon) {
            const primaryType = pokemon.types[0].type.name;
            return primaryType.charAt(0).toUpperCase() + primaryType.slice(1);
        }

        function getTypeClass(pokemon) {
            const primaryType = pokemon.types[0].type.name;
            return primaryType.toLowerCase();
        }

    return (
        <div className='row d-flex justify-content-center'>
            {pokemonList.map((pokemon) => {
                return (
                    <Card className='m-4 shadow-lg p-3 mb-5 bg-body card-font' style={{ width: '18rem' }}>
                    <Badge className='p-1' bg={`type ${getTypeClass(pokemon)}`}>{getType(pokemon)}</Badge>{' '}
                    <Card.Img variant="top" src={pokemon.sprites.front_default} />
                    <Card.Body>
                        <Card.Title>{pokemon.name}</Card.Title>
                        <ProgressBar striped variant="info" now={getHP(pokemon)} label={`${getHP(pokemon)}`} />
                        <NavLink to={`/pokemonDetails/${pokemon.id}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#3B4CCA" className="bi bi-arrow-right-circle-fill mt-4 mb-0" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg>
                        </NavLink>
                    </Card.Body>
                    </Card>
                )
            })}
        </div>
    );
}

export default Cards;