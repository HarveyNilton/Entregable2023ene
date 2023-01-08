import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import CardInicio from './CardInicio';
import Footer from './Footer';

const Filter = ({rikmar}) => {
    console.log(rikmar);
    const [rikmart, setRikmart] = useState({})
    const [serach,setSeacrh] = useState("")
    const [pasar, setPasar] = useState(true)

    const Search =()=>{
        if(serach===""){
                 
            
        } else{
                axios.get(`https://rickandmortyapi.com/api/location/${serach}/`)
                .then(res => setRikmart(res.data))
                setPasar(false)
                setSeacrh('')
        }
    
      }
 
      
    return (
        <div className='coponents-filter'>
            <section className='container-filter'>

                <div className="container-search">

                        <input className='input-search' type="text" 
                        value={serach} 
                        placeholder='Name Rick And Morty'
                        onChange={e=>setSeacrh(e.target.value)} /> 
                        
                        <button className='button-search' onClick={Search}>Search</button>
                </div> 

                <h1 className="name">{pasar ? rikmar.name: rikmart.name}</h1>

                <div className="description">
                   
                    <aside className='item-filter'>
                        <h4 className='title'>Type:</h4>
                        <h5 className="value">{pasar ? rikmar.type :rikmart.type}</h5>
                    </aside>
                    <aside className='item-filter'>
                        <h4 className='title'>Dimension:</h4>
                        <h5 className="value">{pasar ? rikmar.dimension :rikmart.dimension}</h5>
                    </aside>
                    <aside className='item-filter'>
                        <h4 className='title'>Population:</h4>
                        <h5 className="value">{ pasar ? rikmar.residents?.length :rikmart.residents?.length}</h5>
                    </aside>
                    
                </div>
                
            </section>
            <main className='container-card'>
        
                {pasar? rikmar.residents?.map(resUrl=>(
                        <CardInicio urlInic={resUrl} key={resUrl}/>)): rikmart.residents?.map(resUrl=>(
                        <Card url={resUrl} key={resUrl}/>)) }
          
            </main>
            <Footer/>
        </div>
    );
};

export default Filter;