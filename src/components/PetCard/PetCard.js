import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as petsService from '../../services/petsService';

const Pet = ({
    id,
    name,
    description,
    imageURL,
    category,
    likes,
}) => {
    const [currentLikes, setCurrentLikes] = useState(likes);

    const onPetButtonClickHander = () => {
        petsService.pet(id, likes + 1)
            .then((result) => {
               setCurrentLikes(result.likes);
            })
    }

    return (
        <li className="otherPet">
            <h3>Name: {name}</h3>
            <p>Category: {category}</p>
            <p className="img"><img src={imageURL} /></p>
            <p className="description">{description}</p>
            <div className="pet-info">
                <button className="button" onClick={onPetButtonClickHander}>
                    <i className="fas fa-heart"></i>Pet
                </button>
                <Link to={`/pets/details/${id}`}><button className="button">Details</button></Link>
                <i className="fas fa-heart"></i><span>{currentLikes}</span>
            </div>
        </li>
    );
}

export default Pet;