import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardInicio = ({urlInic}) => {

     useEffect(()=>{
         axios.get(urlInic).then(res=> setCharacters(res.data))
    },[])
    const [characters, setCharacters] = useState({})

    console.log(characters);
    return (
        <div className='card'>
            <h2 className="name">{characters?.name}</h2>
            <img className='img-card' src={characters?.image} alt="" />
            <h5 className="especie">Origin: {characters?.origin?.name}</h5>
            <h5 className="especie">Gender: {characters?.gender}</h5>
            <h5 className="especie">Specie: {characters?.species}</h5>
            <h5 className="especie">Status: {characters?.status}</h5>
        </div>
    );
};

export default CardInicio;