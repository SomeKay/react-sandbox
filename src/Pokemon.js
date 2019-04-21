import { Link } from '@reach/router';
import React from 'react';

class Pokemon extends React.Component {
    capitalize(text) {
        if (typeof text !== 'string') return '';
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    render() {
        return (
            <li>
                <Link to={`/pokemon/${this.props.name}`}>
                    {this.capitalize(this.props.name)}
                </Link>
            </li>
        );
    }
}

export default Pokemon;
