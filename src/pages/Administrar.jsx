
import {React,useEffect,useContext,useState} from 'react'
import { Link } from 'react-router-dom';
import { deletePersonas, getAllPersonas,  updatePersonas } from '../api/personas.api'
import axios  from 'axios';
import { createPublicaciones, deletePublicaciones, getAllPublicaciones,updatePublicaciones } from '../api/publicaciones';
import EmContext from './eventos/EmContext';
import { EventosCard } from '../components/EventosCard';
import { useNavigate } from 'react-router-dom';
import { ComentariosCard } from '../components/ComentariosCard';
import { createComentarios, getAllComentarios, updateComentarios } from '../api/comentarios';
import { deletePendientes, getAllPendientes } from '../api/pendientes';
import { deleteSolicitudes, getAllSolicitudes } from '../api/solicitudes';

const Administrar = () => {
  const [fileC,setFileC]=useState('')
  const {imgPas,setImgPas}=useState('');
  const navigate=useNavigate();
  const {em,setEm}=useContext(EmContext);
    const [fileNamePdf,setFileNamePdf]=useState('');
    const [fileNameImg,setFileNameImg]=useState('');
    /* console.log(em) */
    const [publicaciones,setPublicaciones]=useState('');

    const [cantPubl,setCantPubl]=useState('');
    const [imge,setImg]=useState('');
    const [pdf,setPdf]=useState('');

    const [dataLoaded, setDataLoaded] = useState(false);
    const [EventosCards, setEventosCards] = useState(false);


    const [numPub,setNumPub]=useState(0);
    const [autores,setAutores]=useState("");
    const [ComentariosCards,setComentariosCards]=useState(false);
  ;
    const [textCom,setTextCom]=useState('');
    const [comenPub,setComenPub]=useState('');

    let activado=false;
    let newLikes='';
    let emRep=0;

    const [veces,setVeces]=useState(0);

    const [publicacionesV,setPublicacionesV]=useState('');

    const [fileNamePdfP,setFileNamePdfP]=useState('');
    const [fileNameImgP,setFileNameImgP]=useState('');
    /* console.log(em) */
    const [publicacionesP,setPublicacionesP]=useState('');
    const [cantPublP,setCantPublP]=useState('');
    const [numPubP,setNumPubP]=useState(0);
    const [EventosCardsP, setEventosCardsP] = useState(false);
    const [imgeP,setImgP]=useState('');
    const [pdfP,setPdfP]=useState('');
  
    let numSol=0;

    const [solicitudes,setSolicitudes]=useState('');
    const [solicitudesCards,setSolicitudesCards]=useState(false);
    const [participantesCards,setParticipantesCards]=useState(false);
    let ayuda=[],ayuda2=[];

    function actualizar(){
      getAllPublicaciones().then(response => {
      setPublicacionesV(response.data);
        
        
      
       
        for(let i=0;i<response.data.length;i++){
          if(response.data[i].aprobada==true){
            ayuda.push(response.data[i])
         /*    console.log(response.data[i]) */
          }
          else{
            ayuda2.push(response.data[i])
          }
         }     


     
 console.log(ayuda)
setPublicaciones(ayuda) 
 setCantPubl(ayuda.length);    
 setPublicacionesP(ayuda2) 
 setCantPublP(ayuda2.length) ; 
})
.catch(error => {
  console.error(error);
}) 
    }
    useEffect(()=>{
      getAllSolicitudes().then(w=>{
        setSolicitudes(w.data);
      })
      getAllPublicaciones().then(response => {
        setPublicacionesV(response.data);
        
        
      
       
        for(let i=0;i<response.data.length;i++){
          if(response.data[i].aprobada==true){
            ayuda.push(response.data[i])
         /*    console.log(response.data[i]) */
          }
          else{
            ayuda2.push(response.data[i])
          }
         }     


     
 console.log(ayuda)
setPublicaciones(ayuda) 
 setCantPubl(ayuda.length);    
 setPublicacionesP(ayuda2) 
 setCantPublP(ayuda2.length);  
ayuda=[]
ayuda2=[]
})
.catch(error => {
  console.error(error);
})
    },
    []);
    useEffect(() => {

    /*   axios.get('https://eventoscientificos-nxmx.onrender.com/us/api/v1/usuario_activo/')
      .then(response => {
         console.log(response.data.nombre); // Aquí puedes manejar la respuesta
      })
      .catch(error => console.error('Error:', error)); */
        
          if(localStorage.getItem("email")!='erickmiralles362@gmail.com'){
              alert("Acceso prohibido,autentíquese ");
              navigate('/')
           /*  navigate("/") */
         /*  let valor=(localStorage.getItem("correo"));
          setEm(valor?JSON.parse(valor):""); */
          }
          else{
            localStorage.setItem("correo",JSON.stringify(em));
          }
          console.log(em);
       const fetchPub=()=>{
      
       
       
   
 
      getAllPersonas().then(res=>{
        setDataLoaded(true); 
        setAutores(res.data);
        console.log(autores);
      })
             
      ;};
 
       
     
      fetchPub()
   

    }, 
      
      []);
      
      useEffect(() => {
        if (dataLoaded){

         
        
}}, [numPub,publicaciones,numPubP,publicacionesP]);


const cambDirFoto=(num)=>{
  if(publicaciones[num].foto!=undefined&&publicaciones!=undefined&&publicaciones.length>0){
    const fotoUrl =
    publicaciones[num].foto;
    const urlFoto = new URL(fotoUrl);
    const pathFoto = urlFoto.pathname;
    const pathSegmentsFoto = pathFoto.split('/');
    /* setImg(fileNameImg);
    console.log(imge) */
    return(pathSegmentsFoto[pathSegmentsFoto.length - 1]);
        
       
       }

  }

const cambDirFotoP=(num)=>{
  if(publicacionesP[num].foto!=undefined&&publicacionesP!=undefined&&publicacionesP.length>0){
    const fotoUrl =
    publicacionesP[num].foto;
    const urlFoto = new URL(fotoUrl);
    const pathFoto = urlFoto.pathname;
    const pathSegmentsFoto = pathFoto.split('/');
    /* setImg(fileNameImg);
    console.log(imge) */
    return(pathSegmentsFoto[pathSegmentsFoto.length - 1]);
        
       
       }

  }

  const cambDirPdfS=(num)=>{
    
    if(num!=undefined&&num.pdf!=undefined&&solicitudes!=undefined&&solicitudes.length>0){
      const pdfUrl =
    num.pdf;
      const urlPdf = new URL(pdfUrl);
      const pathPdf = urlPdf.pathname;
      const pathSegmentsPdf = pathPdf.split('/');
            
      return(pathSegmentsPdf[pathSegmentsPdf.length - 1]);
          
          
         }

    }

  const cambDirPdf=(num)=>{
    
    if(publicaciones[num].pdf!=undefined&&publicaciones!=undefined&&publicaciones.length>0){
      const pdfUrl =
      publicaciones[num].pdf;
      const urlPdf = new URL(pdfUrl);
      const pathPdf = urlPdf.pathname;
      const pathSegmentsPdf = pathPdf.split('/');
            
      return(pathSegmentsPdf[pathSegmentsPdf.length - 1]);
          
         
         }

    }
  const cambDirPdfP=(num)=>{
    
    if(publicacionesP[num].pdf!=undefined&&publicacionesP!=undefined&&publicacionesP.length>0){
      const pdfUrl =
      publicacionesP[num].pdf;
      const urlPdf = new URL(pdfUrl);
      const pathPdf = urlPdf.pathname;
      const pathSegmentsPdf = pathPdf.split('/');
            
      return(pathSegmentsPdf[pathSegmentsPdf.length - 1]);
          
         
         }

    }


const cambDir=(num)=>{
 if(publicaciones[num]!=undefined){
  console.log(cantPubl>0?cantPubl:"");
 if(publicaciones.length>0){
   if(publicaciones[num].pdf ){
const pdfUrl =
publicaciones[num].pdf;
const urlPdf = new URL(pdfUrl);
const pathPdf = urlPdf.pathname;
const pathSegmentsPdf = pathPdf.split('/');

setFileNamePdf(pathSegmentsPdf[pathSegmentsPdf.length - 1]);
    
    setPdf(fileNamePdf);
    console.log(pdf);}
   }
   if(publicaciones[num].foto){
    const fotoUrl =
    publicaciones[num].foto;
    const urlFoto = new URL(fotoUrl);
    const pathFoto = urlFoto.pathname;
    const pathSegmentsFoto = pathFoto.split('/');
    
    setFileNameImg(pathSegmentsFoto[pathSegmentsFoto.length - 1]);
        
        setImg(fileNameImg);
        console.log(imge)
       }
  }

}
const cambDirP=(num)=>{
  if(publicacionesP[num]!=undefined){
   console.log(cantPublP>0?cantPublP:"");
  if(publicacionesP.length>0){
    if(publicacionesP[num].pdf ){
 const pdfUrl =
 publicacionesP[num].pdf;
 const urlPdf = new URL(pdfUrl);
 const pathPdf = urlPdf.pathname;
 const pathSegmentsPdf = pathPdf.split('/');
 
 setFileNamePdfP(pathSegmentsPdf[pathSegmentsPdf.length - 1]);
     
     setPdfP(fileNamePdfP);
     console.log(pdfP);}
    }
    if(publicacionesP[num].foto){
     const fotoUrl =
     publicacionesP[num].foto;
     const urlFoto = new URL(fotoUrl);
     const pathFoto = urlFoto.pathname;
     const pathSegmentsFoto = pathFoto.split('/');
     
     setFileNameImgP(pathSegmentsFoto[pathSegmentsFoto.length - 1]);
         
         setImgP(fileNameImgP);
         console.log(imgeP)
        }
   }
 
 }


 
  const foto_Txt=(e)=>{
    const $foto_publ=document.querySelector(".fotoCamb");
    if(e.target===$foto_publ){
      setEventosCards(!EventosCards)
    
     
      const currentSrc = $foto_publ.getAttribute("src");

      let newSrc = currentSrc === "../../images/cambiar_conv_foto.png" ? "../../images/cambiar_foto_con.png" : "../../images/cambiar_conv_foto.png";

      $foto_publ.setAttribute("src", newSrc);
  }

  console.log($foto_publ);
  

    
        
      console.log($foto_publ);
  }

       
  const foto_TxtP=(e)=>{
    const $foto_publ=document.querySelector(".fotoCambP");
    if(e.target===$foto_publ){
      setEventosCardsP(!EventosCardsP)
    
     
      const currentSrc = $foto_publ.getAttribute("src");

      let newSrc = currentSrc === "../../images/cambiar_conv_foto.png" ? "../../images/cambiar_foto_con.png" : "../../images/cambiar_conv_foto.png";

      $foto_publ.setAttribute("src", newSrc);
  }

/*   console.log($foto_publ);
  

    
        
      console.log($foto_publ); */
  }

    
   /*
   ("click",(e)=>{
    
  const $parent=document.querySelector(".padreEl");
  const $sab=document.querySelector(".hiEl");
  const $sabTag=$sab.tagName;
  console.log($sabTag);
  $sab.remove();
  const $hermanoAnt=document.querySelector(".nomEvent")
 const  $newCard=document.createElement("div");
 $newCard.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nesciunt vel dolore quibusdam incidunt sequi assumenda qui! Nisi nesciunt eligendi, adipisci expedita voluptatibus, accusantium iste obcaecati consequatur rem cum numquam!";
/*  $newCard.append(EventosCard()); */
/*$newCard.classList.add();
$hermanoAnt.after($newCard);
 
} )
  */
  function share() {
    // Datos a compartir
  
  const url = "www.facebook.com";
const nombre = "Texto a compartir";
const foto = "../../images/cora.png";

 // Encode the parameters for the sharing URL
 const urlEncoded = encodeURIComponent(url);
const nombreEncoded = encodeURIComponent(nombre);
const fotoEncoded = encodeURIComponent(foto);
 
// Generate the personalized sharing URL for Facebook
const mensaje = "Hola amigos, se les invita a este evento";
const mensajeEncoded = encodeURIComponent(mensaje);

// Generar la URL de compartir personalizada para Facebook
/* const shareUrl = `https://api.whatsapp.com/send?text=Hola sea bienvenido a este Evento 🌟%0A%0APara más información, visita: _*https://eventoscientificos-nxmx.onrender.com/pages/eventos*_` */
/* const shareUrl = https://www.facebook.com/sharer/sharer.php?u=${urlEncoded}&quote=${nombreEncoded}&picture=${fotoEncoded}; */
const shareUrl=`https://twitter.com/intent/tweet?text=Hola sea bienvenido a este Evento 🌟&url=https://eventoscientificos-nxmx.onrender.com/pages/eventos&via=Eventos Científicos&hastags=#eventos_cientificos`

/* const shareUrl=`http://www.linkedin.com/shareArticle?url=https://eventoscientificos-nxmx.onrender.com/pages/eventos` */

if (navigator.share) {
        navigator.share({
            title: nombre,
            url: url
        })
        .then(() => { 
            alert("Se ha compartido"); 
        }) 
        .catch(() => { 
            window.open(shareUrl, '_blank'); // Compartir a través de un enlace si la API no está disponible
        });
    } else {
        window.open(shareUrl, '_blank'); // Compartir a través de un enlace si la API no está disponible
    }
}
function saberAut(){
  for(let i=0;i<autores.length;i++){
   if(numPub!=undefined){
     if(autores[i].id==publicaciones[numPub].publicacionesPer){
       return autores[i].nombrePer;
     }
 }} 
 return ""
}
function saberAutP(){
   for(let i=0;i<autores.length;i++){
    if(numPubP!=undefined){
      if(autores[i].id==publicacionesP[numPubP].publicacionesPer){
        return autores[i].nombrePer;
      }
  }} 
  return ""
}

let i=0;/* para cuando lleguemos a la final volver al principio y to eso */
const mover=async(e)=>{
 
  if(document.querySelector(".slider-btns")&&document.querySelector(".next")&&document.querySelector(".prev")){
  const $nextBtn=document.querySelector(".slider-btns .next"),
  $prevBtn=document.querySelector(".slider-btns .prev");
  
      if(e.target===$prevBtn){         
      
        let el = numPub -1;
          if(el<0){
              el=cantPubl-1;
          }
      setNumPub(el); 
      cambDir(el); 
      }
      if(e.target===$nextBtn){
      
    let el = numPub + 1;
    if (el == cantPubl) {
      el = 0; 
    }
    setNumPub(el); 
      cambDir(el); 
          

  }
/*   setTimeout(() => {
    window.location.href = "#slider-slides"
  }, 10); */
}
}
const moverP=async(e)=>{
 
  if(document.querySelector(".slider-btns")&&document.querySelector(".nextP")&&document.querySelector(".prevP")){
  const $nextBtn=document.querySelector(".slider-btns .nextP"),
  $prevBtn=document.querySelector(".slider-btns .prevP");
  
      if(e.target===$prevBtn){         
      
        let el = numPubP -1;
          if(el<0){
              el=cantPublP-1;
          }
      setNumPubP(el); 
      cambDirP(el); 
      }
      if(e.target===$nextBtn){
      
    let el = numPubP + 1;
    if (el == cantPublP) {
      el = 0; 
    }
    setNumPubP(el); 
      cambDir(el)    

  }
  
}
setTimeout(() => {
  window.location.href = "#slider-slidesP"
}, 0);
}
const moverD = async () => {
  getAllPublicaciones().then(response => {
    setPublicacionesV(response.data);
    
    
  
   
    for(let i=0;i<response.data.length;i++){
      if(response.data[i].aprobada==true){
        ayuda.push(response.data[i])
     /*    console.log(response.data[i]) */
      }
     }     


 
console.log(ayuda)
setPublicaciones(ayuda) 
setCantPubl(ayuda.length);    
})
.catch(error => {
console.error(error);
})
  console.log(numPub);
  if (numPub !== undefined) {
    let el = 0;
 
    
        el = numPub + 1;
      
      if (el == cantPubl) {
        el = 0;
      } 

         
      
      
      setNumPub(el);
      cambDir(el);
    
  }
 setVeces(1);
 /*   */
}
const moverDP = async () => {

let cont=0;
  console.log(numPub);
  if (numPubP !== undefined) {
    let el = 0;
    
    
        el = numPubP + 1;
      
      if (el == cantPublP) {
        el = 0;
        cont++;
        
      }  
      setNumPubP(el);
      cambDirP(el);
   
  }
 
 /*   */
}

const Comentarios=(async(e)=>{
  

    
       
 
  setComentariosCards(true);
  document.querySelector(".slider-slides").classList.add("opacity-0");
  document.querySelector(".slider-slides").classList.add("invisble");

  document.querySelector(".slider-deso").classList.remove("ocultar"); 
 
  try{
 const re=await getAllComentarios();
 console.log(re.data);
setComenPub(re.data);
  }
  catch (error) {
    console.error('Error al recibir los comentarios:', error);
}

})


const Comentar=(async(e)=>{
  
  e.preventDefault();
  let fecha =new Date();
  let month=fecha.getMonth()+1;
  if(month<10){
    month=0+''+month;
  }
  console.log(month)
  let emailP="";
  if(em=="" || em==undefined || em==null){
    emailP='Invitado'
  } 
  else{
    emailP=em;
  }
console.log(fecha.getDate()+'-'+month +'-'+fecha.getFullYear());
  try {
    
    const r = await createComentarios( {
      
      "emailPer": emailP,
      "fechaPub": fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),
      "horaPub": fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds(),
      "comPub": publicaciones[numPub].id,
      "contenido":textCom
    });
    console.log('Comentario creado:', r.data);
    // Aquí puedes limpiar el formulario o redirigir al usuario
   
  } catch (error) {
    console.error('Error al crear el comentario:', error);
}
document.querySelector(".reiInp").value='';
Comentarios(e);
})



