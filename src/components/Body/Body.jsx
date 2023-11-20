import React, {useEffect,useState} from "react";
import style from "./Body.module.css"
import imagesP from "../Assets/Pokemon.jpeg"
import axios from 'axios'

const Body = () => {
    const baseURL="https://unpkg.com/pokemons@1.1.0/pokemons.json"
    const [data,setData]=useState(null);
    useEffect(()=>{
       const cargarData =async()=>{
        const resp= await axios.get(baseURL)
        setData(resp.data.results)
        console.log(data)
        
    }
       cargarData()
    },[]);
    return (
        <>
            <div className={style.container}>
                {data && data.slice(0,20).map((pokemon,index)=>(
                       <div key={index} className={style.card}>
                       <img src={pokemon.sprites.large}  alt="Imagen " />
                       <p><strong>Name: </strong>{pokemon.name}</p>
                     
                       <ul>
                           <li><strong>Ataque: </strong>{pokemon.attack}</li>
                           <li><strong>HP:</strong> {pokemon.hp}</li>
                           <li><strong>Speed: </strong>{pokemon.speed}</li>
                       </ul>
                       {pokemon.evolution!==null?(
                        <>
                        <p><strong>Evolución: </strong>{pokemon.evolution.name}</p>
                        </>

                       ):
                        <p><strong>No tiene evolucion</strong></p>
                    }
                     
                       <p><strong>Tipo</strong></p> 
                       <ul>
                        {pokemon.type.map((tipo,index)=>(
                            <li key={index}>{tipo}</li>
                        ))}
                 
                        </ul>
                   </div>
                ))}
            
            
                
               

            </div>
        </>
    );
}

export default Body;