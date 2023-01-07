import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Filter = ({rikmar}) => {
    const [rikmart, setRikmart] = useState(rikmar)
    const [serach,setSeacrh] = useState("")
    const [pasar, setPasar] = useState(true)

    const Search =()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${serach}/`)
        .then(res => setRikmart(res.data))
        setPasar(false)
        setSeacrh('')
      }
 
      
    return (
        <div className='coponents-filter'>
            <section className='container-filter'>
                <aside className='item-filter'>
                    <h3>Name</h3>
                    <h5 className="name">{pasar ? rikmar.name: rikmart.name}</h5>
                </aside>
                <aside className='item-filter'>
                    <h3>Type</h3>
                    <h5 className="type">{pasar ? rikmar.type :rikmart.type}</h5>
                </aside>
                <aside className='item-filter'>
                    <h3>Dimension</h3>
                    <h5 className="dimension">{pasar ? rikmar.dimension :rikmart.dimension}</h5>
                </aside>
                <aside className='item-filter'>
                    <h3>Population</h3>
                    <h5 className="population">{ pasar ? rikmar.residents?.length :rikmart.residents?.length}</h5>
                </aside>
                <aside className='item-search'>
                    <input type="text" 
                    value={serach} 
                    placeholder='Name Riqui and Morty'
                    onChange={e=>setSeacrh(e.target.value)} />
                    <button onClick={Search}>Search</button>
                </aside>
                {
                    rikmart.residents?.map(resUrl=>(
                        <Card url={resUrl} key={resUrl}/>
                    ))
                }
            </section>
        </div>
    );
};

export default Filter;