const Atras=(/* 2 atributos */)=>{
  setComentariosCards(false);
  document.querySelector(".slider-slides").classList.remove("opacity-0");
  document.querySelector(".slider-slides").classList.remove("invisble");

  document.querySelector(".slider-deso").classList.add("ocultar"); 
}


const Eliminar=(async()=>{
  let v=false;
  if(publicaciones[numPub]==publicaciones[publicaciones.length-1]){
    v=true;
  }
  let title='Publicación eliminada',contenido=`Su publicación ${publicaciones[numPub].nombreEvento} ha sido eliminada, lo sentimos`,resumen=''  ;
        let fecha =new Date();
        let month=fecha.getMonth()+1
  const accepted=confirm("¿Quieres borrar esa publicación?")
  if(accepted){
    getAllPersonas().then(res=>{
       
      setAutores(res.data);
      console.log(autores);
    })
    for(let i=0;i<autores.length;i++){
    
        if(autores[i].id==publicaciones[numPub].publicacionesPer){
          console.log('ja');
          try{
            await axios.put(`https://eventoscientificos-nxmx.onrender.com/personas/api/v1/personas/${autores[i].id}/`,{
                      ...autores[i],"cantNotificaciones":autores[i].cantNotificaciones+1                   })
            /* await axios.put(`https://eventoscientificos-nxmx.onrender.com/publications/api/v1/publications/${publicaciones[numPub].id}/`, { */
          }
         catch (error) {
          console.error('Error al obtener el nombre de usuario:', error);
      }
      try{
        await axios.post("https://eventoscientificos-nxmx.onrender.com/notifica/api/v1/notifica/",{
        "notificacionesPer":autores[i].id,
      "title":title,
       "contenido":contenido,
        "resumen":contenido.substring(0,20),
        "fechaNot":fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),
        "horaNot":fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()                 })
        
      }
     catch (error) {
      console.error('Error al crear la notificación:', error);
  }

  break;
        }
      
          
    }
    await deletePublicaciones(publicaciones[numPub].id)

    /* agregar una notificaci'on a la persona */
    /* agregar los datos a notificaciones y crear una notificación */
    alert("Publicación Borrada");
  }
  else{
   /*  alert("Algo falló"); */
  }
/*    window.location.href='#elPub' */
if(v==false){

     
  actualizar();
     }
   else{
    location.reload('#elPub') 
   }    

 /*  actualizar() */
       })

       const EliminarP=(async()=>{
        let v=false;
        if(publicacionesP[numPubP]==publicacionesP[publicacionesP.length-1]){
          v=true;
        }
        let title='Publicación rechazada',contenido=`Su publicación pendiente ${publicacionesP[numPubP].nombreEvento} no ha sido aprobada, lo sentimos`,resumen=''  ;
        let fecha =new Date();
        let month=fecha.getMonth()+1
        const accepted=confirm("¿Quieres borrar esa publicación pendiente?")
        if(accepted){
          getAllPersonas().then(res=>{
       
            setAutores(res.data);
            console.log(autores);
          })
          for(let i=0;i<autores.length;i++){
          
              if(autores[i].id==publicacionesP[numPubP].publicacionesPer){
                console.log('ja')
                console.log(publicacionesP[numPubP])
                try{
                  await deletePublicaciones(publicacionesP[numPubP].id);
                }
                catch(err){
                  console.log(err);
                }
                try{
                  await axios.put(`https://eventoscientificos-nxmx.onrender.com/personas/api/v1/personas/${autores[i].id}/`,{
                            ...autores[i],"cantNotificaciones":autores[i].cantNotificaciones+1                   })
                  /* await axios.put(`https://eventoscientificos-nxmx.onrender.com/publications/api/v1/publications/${publicaciones[numPub].id}/`, { */
                }
               catch (error) {
                console.error('Error al obtener el nombre de usuario:', error);
            }try{
              await axios.post("https://eventoscientificos-nxmx.onrender.com/notifica/api/v1/notifica/",{
              "notificacionesPer":autores[i].id,
            "title":title,
             "contenido":contenido,
              "resumen":contenido.substring(0,20),
              "fechaNot":fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),
              "horaNot":fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()                 })
              
            }
           catch (error) {
            console.error('Error al eliminar la notificación:', error);
        }
        break;
              }
            
                
          }
         /*  await deletePendientes(publicacionesP[numPubP].id)
     */   
          /* agregar una notificaci'on a la persona */
          /* agregar los datos a notificaciones y crear una notificación */
          alert("Publicación Borrada");
          
        }
        else{
         /*  alert("Algo falló"); */
        }
     /*  location.reload("#elPen") */
     if(v==false){

     
     actualizar();
        }
      else{
        location.reload("#elPen")
      }        })       
