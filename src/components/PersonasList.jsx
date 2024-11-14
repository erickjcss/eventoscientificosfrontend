import { useEffect,useState } from 'react'
import React from 'react'
import { getAllPersonas } from '../api/personas.api'
import { PersonasCard } from './PersonasCard'

const PersonasList = () => {
    const [personas,setPersonas]=useState([]);
    useEffect(()=>{
      async function loadPersonas(){
        const res=await getAllPersonas();
        setPersonas(res.data);
      }  
      loadPersonas();
    },[]);
    return (
    <div>
   {personas.map(personas=>(
        <PersonasCard key={personas.id} personas={personas}/>      
   ))}
    </div>
  )
}

export default PersonasList
