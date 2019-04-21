import React from 'react';
import ReactDOM from 'react-dom';
import Pokemon from './Pokemon';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemon: [],
        };
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon').then(response => {
            response.json().then(data => {
                if (data.results) {
                    this.setState({ pokemon: data.results });
                }
            });
        });
    }

    capitalize(text) {
        if (typeof text !== 'string') return '';
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Pokemon!</h1>
                        {this.state.pokemon.map(pokemon => (
                            <Pokemon
                                key={pokemon.name}
                                name={this.capitalize(pokemon.name)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