const Aprobar=(async()=>{
 let title='Publicación aprobada',contenido,resumen,hora;
 let fecha =new Date();
        let month=fecha.getMonth()+1
        const accepted = confirm("¿Quieres aprobar la solicitud de esa publicación?");
        if (accepted) {
          for(let i=0;i<autores.length;i++){
    
            if(autores[i].id==publicacionesP[numPubP].publicacionesPer){
              contenido=`Nos complace anunciarle que su publicación ${publicacionesP[numPubP].nombreEvento} ha sido aprobada con éxito, siga así 😊`
              console.log('ja')
              try{
                await axios.put(`https://eventoscientificos-nxmx.onrender.com/personas/api/v1/personas/${autores[i].id}/`,{
                          ...autores[i],"cantNotificaciones":autores[i].cantNotificaciones+1                   })
                /* await axios.put(`https://eventoscientificos-nxmx.onrender.com/publications/api/v1/publications/${publicaciones[numPub].id}/`, { */
              }
             catch (error) {
              console.error('Error al obtener el nombre de usuario:', error);
          } try{
            await axios.put(`https://eventoscientificos-nxmx.onrender.com/personas/api/v1/personas/68/`,{
                     "cantNotificaciones":autores[i].cantNotificaciones+1                   })
            /* await axios.put(`https://eventoscientificos-nxmx.onrender.com/publications/api/v1/publications/${publicaciones[numPub].id}/`, { */
          }
         catch (error) {
          console.error('Error al obtener el nombre de usuario:', error);
      }
          try{
            await axios.post("https://eventoscientificos-nxmx.onrender.com/notifica/api/v1/notifica/",{
            "notificacionesPer":autores[i].id,
          "title":title,
           "contenido":contenido,
            "resumen":contenido.substring(0,20),
            "fechaNot":fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),
            "horaNot":fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()                 })
            
          }
         catch (error) {
          console.error('Error al crear la notificación:', error);
      }
      try{
        await axios.post("https://eventoscientificos-nxmx.onrender.com/notifica/api/v1/notifica/",{
        "notificacionesPer":68,
      "title":"Ustes aprobó una publicación",
       "contenido":"Aprobaste una publicación del usuario, no pare de ateneder las otras solicitudes",
        "resumen":"Aprobaste una pub...",
        "fechaNot":fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),
        "horaNot":fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()                 })
        
      }
     catch (error) {
      console.error('Error al crear la notificación:', error);
  }

      break;
            }
          
              
        }
            try {
                const res =  axios.put(`https://eventoscientificos-nxmx.onrender.com/publications/api/v1/publications/${publicacionesP[numPubP].id}/`, {
                 
                "nombreEvento": publicacionesP[numPubP].nombreEvento,
                "lugar": publicacionesP[numPubP].lugar,
                "fechaEvento": publicacionesP[numPubP].fechaEvento,
                "limiteEntrega": publicacionesP[numPubP].limiteEntrega,
                "emailEvento": publicacionesP[numPubP].emailEvento,
                "enlace": publicacionesP[numPubP].enlace,
                "tematicas": publicacionesP[numPubP].tematicas,
                               
                "publicacionesPer": publicacionesP[numPubP].publicacionesPer,
        "aprobada": true,
      
                });
                console.log(res.data); 
            } catch (error) {
                console.error(error);
            }
     
            location.reload("elPen")
          }
     
 
})
       const EliminarUser=(async()=>{
        const accepted=confirm("¿Quieres borrar el usuario de esa publicación?")
              console.log(autores)
              console.log(publicaciones[numPub])
              if(accepted){
               
      
               for(let i=0;i<autores.length;i++){
                console.log(autores[i].id==publicaciones[numPub].publicacionesPer)
                if(autores[i].id=publicaciones[numPub].publicacionesPer){
                  await deletePersonas(autores[i].id);
                  await axios.post(`https://eventoscientificos-nxmx.onrender.com/us/api/v1/elAdm/`,{
                   'username': autores[i].email,
                  }) 
               
                      
             break;
                }
               }
      
               try{
                await axios.put(`https://eventoscientificos-nxmx.onrender.com/personas/api/v1/personas/68/`,{
                          "cantNotificaciones":autores[i].cantNotificaciones+1                   })
                /* await axios.put(`https://eventoscientificos-nxmx.onrender.com/publications/api/v1/publications/${publicaciones[numPub].id}/`, { */
              }
             catch (error) {
              console.error('Error al obtener el nombre de usuario:', error);
          }
                
                /* agregar una notificaci'on a la persona */
                /* agregar los datos a notificaciones y crear una notificación */
                alert("El usuario y sus publicaciones fueron borradas");
                location.reload("#elPub")
              }
              else{
            
              }
       /*  location.reload() */
    /*    const newPer=await getAllPersonas();
console.log(newPer)
setAutores(newPer.data) ; */

             })
             const EliminarUserP=(async()=>{
              const accepted=confirm("¿Quieres borrar el usuario de esa publicación?")
              console.log(autores)
              console.log(publicacionesP[numPubP])
              if(accepted){
               
      
               for(let i=0;i<autores.length;i++){
                console.log(autores[i].id==publicacionesP[numPubP].publicacionesPer)
                if(autores[i].id==publicacionesP[numPubP].publicacionesPer){
                  
                   await deletePersonas(autores[i].id); 
                   await axios.post(`https://eventoscientificos-nxmx.onrender.com/us/api/v1/elAdm/`,{
                   'username': autores[i].email,
                  })   
                  console.log(autores[i].id,autores[i].email);
                  break;
                }
             
               }
               
      
                
                /* agregar una notificaci'on a la persona */
                /* agregar los datos a notificaciones y crear una notificación */
               alert("El usuario y sus publicaciones fueron borradas");
              }
              else{
             
              }
             /*   location.reload('#pendientes') */
             const newPer=await getAllPersonas();
console.log(newPer)
setAutores(newPer.data) ;
location.reload("#elPen")
                    })
