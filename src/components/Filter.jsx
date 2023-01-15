import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Footer from './Footer';

const Filter = () => {
 
    const [serach,setSeacrh] = useState("")
    const [locationSuggert, setLocationSuggert] = useState([])
    const [rikmart, setRikmart] = useState({})
 
    const randomNum = Math.floor(Math.random()* 126) +1
    
      useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/${randomNum}/`)
        .then(res => setRikmart(res.data))
      },[])

    useEffect(()=>{
        if (serach)  {
           axios.get(`https://rickandmortyapi.com/api/location/?name=${serach}`)
        .then(res=>setLocationSuggert(res.data.results)) 
        } else setLocationSuggert([])
        
    },[serach])

    const Search =()=>{
        if (serach<127) {
            axios.get(`https://rickandmortyapi.com/api/location/${serach || 1}/`)
            .then(res => setRikmart(res.data))
            setSeacrh('')  
        }else{
          
        }
        
      }

      const [page, setPage] = useState(1)
      const rikmartParPage = 6
      const lastIndex = page * rikmartParPage
      const firstIndex = lastIndex-rikmartParPage
      const rikmartSlice = rikmart.residents?.slice(firstIndex,lastIndex)

      const totalPagesrikmar = Math.ceil(rikmart.residents?.length/rikmartParPage)
        const pagesrikmar =[]
            for (let i = 1; i <= totalPagesrikmar; i++) {
                pagesrikmar.push(i)
            }

    return (
        <div className='coponents-filter'>
            <section className='container-filter'>

                <div className="container-search-gen">
                    <div className='container-search'>
                        <input className='input-search' type="text" 
                        value={serach} 
                        placeholder='Name Rick And Morty'
                        onChange={e=>setSeacrh(e.target.value) }
                      
                        
                        /> 
        
                        <button className='button-search' onClick={Search}>Search</button>
                    </div>
               <div className='container-list-sugerents'>
                    { locationSuggert.map(sugerent=>(
                        <li key={sugerent.id} className='list-sugerents' 
                        onClick={()=>setRikmart(sugerent)}>{sugerent.id} {sugerent.name}  - Polulation : {sugerent.residents?.length}</li>
                    ))}   
                </div>
                </div> 

                
                

                <div className="container-button-index">
                   { pagesrikmar.map(number => <button key={number} className='button-pag' onClick={()=>setPage(number)}>{number}</button> )}
                </div>
                <div className='bt-prev-next'>
                    <button className='button-pag' onClick={()=>setPage(page-1)} disabled={page===1}>{"<"}</button>
                    {page} / {totalPagesrikmar}
                    <button className='button-pag' onClick={()=>setPage(page+1)} disabled ={page===totalPagesrikmar}>{">"}</button>
                </div>

                <h1 className="name">{rikmart.name} <br />id : {rikmart.id}</h1>

                <div className="description">
                   
                    <aside className='item-filter'>
                        <h4 className='title'>Type:</h4>
                        <h5 className="value">{rikmart.type}</h5>
                    </aside>
                    <aside className='item-filter'>
                        <h4 className='title'>Dimension:</h4>
                        <h5 className="value">{rikmart.dimension}</h5>
                    </aside>
                    <aside className='item-filter'>
                        <h4 className='title'>Population:</h4>
                        <h5 className="value">{rikmart.residents?.length}</h5>
                    </aside>
                    
                </div>
                
            </section>
            <main className='container-card'>
        
                { rikmartSlice?.map(resUrl=>(
                        <Card url={resUrl} key={resUrl}/>)) }
          
            </main>
            <Footer/>
        </div>
    );
};

export default Filter;