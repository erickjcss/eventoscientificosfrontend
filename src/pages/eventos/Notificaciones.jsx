import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllNotifica } from '../../api/notifica';
import { getAllPersonas } from '../../api/personas.api';


const Notificaciones = () => {
let aut;
    const navigate=useNavigate();
    const [mostrado, setMostrado] = useState(false);
    const [confirmacionMostrada, setConfirmacionMostrada] = useState(false);
    const [confirmacionCambiada, setConfirmacionCambiada] = useState(false);
    const [notificaciones,setNotificaciones]=useState("");
    const [cantNotificaciones,setCantidadNotificaciones]=useState("");
    const [autores,setAutores]=useState("");
    let ayuda=[];
    useEffect(()=>{
  
        if(localStorage.getItem("email")==""&& !mostrado && !confirmacionMostrada && confirmacionCambiada){
          const acc=  confirm("¿Para ver sus notificaciones debe autenticarse, desea autenticarse?")
          setMostrado(true); // Marca que el cuadro de diálogo ya se ha mostrado
            setConfirmacionMostrada(true); // Marca que la confirmación ya se ha mostrado
            
            if(acc==true){
                navigate("/");
            }
            else{
                navigate("/index")
            }
        }
    },[mostrado, navigate, confirmacionMostrada, confirmacionCambiada])
    useEffect(() => {
        if (!confirmacionCambiada) {
          setConfirmacionCambiada(true); 
        }
    },[])
    useEffect(() => {
        getAllPersonas().then(res=>{
             
            setAutores(res.data);
            console.log(autores);
            res.data.forEach(element => {
              if(element.email==localStorage.getItem("email")){
                aut=element.id;
              }
        
            });
                        })
                        
                        const fetchPub=()=>{
                            
        getAllNotifica().then(response => {
            for(let i=0;i<response.data.length;i++){
           
                if(aut==response.data[i].notificacionesPer){
                  
                                    
                
               
                    
                  ayuda.push(response.data[i])
             
               
              }
               }   
      
      
           
       console.log(ayuda)
      setNotificaciones(ayuda.reverse()); 
       setCantidadNotificaciones(ayuda.length);    
      

       ayuda=[];
      })
      .catch(error => {
        console.error(error);
      }) 
      
          
             
    
      
    }
    fetchPub()        
    },[])
  return (
    <div className='bg-[#94b8d7] mb-4'>
     
      <h2 className='mt-8 text-center font-[750] min-[600px]:relative min-[600px]:top-12 min-[600px]:text-lg min-[800px]:text-xl min-[1000px]:text-2xl min-[1100px]:text-4xl  '>Notificaciones </h2>
      {!notificaciones.length>0&&(
        <div className='bg-white mt-24 max-h-[1000px]  min-[904px]:mt-40 min-[1000px]:w-[90vw] min-[1000px]:ml-auto min-[1000px]:mr-auto  '>
            <h2 className='text-2xl relative top-6  h-[100px] text-center font-[800] '>Usted no tiene notificaciones</h2>
            </div>
            )}
      <div className='bg-white mt-24 max-h-[1000px] overflow-auto min-[904px]:mt-40 min-[1000px]:w-[90vw] min-[1000px]:ml-auto min-[1000px]:mr-auto  '>
     
      {notificaciones.length>0&&notificaciones!=undefined&&autores!=undefined&&autores.length>0 &&notificaciones.map(notificacion=> (
        <div className='ml-8 bg-blue-500 mb-8 relative top-4 max-[500px]:w-[80vw] min-[500px]:w-[90vw]  max-w-[2000px]  h-auto max-h-[200px] min-[600px]:max-h-[250px] overflow-auto scroll-auto min-[600px]:text-xl  min-[100px]:w-[85vw] min-[1000px]:ml-1 min-[1000px]:max-h-[400px] '>
            <div className='inline-flex max-h-[30px]  '>
        <img src="../../images/eventos.png" className='ml-2 w-12 h-12 min-[600px]:mt-4 min-[600px]:w-24 min-[600px]:h-20 min-[1000px]:left-[2rem] min-[1000px]:relative min-[1000px]:w-40 min-[1000px]:h-48   ' alt="" />

<h3 className='mt-2 font-[750] min-[600px]:mt-8 min-[600px]:ml-8 min-[685px]:text-center ml-auto mr-auto w-[80vw] min-[1000px]:text-center min-[1000px]:mt-24'>{notificacion.title} <br /></h3>


</div>
<p className='text-justify mr-2 ml-2 mb-6 min-[600px]:mt-8 min-[1000px]:text-center min-[1000px]:text-3xl'>{notificacion.contenido}</p>
<div className='inline-flex justify-between  max-[500px]:w-[80vw] min-[500px]:w-[90vw]  max-w-[2000px]  min-[1000px]:mb-4'>
    <p className='ml-2 text-gray-300'>{notificacion.fechaNot}</p>
<p className=' text-gray-300 mr-2 min-[1000px]:mr-12' >{notificacion.horaNot}</p>
</div>

</div>))
      }
      </div>
    </div>
  )
}

export default Notificaciones