const Solicitudes=()=>{
  document.querySelector('.obtImg').classList.add("opacity-30");
  
 setParticipantesCards(true)
}
const AcepSoli=async(numSol)=>{
console.log(numSol)

const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#';
let enlace = '';
let fecha =new Date();
let month=fecha.getMonth()+1
if(month<10){
  month=0+''+month;
}
// Generar el enlace aleatorio
for (let i = 0; i < 8; i++) {
    // Seleccionar un carácter aleatorio del conjunto
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    enlace += caracteres[indiceAleatorio];
}
let contenido=`Su participación en el evento ${publicaciones[numPub].nombreEvento} ha sido aprobada, este es su enlace de invitación: ${enlace}, no lo pierda  `;
for(let i=0;i<autores.length;i++){



  if(autores[i].email==numSol.emailPer){
    await deleteSolicitudes(numSol.id);
    try{
      await axios.post("https://eventoscientificos-nxmx.onrender.com/notifica/api/v1/notifica/",{
      "notificacionesPer":autores[i].id,
    "title":"Participación aprobada",
     "contenido":contenido,
      "resumen":contenido.substring(0,20),
      "fechaNot":fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),
      "horaNot":fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()                 })
      
    }
   catch (error) {
    console.error('Error al crear la notificación:', error);
}
try{
  const re=await getAllSolicitudes();
  setSolicitudes(re.data);
   }
   catch (error) {
     console.error('Error al recibir las solicitudes pendientes:', error);
 } 
    break;
  }
};

}

