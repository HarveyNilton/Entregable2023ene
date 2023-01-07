import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Card = ({url}) => {

    const [characters, setCharacters] = useState({})

    useEffect(()=>{
        axios.get(url).then(res=> setCharacters(res.data))
    },[])
    
    return (
        <div className='card'>
            <h2 className="name">{characters.name}</h2>
            <img src={characters.image} alt="" />
            <h5 className="especie">{characters.origin?.name}</h5>
            <h5 className="especie">{characters.gender}</h5>
            <h5 className="especie">{characters.species}</h5>
            <h5 className="especie">{characters.status}</h5>
        </div>
    );
};

export default Card;