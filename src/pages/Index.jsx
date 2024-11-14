import axios  from 'axios';
import { useEffect, useState } from 'react';
import { useLoaderData, Outlet } from 'react-router-dom';
import { getAllPublicaciones } from '../api/publicaciones';
import { BusquedasCard } from '../components/BusquedaCard';
import { getAllPersonas } from '../api/personas.api';

export function loader(){
    
    
    return "Loader";
}


function Index(){  
    const genArray=(length,defArray)=>{
        return Array.from({length},()=>defArray);
      }
    const [publications,setPublicaciones]=useState("");
    const [cantPublications,setCantPublicaciones]=useState("");
    const [ComentariosCardsd,setComentariosCardsd]=useState(()=>genArray(1000,false));
    const [EventosCardsBus, setEventosCardsBus] = useState(()=>genArray(1000,false));
    const [autores,setAutores]=useState("");
    let help=[];
   useEffect(()=>{
const Pub=(async()=>{
   
    try{
        const res=await getAllPublicaciones();
        

        for(let i=0;i<res.data.length;i++){
            if(res.data[i].aprobada==true){
                help.push(res.data[i]);
            }
           }
        
        setPublicaciones(help);
           help=[];
        console.log(res.data);
        setCantPublicaciones(res.data.length);
       
    }
    catch(err){
        console.log(err)
        
    }
    getAllPersonas().then(res=>{
       
        setAutores(res.data);
        console.log(autores);})
})
 console.log(publications);
Pub()
   },[])
   
    useEffect(() => {
    const obtUs=(async()=>{
        try {
            const response = await axios.post('https://eventoscientificos-nxmx.onrender.com/us/api/v1/usuario_activo/');
           
            console.log(response.data)
           
        } catch (error) {
            console.error('Error al crear el usuario:', error.response.data);
        }
    }) 
obtUs()
}, []);
    const datos=useLoaderData();
    const updateElementt=(index)=>{
        const updateArray=[...ComentariosCardsd];
      updateArray[index]=!updateArray[index];
      setComentariosCardsd(updateArray);
      }
    const Atrasd=(publication)=>{
        updateElementt(publication)
      /*   document.querySelector(".slider-slidesd").classList.remove("opacity-0");
        document.querySelector(".slider-slidesd").classList.remove("invisble");
      
        document.querySelector(".slider-desod").classList.add("ocultar");  */
      }
      const updateElement=(index)=>{
        const updateArray=[...EventosCardsBus];
      updateArray[index]=!updateArray[index];
      setEventosCardsBus(updateArray);
      }
      const foto_Txt_Bus=(e,publication)=>{
        console.log(publication)
        console.log(e.target)
        const $foto_publ=e.target;
        console.log($foto_publ)
        if(e.target===e.target){
          console.log(EventosCardsBus[publication])
           updateElement(publication)
     
         
          const currentSrc = $foto_publ.getAttribute("src");
    
          let newSrc = currentSrc === "../../images/cambiar_conv_foto.png" ? "../../images/cambiar_foto_con.png" : "../../images/cambiar_conv_foto.png";
    
          e.target.setAttribute("src", newSrc);
      }
    
      console.log($foto_publ);
      
    
           
        }
        function saberAut(){
            for(let i=0;i<autores.length;i++){
              if(publications[publications.length-1]!=undefined){
                if(autores[i].id==publications[publications.length-1].publicacionesPer){
                  return autores[i].nombrePer;
                }
            }}
            return ""
          }
          const BusPdf=(pdf)=>{
            if(pdf!=undefined){
               if(pdf){
            const pdfUrl =
          pdf;
            const urlPdf = new URL(pdfUrl);
            const pathPdf = urlPdf.pathname;
            const pathSegmentsPdf = pathPdf.split('/');
            
            return(pathSegmentsPdf[pathSegmentsPdf.length - 1]); 
          }  }
          }
   /*  alert(datos);
   */  return (
        <>
       <div className='h-[110vh] bg-[#7498b6] w-[101vw]'>
           

            <main className="main ">
                <div className='overflow-auto   h-[100px] relative w-[50vw] left-16 max-[600px]:w-[30vw]  bg-slate-500 min-[1000px]:w-[70vw] min-[1500px]:w-[80vw] ml-auto mr-auto top-[4vh] max-[500px]:top-[0vh] min-[1000px]:left-16 xl:h-[60px]'>
                 <h1 className='    text-center  text-xl max-[500px]:text-lg  md:text-3xl font-serif relative top-[40px] italic xl:top-[17px]  font-black'>Eventos Científicos</h1> 
                 </div>
           <Outlet/>
            </main>
      <section className='md:inline-flex relative top-[20vh] max-h-[70vh]  min-[1000px]:max-h-[85vh] overflow-y-auto overflow-x-hidden '>
        <div className='left-8 sm:left-11  md:left-2  relative w-[90vw] md:w-[48vw] overflow-auto   bg-[#5A6988] h-[66vh] shadow-inner shadow-neutral-200 min-[1000px]:h-[80vh] min-[1000px]:ml-4  '>
        <h3 className='text-center relative top-12 text-4xl'>Breve Descripción</h3>
        <p className='text-justify hyphens-auto relative top-24 mr-4 ml-4  text-xl sm:text-3xl'>Aplicación web que permite la visualización y publicación de convocatorias a eventos científicos ,además cuenta con opciones de solicitar participación en los eventos, compartir, comentar ,navegar ,recibir notificaciones y otras muchas opciones, también contará con la posibilidad de chateo en futuras actualizaciones,</p> 
        <br /><br />
         <p className='hyphens-auto relative top-24 mr-4 ml-4 text-3xl text-center'>Disfrútela 😁</p> 
         <br />
         <h4 className=' relative top-24 mr-4 ml-4 text-3xl text-center'>Contáctenos</h4>
         <div className='inline-flex top-28 relative'>
       <a href="https://www.facebook.com/erick.miralles.35" target='blank'>
       <img id='fotoPerfil' src="../../images/erick.jpg" className='rounded-full w-20 sm:w-32 sm:ml-16 ml-4 fotoPerfil xl:w-44 xl:relative xl:left-16' alt="erick" srcset="" />
       <p id='textoArrE' className='ml-4 sm:ml-20 '>Erick Miralles</p></a>
       <a href="https://www.facebook.com/marcos.artilesdelgado" target='blank'>
       <img id='fotoPerfil' src="../../images/profile-user.png" className='rounded-full w-20 sm:w-32 sm:ml-16 ml-4 xl:w-[12.5rem] xl:relative xl:left-[7.5rem] xl:h-[290px]   ' alt="marcos" srcset="" />
       <p id='textoArrM' className='ml-4 sm:ml-20 fotoPerfil'>Marcos Artiles</p></a>
       <a href="https://www.facebook.com/keylan.garcia.505" target='blank'>
       <img id='fotoPerfil' src="../../images/keylan.jpg" className='rounded-full w-20 sm:w-32 sm:ml-16 ml-4 xl:w-44 xl:relative xl:left-[7.5rem] h-32 sm:h-48 xl:h-72' alt="keylan" srcset="" />
       <p id='textoArrK' className='ml-4 sm:ml-20 fotoPerfil'>Keylan Valdés</p></a>
         </div> 
         <div className='inline-flex top-28 relative'>
       <a href="https://www.facebook.com/erick.miralles.35" target='blank'>
       <img id='fotoPerfil' src="../../images/profile-user.png" className='rounded-full w-20 sm:w-40 sm:ml-20 sm:h-[10rem] ml-4 fotoPerfil xl:w-60 xl:left-24 xl:relative' alt="sabrina" srcset="" />
       <p id='textoShei' className='ml-4 sm:ml-28'>Sabrina Ramos</p></a>
       <a href="https://www.facebook.com/marcos.artilesdelgado" target='blank'>
       <img id='fotoPerfil' src="../../images/profile-user.png" className='rounded-full w-20 sm:w-40 sm:ml-20 sm:h-[10rem] ml-4 fotoPerfil xl:w-60 xl:left-24 xl:relative' alt="sheila" srcset="" />
       <p id='textoShei' className='ml-4 sm:ml-28  '>Sheila Hernández</p></a>
             </div> </div>
              <div className='left-8 relative top-8 md:top-0  sm:left-11 w-[90vw] md:w-[48vw] md:left-1 md:ml-4   xl:left-0 bg-[#5A6988]  min-[1000px]:ml-4
 overflow-auto   h-[66vh] shadow-inner shadow-neutral-200 min-[1000px]:h-[80vh]'>
        <h3 className='text-center relative top-12 text-4xl'>Últimas Publicaciones</h3>
    {publications.length==0&&(
        <h4 className='mt-24 text-center text-4xl'>No hay publicaciones en la página</h4>
    )}
    {publications!=undefined&&publications[publications.length-1]!=undefined&&publications.length>0&&(
        <div>
         
         <article className='mt-32 relative ml-2 mb-4   active max-[660px]:right-[10vw]   max-[500px]:right-[5vw]  max-[438px]:right-[3vw] max-[420px]:right-[2vw] max-[410px]:right-[1vw]  w-[47vw]   bg-[#6495ED]   min-w-[400px] max-[700px]:min-w-[90vw] max-[700px]:ml-12 max-[441px]:ml-8 max-[437px]:ml-4 max-[900px]:ml-auto max-[900px]:mr-auto'>
         <div className='flex  max-h-[55px] bg-[#94b8d7]'>
         {ComentariosCardsd[publications[publications.length-1].id] &&(
           <img src="../../images/atras-a-la-izquierda.png" className="fotoCamb cursor-pointer w-[80px] mr-[10px] hover:h-[65px]    relative right-[0] " alt="" srcset="" onClick={(e)=>Atrasd(publications[publications.length-1].id)} />
        )}
       <h2 className='inline-block nomEvent min-[600px]:text-center ml-auto mr-auto min-[1000px]:text-3xl  mb-2  hover:w-[60%] text-[#000] cursor-pointer text-xs text-[0.5rem]  sm:text-3xl'>{publications.length > 0 &&publications!=undefined ? publications[publications.length-1].nombreEvento : ''} </h2>
       {!ComentariosCardsd[publications[publications.length-1].id] &&(
                <img src="../../images/cambiar_foto_con.png" className="fotoCambBus cursor-pointer w-[80px] mr-[10px] hover:h-[65px]   inline-block relative right-[0] " alt="" srcset="" onClick={(e)=>foto_Txt_Bus(e,publications[publications.length-1].id)} />    )}
                </div>
                 <div className='h-[59vh]'>
                              
                              {EventosCardsBus[publications[publications.length-1].id]&&!ComentariosCardsd[publications[publications.length-1].id]&&(     <BusquedasCard  className='  top block ' key={publications[publications.length-1].id}   publicaciones={publications[publications.length-1]} autores={saberAut()
                       } />)}
                        {!EventosCardsBus[publications[publications.length-1].id]&&!ComentariosCardsd[[publications.length-1].id]&&(    <img
          src={`https://eventoscientificos-nxmx.onrender.com/static/${BusPdf(publications[publications.length-1].foto)}`}
          alt="Imagen"
          className='opas ml-auto mr-auto hiEl  h-[100%] w-[100%] '  
        
         />)}
                       </div>
  </article>
  </div> )
   
   }
   <div className=' xl:inline-flex'>
   {publications!=undefined&&publications[publications.length-2]!=undefined&&publications.length>0&&(
        <div>
         
         <article className='mt-32 relative ml-2 mb-4   active max-[660px]:right-[10vw]   max-[500px]:right-[5vw]  max-[438px]:right-[3vw] max-[420px]:right-[2vw] max-[410px]:right-[1vw]  xl:w-[23vw]   bg-[#6495ED]   max-[700px]:min-w-[90vw] max-[700px]:ml-12 max-[441px]:ml-8 max-[437px]:ml-4 max-[900px]:ml-auto max-[900px]:mr-auto'>
         <div className='flex  max-h-[55px] bg-[#94b8d7]'>
         {ComentariosCardsd[publications[publications.length-2].id] &&(
           <img src="../../images/atras-a-la-izquierda.png" className="fotoCamb cursor-pointer w-[80px] mr-[10px] hover:h-[65px]    relative right-[0] " alt="" srcset="" onClick={(e)=>Atrasd(publications[publications.length-2].id)} />
        )}
       <h2 className='inline-block nomEvent min-[600px]:text-center ml-auto mr-auto xl:text-xl mb-2  hover:w-[60%] text-[#000] cursor-pointer text-xs text-[0.5rem]  sm:text-3xl'>{publications.length > 0 &&publications!=undefined ? publications[publications.length-2].nombreEvento : ''} </h2>
       {!ComentariosCardsd[publications[publications.length-2].id] &&(
                <img src="../../images/cambiar_foto_con.png" className="fotoCambBus cursor-pointer w-[80px] mr-[10px] hover:h-[65px]   inline-block relative right-[0] " alt="" srcset="" onClick={(e)=>foto_Txt_Bus(e,publications[publications.length-2].id)} />    )}
                </div>
                 <div className='h-[59vh]'>
                              
                              {EventosCardsBus[publications[publications.length-2].id]&&!ComentariosCardsd[publications[publications.length-2].id]&&(     <BusquedasCard  className='  top block ' key={publications[publications.length-2].id}   publicaciones={publications[publications.length-2]} autores={saberAut()
                       } />)}
                        {!EventosCardsBus[publications[publications.length-2].id]&&!ComentariosCardsd[[publications.length-2].id]&&(    <img
          src={`https://eventoscientificos-nxmx.onrender.com/static/${BusPdf(publications[publications.length-2].foto)}`}
          alt="Imagen"
          className='opas ml-auto mr-auto hiEl  h-[100%] w-[100%] '  
        
         />)}
                       </div>
  </article>
  </div> )
   
   }  {publications!=undefined&&publications[publications.length-3]!=undefined&&publications.length>0&&(
    <div>
     
     <article className='mt-32 relative ml-2 mb-4   active max-[660px]:right-[10vw]   max-[500px]:right-[5vw]  max-[438px]:right-[3vw] max-[420px]:right-[2vw] max-[410px]:right-[1vw]  xl:w-[23vw]   bg-[#6495ED]    max-[700px]:min-w-[90vw] max-[700px]:ml-12 max-[441px]:ml-8 max-[437px]:ml-4 max-[900px]:ml-auto max-[900px]:mr-auto'>
     <div className='flex  max-h-[55px] bg-[#94b8d7]'>
     {ComentariosCardsd[publications[publications.length-3].id] &&(
       <img src="../../images/atras-a-la-izquierda.png" className="fotoCamb cursor-pointer w-[80px] mr-[10px] hover:h-[65px]    relative right-[0] " alt="" srcset="" onClick={(e)=>Atrasd(publications[publications.length-3].id)} />
    )}
   <h2 className='inline-block nomEvent min-[600px]:text-center ml-auto mr-auto min-[1000px]:text-3xl  mb-2  hover:w-[60%] text-[#000] cursor-pointer text-xs text-[0.5rem]  sm:text-3xl'>{publications.length > 0 &&publications!=undefined ? publications[publications.length-1].nombreEvento : ''} </h2>
   {!ComentariosCardsd[publications[publications.length-3].id] &&(
            <img src="../../images/cambiar_foto_con.png" className="fotoCambBus cursor-pointer w-[80px] mr-[10px] hover:h-[65px]   inline-block relative right-[0] " alt="" srcset="" onClick={(e)=>foto_Txt_Bus(e,publications[publications.length-3].id)} />    )}
            </div>
             <div className='h-[59vh]'>
                          
                          {EventosCardsBus[publications[publications.length-3].id]&&!ComentariosCardsd[publications[publications.length-3].id]&&(     <BusquedasCard  className='  top block ' key={publications[publications.length-3].id}   publicaciones={publications[publications.length-3]} autores={saberAut()
                   } />)}
                    {!EventosCardsBus[publications[publications.length-3].id]&&!ComentariosCardsd[[publications.length-3].id]&&(    <img
      src={`https://eventoscientificos-nxmx.onrender.com/static/${BusPdf(publications[publications.length-3].foto)}`}
      alt="Imagen"
      className='opas ml-auto mr-auto hiEl  h-[100%] w-[100%] '  
    
     />)}
                   </div>
</article>
</div> )

}

   </div>
         </div>
       
      </section>
   
      </div>
</>     
 )}

export default Index; 
  
