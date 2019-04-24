import { Link, Router } from '@reach/router';
import React from 'react';
import ReactDOM from 'react-dom';
import PokemonDetails from './PokemonDetails';
import PokemonList from './PokemonList';

class App extends React.Component {
    render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title">
                        <Link to="/">Gotta catch em all!</Link>
                    </h1>
                    <Router>
                        <PokemonList path="/" />
                        <PokemonDetails path="/pokemon/:name" />
                    </Router>
                </div>
            </section>
        );
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