const RechaSoli=async(numSol)=>{
  
console.log(numSol)

let fecha =new Date();
let month=fecha.getMonth()+1
if(month<10){
  month=0+''+month;
}
let contenido=`Su participación en el evento ${publicaciones[numPub].nombreEvento} ha  sido rechazada, lo sentimos`
for(let i=0;i<autores.length;i++){



  if(autores[i].email==numSol.emailPer){
    await deleteSolicitudes(numSol.id);
    try{
      await axios.post("https://eventoscientificos-nxmx.onrender.com/notifica/api/v1/notifica/",{
      "notificacionesPer":autores[i].id,
    "title":"Participación rechazada",
     "contenido":contenido,
      "resumen":contenido.substring(0,20),
      "fechaNot":fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),
      "horaNot":fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()                 })
      
    }
   catch (error) {
    console.error('Error al crear la notificación:', error);
}
try{
  const re=await getAllSolicitudes();
  setSolicitudes(re.data);
   }
   catch (error) {
     console.error('Error al recibir las solicitudes pendientes:', error);
 } 
    break;
  }
};


  }
  const convAtr=()=>{
    document.querySelector('.obtImg').classList.remove("opacity-30");
    setParticipantesCards(false)
   }

   const ElTabla=async(user)=>{
    const accepted=confirm("¿Quieres borrar el usuario de esa publicación?")
   
    if(accepted){
     

     for(let i=0;i<autores.length;i++){
     
      if(autores[i].id==user.id){
        await axios.post(`https://eventoscientificos-nxmx.onrender.com/us/api/v1/elAdm/`,{
         'username': autores[i].email,
        }) 
        await deletePersonas(autores[i].id);
            
   break;
      }
     }


      
      /* agregar una notificaci'on a la persona */
      /* agregar los datos a notificaciones y crear una notificación */
      alert("El usuario y sus publicaciones fueron borradas");
    }
    else{
    alert("Algo falló");
    }
const newPer=await getAllPersonas();
console.log(newPer)
setAutores(newPer.data) ;
   }
  return (
     <div className='  w-[101vw] mt-4  bg-[#7498b6] h-[500vh]  min-[1000px]:h-[400vh]  '>
       
      
      <h1 className=' max-w-[200px]  text-center bg-slate-500 ml-auto mr-auto'>Bienvenido Jefe</h1>
{participantesCards&&(
  <table className='z-50 max-w-[750px]  mt-[20vh] ml-[15vw] w-[31vw] max-[1681px]:w-[519.25px] min-h-[400px] max-[800px]:ml-[10vw] max-[710px]:ml-[8vw] max-[630px]:ml-[7vw] max-[610px]:ml-[5vw] max-[590px]:ml-0  absolute h-[65vh] scroll-auto overflow-auto  max-[515px]:ml-4 max-[515px]:w-[403.19px] max-[420px]:ml-0 max-[420px]:w-[98vw]'>
  <div className='h-[10rem] top-[5rem] w-[inherit] relative bg-[#c4dafa] '>
  <img src="../../images/hacia-atras.png" className='h-8 ml-4 mt-4 convAtr cursor-pointer hover:h-10 inline-block' onClick={convAtr} alt="" />
<caption className='font-light italic  relative text-2xl text-center w-[inherit] bottom-3'>Solicitudes</caption>
</div>

<div className='bg-[#c4dafa] relative scroll-auto  overflow-auto max-h-[450px]'>

<tr className='relative top-4  '>
    
    <th className='ml-20 max-[515px]:text-xs inline-block max-[515px]:ml-16' >Usuario</th>
    <th className='ml-12 max-[515px]:text-xs inline-block max-[420px]:ml-4'>Modalidad</th>
    <th className='ml-4 max-[515px]:text-xs inline-block max-[420px]:ml-1'>Pdf Participativo</th>
    <th className='ml-4 max-[515px]:text-xs inline-block max-[420px]:ml-1'>Acción</th>
   
  </tr>
 
{ cantPubl > 0 && publicaciones[numPub] !== undefined && solicitudes.map(solicitud => solicitud.solPub == publicaciones[numPub].id && (
    <p className='text-sm max-[515px]:text-xs mt-8 ' key={solicitud.id}>
        <span className='mr-4 inline-block  ml-4 max-[515px]:mr-2 max-[515px]:ml-2 max-[448px]:ml-1 max-[420px]:ml-0 max-[420px]:mr-0 min-[1400px]:w-[176.48px]'>{solicitud.emailPer}</span>
        <p  className='mr-4 max-[420px]:mr-1 capitalize max-[515px]:mr-2 inline-block font-black '>{solicitud.modalidad}</p>
        <span  className='mr-4 max-[420px]:mr-1 max-[515px]:mr-2 inline-block'>{solicitud.pdf!=""&&solicitud.pdf!=null?<div className=" inline-block  cursor-pointer">
<a href={publicaciones.length > 0 ? `https://eventoscientificos-nxmx.onrender.com/static/${cambDirPdfS(solicitud)}`:''} target='blank'  rel="noopener noreferrer" download="jornada_cientifica.pdf">
<img src="../../images/icon_download.jpg" className=' max-h-[50px]  inline-block max-[420px]:w-4' alt="" />
<span  className='ml-1 cursor-pointer text-blue-500  inline-block'>Descargar</span></a>
</div>
:<span className='ml-1'>Solo participación</span>}</span>
        
        <img onClick={() => AcepSoli(solicitud)} src="../../images/aceptar.png"  className='cursor-pointer inline-block w-8 mr-4 max-[515px]:w-4 max-[515px]:mr-2 max-[420px]:mr-1'  alt="" />
         <img onClick={() => RechaSoli(solicitud)} src="../../images/cancelar3.png" className='mb-[1rem] cursor-pointer mr-4 inline-block w-8 mt-4 max-[515px]:w-4 max-[420px]:mr-0' alt="" srcset="" />        </p>
))}
<h1 className='h-[3rem]'></h1>
</div>
</table>
)}
    
        <section className='mt-8 ml-4 mr-4 slider'>
{/*         <div class="sharethis-inline-share-buttons"></div> */}
      <div id='elPub' className="slider-slides ml-[20vw] ">
 <h2 className='text-center min:665px:text-4xl mr-[1.754rem] text-2xl bg-[transparent] min-[1500px]:text-6xl  min-[1500px]:mr-60  font-mono min:665px:mr-48  mb-8 xl:text-left '>Administra los Eventos Publicados</h2>
        <article className='aprobadas padreEl  absolute slider-slide active max-[660px]:right-[10vw]   max-[500px]:right-[5vw]  max-[438px]:right-[3vw] max-[420px]:right-[2vw] max-[410px]:right-[1vw]  w-[60vw]   bg-[#6495ED]   min-w-[400px] max-[400px]:min-w-[100vw] '>
          <div className='flex max-h-[65px] max-[1000px]:max-h-[90px]  bg-[#94b8d7]'>
         {publicaciones.length > 0&& autores!=undefined&& autores.length > 0  &&publicaciones[numPub]!=undefined   &&!ComentariosCards&&!participantesCards &&(
          <button onClick={Solicitudes} className='relative hover:h-[50px] h-[40px] max-[1502px]:text-lg max-[1380px]:text-base  max-[1380px]:w-[15%] max-[1030px]:w-[20%] max-[814px]:left-0 border-double border-[5px] border-blue-400 left-4 w-[12%] max-[730px]:text-sm min-w-[76.59px]  text-xl cursor-pointer shadow-green-300 shadow-lg hover:text-blue-500 bg-white'>Solicitudes</button>
         )}
                <h2 className='inline-block  nomEvent text-center ml-auto mr-auto text-3xl  mb-2  hover:w-[60%] text-[#000] cursor-pointer '>{publicaciones.length > 0 &&publicaciones[numPub]!=undefined ? publicaciones[numPub].nombreEvento : 'No hay publicaciones'} </h2>
                
              { publicaciones.length > 0&& autores!=undefined&& autores.length > 0  &&publicaciones[numPub]!=undefined   && (
                <img src="../../images/cambiar_foto_con.png" className="fotoCamb cursor-pointer w-[80px] mr-[10px] hover:h-[65px]   inline-block relative right-[0] " alt="" srcset="" onClick={foto_Txt} />
                )}
                  </div>
                 
                {cantPubl>0 && !EventosCards &&publicaciones[numPub]!=undefined&&(
        <img
            
        onChange={(e)=>setImgPas(e)}
          src={`https://eventoscientificos-nxmx.onrender.com/static/${cambDirFoto(numPub)}`}
          alt="Imagen"
          className='obtImg ml-auto mr-auto hiEl  h-[80vh] w-[100%] max-h-[744px]'  
        
        />
      )}
      
      {EventosCards && cantPubl>0 && publicaciones[numPub]!=undefined&& <EventosCard key={publicaciones.id} publicaciones={publicaciones[numPub]} autores={saberAut()}/>}
                

      {publicaciones.length > 0&& autores!=undefined&& autores.length > 0  &&publicaciones[numPub]!=undefined  &&(
  
  <div className='fotos absolute inline-flex  min-h-[75px] justify-start    border-t  w-[inherit] border-orange-400 bg-white min-w-[400px] max-[400px]:min-w-[100vw]'>
                
  <div className="ml-4 container inline cursor-pointer" onClick={Eliminar}>                <img src="../../images/cancelar3.png"  className='max-h-[50px] inline cursor-pointer max-[1241px]:block'  /* onClick={share} */></img> <span className='cursor-pointer ml-1 hover:text-red-400'>Eliminar</span>
  </div>
  <div className="container inline cursor-pointer mr-[2vw] "onClick={(e)=>Comentarios(e)} >
   <img src="../../images/comentario.png"    className='max-[1241px]:block  max-h-[50px] h-[200px] inline '  ></img>
  <span className='ml-1 cursor-pointer hover:text-blue-400'>Comentarios</span>
  </div> 
  <div className="container inline cursor-pointer">
  <a href={publicaciones.length > 0 ? `https://eventoscientificos-nxmx.onrender.com/static/${cambDirPdf(numPub)}`:''} target='blank'  rel="noopener noreferrer" download="jornada_cientifica.pdf">
    <img src="../../images/icon_download.jpg" className='max-[1241px]:block max-h-[50px] inline' alt="" /></a>
 <span  className='ml-1 cursor-pointer hover:text-gray-500'>Descargar</span>
  </div>
  <div className="container inline cursor-pointer  "onClick={()=>EliminarUser()}>                <img src="../../images/delete-user.png"  className='max-h-[50px] inline cursor-pointer max-[1241px]:block'  ></img> <span className='cursor-pointer ml-1'>Eliminar Usuario</span>
  </div>
</div>
      )}
            
</article>

 </div>
 <div className="slider-deso ml-[20vw] ocultar ">
     
     <article className='padreEl absolute slider-slide2 active max-[660px]:right-[10vw]   max-[500px]:right-[5vw]  max-[438px]:right-[3vw] max-[420px]:right-[2vw] max-[410px]:right-[1vw]  w-[60vw]   bg-[#6495ED]   min-w-[400px] max-[400px]:min-w-[100vw] '>
<div className='absolute flex max-h-[55px]  bg-[#6495ED]    min-w-[400px] max-[400px]:min-w-[100vw] w-[60vw]'>
<img src="../../images/atras-a-la-izquierda.png" className="fotoCamb cursor-pointer w-[80px] mr-[10px] hover:h-[65px]    relative right-[0] " alt="" srcset="" onClick={Atras} />
<h2 className='inline-block nomEvent text-center ml-auto mr-auto text-3xl  mb-2  hover:w-[60%] text-[#000] cursor-pointer '>{publicaciones.length > 0 &&publicaciones[numPub]!=undefined ? publicaciones[numPub].nombreEvento : ''} </h2>
</div>
  <div className='fondo-chat block ml-auto mr-auto  overflow-y-auto  overflow-x-hidden   mt-20 h-[90vh] w-[100%] max-h-[844px]'>
     {cantPubl>0 && !ComentariosCards &&(
    <h3 className='text-center mt-16 '>No hay Comentarios </h3>
      )}
       
      {ComentariosCards && cantPubl>0 && publicaciones[numPub]!=undefined&& comenPub!=undefined&& comenPub.length>0&& comenPub.map(comentario=>( 
        <ComentariosCard className='relative top ' key={publicaciones.id}   comentarios={comentario.comPub===publicaciones[numPub].id?comentario:""} autores={saberAut()
         } />)) }
<h2 className='w-[200px] h-[150px]'></h2>
  </div>
  
  <div className='bg-white '>
  <input type="text" className="inline reiInp h-[6vh] mt-4 w-[87%] max-h-[844px] text-base min-[925px]:text-lg  min-[1116px]:ml-8 min:[414px]:ml-4 ml-2 min-[1300px]:text-2xl"    onChange={(e)=>setTextCom(e.target.value)}/>

  <img src="../../images/enviar.png" alt="fondo chat" className='ml-2 inline w-[7%] h-[50px]'  onClick={Comentar} />
  </div> 
    </article>

  </div> 
  { publicaciones.length > 0&& autores!=undefined&& autores.length > 0  &&publicaciones[numPub]!=undefined   && (
 <div className="slider-btns w-[92.6vw] relative top-[50vh] max-[1070px]:w-[93vw] max-[675px]:w-[91.5vw]   max-[655px]:w-[99vw] max-[410px]:w-[105vw]">
                    <a className="prev text-[#87CEEB] inline-block w-auto ml-[20vw] max-[675px]:ml-[22.5vw]  max-[660px]:ml-[26vw] max-[572px]:ml-[17vw] max-[410px]:ml-[0vw]" onClick={mover} href="#">&laquo;</a>
                    <a className="next text-[#87CEEB]" onClick={mover} href="#">&raquo;</a>
                </div>)}
</section>
<section id='sliderP' className='mt-16  ml-4 mr-4 slider relative top-[1000px] max-[340px]:top-[900px] min-[1500px]:top-[1000px]'>
      
      <div id='elPen' className="slider-slides ml-[20vw] ">
      <h2 className='text-center min:665px:text-4xl mr-[1.754rem] text-2xl bg-[transparent] min-[1500px]:text-6xl  min-[1500px]:mr-60  font-mono min:665px:mr-48  mb-8 '>Eventos Pendientes</h2>
        <article className='padreEl pendientes  absolute slider-slide active max-[660px]:right-[10vw]   max-[500px]:right-[5vw]  max-[438px]:right-[3vw] max-[420px]:right-[2vw] max-[410px]:right-[1vw]  w-[60vw]   bg-[#6495ED]   min-w-[400px] max-[400px]:min-w-[100vw] '>
   
          <div id='slider-slidesP' className='flex max-h-[55px] max-[1000px]:max-h-[85px] bg-[#f5f5f5]'>
            
                <h2 className='inline-block nomEvent text-center ml-auto mr-auto text-3xl  mb-2  hover:w-[60%] text-[#000] cursor-pointer '>{publicacionesP.length > 0&& publicacionesP!=undefined && publicacionesP!=undefined &&publicacionesP[numPubP]!=undefined ? publicacionesP[numPubP].nombreEvento : 'No hay eventos pendientes'} </h2>
                {publicacionesP.length > 0&& publicacionesP!=undefined && publicacionesP!=undefined&&publicacionesP.length>0&& autores!=undefined&& autores.length > 0  &&publicacionesP[numPubP]!=undefined&&(
                <img src="../../images/cambiar_foto_con.png" className="fotoCambP cursor-pointer w-[80px] mr-[10px] hover:h-[65px]   inline-block relative right-[0] " alt="" srcset="" onClick={foto_TxtP} />
                )}</div>
                {publicacionesP.length > 0&& autores!=undefined&& autores.length > 0  &&publicacionesP[numPubP]!=undefined  && !EventosCardsP &&(
        <img id='fotoObtener'
          src={`https://eventoscientificos-nxmx.onrender.com/static/${cambDirFotoP(numPubP)}`}
          alt="Imagen"
          className=' ml-auto mr-auto hiEl  h-[80vh] w-[100%] max-h-[744px]'  
        
        />
      )}

      {EventosCardsP && publicacionesP.length > 0&& autores!=undefined&& autores.length > 0  &&publicacionesP[numPubP]!=undefined && <EventosCard  key={publicaciones.id} publicaciones={publicacionesP[numPubP]} autores={saberAutP()}/>}
                


              {publicacionesP.length > 0&& autores!=undefined&& autores.length > 0  &&publicacionesP[numPubP]!=undefined   && (
<div className='fotos absolute inline-flex  min-h-[75px] justify-start    border-t  w-[inherit] border-orange-400 bg-white min-w-[400px] max-[400px]:min-w-[100vw]'>
                
                <div id='elPen' className="container" onClick={Aprobar}>
                  
                
        <img
          src="../../images/aceptar.png"
          alt="Imagen"
          className="ml-4 cursor-pointer max-h-[50px] h-[200px] inline max-[1126px]:block"
        
        />
      {/*   <span className='relative bottom-[2.7rem] text-[#000080] left-[8vw] min-[350px]:left-[7.5vw] min-[390px]:left-[7.2vw] min-[400px]:left-[7vw] min-[425px]:left-[6.5vw] min-[480px]:left-[6vw] min-[500px]:left-[5.6vw] min-[540px]:left-[5vw] min-[600px]:left-[4.7vw] min-[650px]:left-[4.3vw] min-[700px]:left-[3.7vw] min-[800px]:left-[3.3vw] min-[860px]:left-[3vw] min-[900px]:left-[2.7vw] min-[1128px]:bottom-[.3rem] min-[1128px]:left-[-2.2rem] '>5</span> */}
      <span   className='w-[20px] azulGusta ml-2 cursor-pointer hover:text-green-300'  >Aprobar</span> 
                </div>
                
                <div className="container inline cursor-pointer">
                <a href={publicacionesP.length > 0 ? `https://eventoscientificos-nxmx.onrender.com/static/${cambDirPdfP(numPubP)}`:''} target='blank'  rel="noopener noreferrer" download="jornada_cientifica.pdf">
                  <img src="../../images/icon_download.jpg" className='max-h-[50px] inline max-[1128px]:block' alt="" /></a>
               <span  className='ml-1 cursor-pointer'>Descargar</span>
                </div>
                <div className="container inline cursor-pointer" onClick={()=>EliminarUserP()}>
                
                  <img src="../../images/delete-user.png" className='max-h-[50px] inline max-[1128px]:block' alt=""></img>
               <span  className='ml-1 cursor-pointer'>Eliminar Usuario</span>
                </div>
                <div className="container inline cursor-pointer"  onClick={EliminarP} >                <img src="../../images/cancelar3.png"  className='max-h-[50px] max-[1128px]:block inline cursor-pointer'  /* onClick={share} */></img> <span className='cursor-pointer ml-1 hover:text-red-400'>Eliminar</span>
                </div>
</div>
              )}
                
</article>
</div>

  { publicacionesP.length > 0&& autores!=undefined&& autores.length > 0  &&publicacionesP[numPubP]!=undefined  && !EventosCards && (
  <div id='slider-btnsP' className="slider-btns w-[93vw] relative top-[50vh]   ">
                    <a className="prevP inline-block text-[#87CEEB] w-auto ml-[20vw] max-[675px]:ml-[22.5vw]  max-[660px]:ml-[26vw] max-[572px]:ml-[17vw] max-[410px]:ml-[0vw]" onClick={moverP} href="#">&laquo;</a>
                    <a className="nextP text-[#87CEEB]" onClick={moverP} href="#">&raquo;</a>
                </div>)}

                
</section>
<h2 className='text-center xl:text-4xl max-w-[650px] min-[870px]:ml-[2vw] min-[900px]:ml-auto min-[900px]:mr-auto mt-16 w-[100vw] min-[600px]:w-[85vw] min-[600px]:ml-[4vw] slider relative top-[2000px] max-h-[800px]   min-[1300px]:min-w-[900px]'>Administre las Personas</h2>
 
<section id='sliderP' className='max-w-[650px] min-[870px]:ml-[2vw] min-[900px]:ml-auto min-[900px]:mr-auto mt-16 w-[100vw] min-[600px]:w-[85vw] min-[600px]:ml-[4vw] slider relative top-[2000px] max-h-[800px]  overflow-auto scroll-auto bg-slate-400 est min-[1300px]:min-w-[900px]' >
   <div className='min-[600px]:ml-4 inline-flex w-[90vw] max-w-[600px] min-[800px]:ml-2 min-[1300px]:min-w-[650px]'>
  <h2 className=' italic text-center ml-auto mr-auto min-[1300px]:left-40 relative '>Administrar Personas</h2>
  <a className='relative min-[600px]:mr-24 min-[700px]:mr-20 min-[800px]:mr-4' href="https://eventoscientificos-nxmx.onrender.com/admin/" target='blank'> <button className='relative bg-[#557986] cursor-pointer   w-[133%]  min-[1300px]:left-[12.6rem] hover:text-white'> Base de datos</button></a>
  </div>
 <table className='w-[85vw] h-[50vh] max-h-[400px] overflow-auto scroll-auto max-w-[650px] min-[1300px]:min-w-[900px]'>
  <tr className='  w-full bg-blue-50  inline-block max-w-[690px] sticky top-0 left-0 z-50 min-[1300px]:min-w-[900px]'>
    
    <th className='ml-5 text-xs  min-[400px]:text-sm inline-block min-[700px]:ml-16 min-[1300px]:ml-24' >Usuario</th>
    <th className='ml-5 text-xs min-[400px]:ml-[10vw]  min-[400px]:text-sm inline-block min-[450px]:ml-[4rem] min-[500px]:ml-[6.7rem] min-[600px]:ml-[8.7rem] min-[700px]:ml-[7rem] min-[800px]:ml-[9rem] min-[1300px]:ml-[11rem]'>Errores en Contraseña</th>
    <th className='ml-2 text-xs min-[400px]:ml-[2vw]  min-[400px]:text-sm inline-block min-[450px]:ml-[2rem] min-[600px]:ml-[1rem] min-[700px]:ml-[2rem] min-[800px]:ml-[4rem] min-[1300px]:ml-[8rem]'>Trabajador</th>
    <th className='ml-4 text-xs  min-[400px]:text-sm inline-block  min-[600px]:ml-4 min-[700px]:ml-[3rem] min-[1300px]:ml-[8rem]'>Acción</th>
   
  </tr> 

  {autores.length>0&&autores.map(persona=>persona.email!='erickmiralles362@gmail.com'&&(
     <div className='max-w-[690px] min-[1300px]:min-w-[900px]'>
    
    <div className='h-4 bg-blue-200 w-fullmax-w-[690px] min-[1300px]:min-w-[900px]'></div>
  <tr className='relative w-[100vw] bg-blue-50  inline-block max-w-[690px] min-[1300px]:min-w-[900px]'>
    
    
    <th className='text-[0.5rem]  min-[400px]:text-[0.6rem] inline-block max-[400px]:w-[95.25px]  max-[600px]:w-[105.25px] min-[600px]:text-xs min-[600px]:w-[115.25px] min-[700px]:text-sm min-[700px]:ml-4 min-[800px]:text-[.9rem] min-[1300px]:ml-16' >{persona.email} </th>
    <th className='text-xs  min-[400px]:text-sm inline-block max-[400px]:w-[125.58px] max-[600px]:w-[150px] min-[600px]:w-[200px] min-[450px]:ml-[3rem] min-[500px]:ml-[4rem] min-[800px]:ml-[7rem]'>{persona.equivocaciones}</th>
    <th className='ml-6 text-xs  min-[400px]:text-sm inline-block min-[400px]:ml-[8vw] min-[450px]:ml-[2.5rem] min-[500px]:ml-[3.8rem] min-[600px]:ml-[.8rem] min-[700px]:ml-12 min-[800px]:ml-[3.3rem] min-[1300px]:ml-[8rem]'>{persona.esTrabajador?"Sí":"No"}</th>
    <th  onClick={() => ElTabla(persona)} className='ml-14  inline-block min-[600px]:ml-[3.3rem] min-[1300px]:ml-[9rem]'> <img src="../../images/cancelar3.png" className='mb-[1rem] cursor-pointer inline-block w-8 mt-4 max-[515px]:w-4 min-[700px]:ml-[1.55rem] ' alt="" srcset="" /> </th>
   
  </tr>
  </div>
 ) )}
  
  </table></section>
</div>
  )
}

export default Administrar
