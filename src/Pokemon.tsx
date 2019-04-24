import { Link, RouteComponentProps } from '@reach/router';
import React from 'react';

interface PokemonProps {
    name: string;
}

class Pokemon extends React.Component<RouteComponentProps<PokemonProps>> {
    capitalize(text: string) {
        if (typeof text !== 'string') return '';
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    render() {
        return (
            <li>
                <Link to={`/pokemon/${this.props.name}`}>
                    {this.props.name ? this.capitalize(this.props.name) : ''}
                </Link>
            </li>
        );
    }
}

export default Pokemon;
