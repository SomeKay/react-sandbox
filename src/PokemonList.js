import React from 'react';
import Pokemon from './Pokemon';

class PokemonList extends React.Component {
    state = {
        pokemon: [],
        loading: true,
    };

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon').then(response => {
            response.json().then(data => {
                if (data.results) {
                    this.setState({ pokemon: data.results });
                }

                this.setState({ loading: false });
            });
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            );
        }

        return (
            <ul>
                {this.state.pokemon.map(pokemon => (
                    <Pokemon key={pokemon.name} name={pokemon.name} />
                ))}
            </ul>
        );
    }
}

export default PokemonList;
