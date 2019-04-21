import { Link, Router } from '@reach/router';
import React from 'react';
import ReactDOM from 'react-dom';
import PokemonDetails from './PokemonDetails';
import PokemonList from './PokemonList';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>
                            <Link to="/">Gotta catch em all!</Link>
                        </h1>
                        <Router>
                            <PokemonList path="/" />
                            <PokemonDetails path="/pokemon/:name" />
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
