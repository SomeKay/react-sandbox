import { RouteComponentProps } from '@reach/router';
import React from 'react';

interface PokemonDetailsProps {
    name: string;
}

class PokemonDetails extends React.Component<
    RouteComponentProps<PokemonDetailsProps>
> {
    public state = {
        loading: true,
        name: '',
        image: '',
    };

    public componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.name}`).then(
            response =>
                response.json().then(data => {
                    this.setState({
                        loading: false,
                        name: data.name,
                        image: data.sprites.front_default,
                    });
                })
        );
    }

    public render() {
        if (this.state.loading) {
            return <h2>Loading...</h2>;
        }

        const { name, image } = this.state;

        return (
            <div>
                <h2 className="subtitle">{name}</h2>
                <p>
                    <img src={image} />
                </p>
            </div>
        );
    }
}

export default PokemonDetails;
