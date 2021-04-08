import { Component } from 'react';

import * as petsService from '../../services/petsService';

import PetCard from '../PetCard/PetCard';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: 'all',
        }
    }

    componentDidMount() {
        petsService.getAll()
            .then(res => this.setState({ pets: res }));
    }

    componentDidUpdate(prevProps) {
        const category = this.props.match.params.category;

        if (prevProps.match.params.category == category) {
            return;
        }

        petsService.getAll(category)
            .then(res => {
                this.setState({ pets: res, currentCategory: category })
            })
    }

    onPetButtonClickHander(petId, likes) {
        petsService.pet(petId, likes + 1)
            .then((result) => {
                console.log(result);
                this.setState(state => ({pets: state.pets.map(x => x.id == petId ? {...x, likes: result.likes} : x)}))
            })

    }

    render() {
        return (
            <div className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation />

                <ul className="other-pets-list">
                    {this.state.pets.map(x => 
                        <PetCard key={x.id} {...x} onPetButtonClickHander={this.onPetButtonClickHander.bind(this, x.id, x.likes)}/>
                    )}
                </ul>
            </div>
        );
    }
}

export default Categories;