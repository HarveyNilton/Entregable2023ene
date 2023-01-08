import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Card = ({url}) => {


    const [characters, setCharacters] = useState({})
   

    useEffect(()=>{
        axios.get(url).then(res=> setCharacters(res.data))
    },[])
    
    return (
        
        <div className='card'>
            <h2 className="name-card">{characters?.name}</h2>
            <img className='img-card' src={characters.image} alt="" />
            <h5 className="especie">Origin: {characters.origin?.name}</h5>
            <h5 className="especie">Gender: {characters.gender}</h5>
            <h5 className="especie">Specie: {characters.species}</h5>
            <h5 className="especie">Status: {characters.status}</h5>
        </div>

    );
};

export default Card;