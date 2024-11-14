import {React,useEffect,useContext,useState} from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { getAllPersonas } from '../api/personas.api'
import axios  from 'axios';
import { getAllPublicaciones,updatePublicaciones } from '../api/publicaciones';
import EmContext from './eventos/EmContext';
import { EventosCard } from '../components/EventosCard';
import { useNavigate } from 'react-router-dom';
import { ComentariosCard } from '../components/ComentariosCard';
import { createComentarios, getAllComentarios, updateComentarios } from '../api/comentarios';
import { BusquedasCard } from '../components/BusquedaCard';
const genArray=(length,defArray)=>{
  return Array.from({length},()=>defArray);
}
const quitarTildes=(cadena)=>{
  const Tildes={
    "á":"a",
    "é":"e",
    "í":"i",
     "ó":"o",
     "ú":"u",
     "Á":"A",
     "É":"E",
     "Í":"I",
     "Ó":"O",
     "Ú":"U"
  }
  return cadena.replace(/[áéíóúÁÉÍÓÚ]/g,
  letra=>Tildes[letra]||letra);
}
const Eventos = ({}) => {
  let fechaA=new Date();
  let monthA=fechaA.getMonth()+1;
  if(monthA<10){
    monthA=0+''+monthA;
  }
  let jaj;
  const {register,handleSubmit,formState:{
    errors
}}=useForm();
  const navigate=useNavigate();
  const {em,setEm}=useContext(EmContext);
  const [cambio,setCambio]=useState(false);
  const [fileNamePdf,setFileNamePdf]=useState('');
    const [fileNameImg,setFileNameImg]=useState('');
    /* console.log(em) */
    const [publicaciones,setPublicaciones]=useState('');
    const [publicacionesV,setPublicacionesV]=useState('');
    const [publicacioness,setPublicacioness]=useState([]);
    const [cantPubl,setCantPubl]=useState('');
    const [imge,setImg]=useState('');
    const [pdf,setPdf]=useState('');
    const [fotoFoto,setFotoFoto]=useState('');
    const [mensaje, setMensaje] = useState('');
    const [dataLoaded, setDataLoaded] = useState(false);
    const [veces,setVeces]=useState(0);
    const [EventosCards, setEventosCards] = useState(false);
    const [EventosCardsBus, setEventosCardsBus] = useState(()=>genArray(1000,false));
    const [BusquedaCards,setBusquedaCards]=useState(false);
    const [numPub,setNumPub]=useState(0);
    const [autores,setAutores]=useState("");
    const [foto_Publ,setFoto_Publ]=useState("../../images/cambiar_foto_con.png");
    const [num_Likes,setNum_Likes]=useState(0);
    const [ComentariosCards,setComentariosCards]=useState(false);
    const [ComentariosCardsd,setComentariosCardsd]=useState(()=>genArray(1000,false));
    const [textCom,setTextCom]=useState('');
    const [comenPub,setComenPub]=useState('');
    const [comenPubB,setComenPubB]=useState('');
    const [refresh,setRefresh]=useState(false);
    const [reloadKey,setReloadKey]=useState(0);
    const [redSocial,setRedSocial]=useState(false);
    const [redSocial2,setRedSocial2]=useState(()=>genArray(1000,false));
    const [modo,setModo]=useState('Invitado');
    const [pdfPar,setPdfPar]=useState('');
    const [textoPdf,setTextoPdf]=useState('');
    let activado=false;
    let newLikes='';
    let emRep=0;
    let ayuda=[];
    const [participaCard,setParticipaCard]=useState(false);
    useEffect(() => {
      const handleClick = (e) => {
        let val1 = e.target.classList.contains('redSocial');
        
        if (!val1 && !e.target.classList.contains('comp')) {
          setRedSocial(false);
        } else {
          setRedSocial(true);
        }
      };
 
      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, []); 
 

   
    useEffect(() => {
     
      if(em==""){
        /*  navigate("/") */
     let valor=(localStorage.getItem("email"));
       setEm(valor?(valor):""); 
       }
       else{
         localStorage.setItem("correo",JSON.stringify(em));
       }
      
  }, []);
    useEffect(() => {
        
        
          if(em==""){
           /*  navigate("/") */
         /*  let valor=(localStorage.getItem("correo"));
          setEm(valor?JSON.parse(valor):""); */
          }
          else{
            localStorage.setItem("correo",JSON.stringify(em));
          }
          console.log(em);
          
       const fetchPub=()=>{
       

        
       getAllPublicaciones().then(response => {
        setPublicacionesV(response.data);
        
               for(let i=0;i<response.data.length;i++){
                if(response.data[i].aprobada==true){
                  ayuda.push(response.data[i])
            
                }
              
              }    
      
           
       console.log(ayuda)
    setPublicaciones(ayuda)

       setCantPubl(ayuda.length);    
    ayuda=[]
       setDataLoaded(true);
      })
      .catch(error => {
        console.error(error);
      })
    
       

 
      getAllPersonas().then(res=>{
       
        setAutores(res.data);
        console.log(autores);
           
 setDataLoaded(true); 
      })
             
      ;};
      fetchPub()

    }, 
      
      []);
      
      useEffect(() => {
        if (dataLoaded&&publicaciones[numPub]!=null&&publicaciones.length>0){
        /*   console.log(publicaciones.length)
          console.log(publicacionesV.length)
         */  let personasLikes=publicaciones[numPub].likes.split(',');
/*    console.log(personasLikes) */
  for(let i=0;i<personasLikes.length;i++){
      if(em==personasLikes[i]){
      document.querySelector(".azulGusta").classList.add("azul"); 
        activado=true;
    }}
if(em==''){
  document.querySelector(".azulGusta").classList.remove("azul"); 
  activado=false;
}        
if(veces==0){

/* 
moverD() */

        }        
     /*    cambDir(numPub); */
      
        
}}, [numPub,publicaciones]);

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
  const cambDirPdf=(num)=>{
    if(publicaciones[num].pdf!=undefined&&publicaciones!=undefined&&publicaciones.length>0){
      const fotoUrl =
      publicaciones[num].pdf;
      const urlPdf = new URL(fotoUrl);
      const pathPdf = urlPdf.pathname;
      const pathSegmentsPdf = pathPdf.split('/');
      /* setImg(fileNameImg);
      console.log(imge) */
      return(pathSegmentsPdf[pathSegmentsPdf.length - 1]);
          
         
         }
  
    }
/* const cambDir=(num)=>{
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

} */
const updateElement=(index)=>{
  const updateArray=[...EventosCardsBus];
updateArray[index]=!updateArray[index];
setEventosCardsBus(updateArray);
}
const updateElementt=(index)=>{
  const updateArray=[...ComentariosCardsd];
updateArray[index]=!updateArray[index];
setComentariosCardsd(updateArray);
}
const updateElementtt=(index)=>{
  const updateArray=[...redSocial2];
updateArray[index]=!updateArray[index];
setRedSocial2(updateArray);
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

const Megusta =(async (e)=>{
  let aux=0;
  e.preventDefault();
  if(em==''){
    let val=confirm('Para dar like tiene que autenticarse');
    if(val==true){
      navigate('/')
      return
    }else{
      return
    }
  }
  const $sonido=document.createElement("audio");
  $sonido.src="../../audio/Megusta.mp3";
  $sonido.play();
  document.querySelector(".azulGusta").classList.toggle("azul");
  console.log(activado);
  activado=!activado;
  console.log(activado);
  getAllPublicaciones().then(response => {
    setPublicacionesV(response.data);
           for(let i=0;i<response.data.length;i++){
            if(response.data[i].aprobada==true){
              ayuda.push(response.data[i])
        /*       console.log(response.data[i]) */
            }
           }     
  
  
       
   /* console.log(ayuda) */
   setPublicaciones(ayuda)
   setCantPubl(ayuda.length);   
/*    console.log(publicaciones)  */
  })

  .catch(error => {
    console.error(error);
  })
  
  for(let i=0;i<publicacionesV.length;i++){
      if(publicacionesV[i].id==publicaciones[numPub].id){
        aux=i;
        console.log(publicacionesV[i].id)
        break;
      }
  }

  let personasLikes=publicaciones[numPub].likes.split(',');
  console.log(personasLikes.length)
/*   newLikes+=personasLikes[0]+','; */
 /*  console.log(newLikes); */
  console.log(em);

  if(activado==true){
    if(personasLikes.length<=1){
      newLikes=em+',';
    }
    else{
    console.log(newLikes);
  for(let i=0;i<personasLikes.length;i++){
 /*    console.log(em);
    console.log(personasLikes[i])
  */  /*  console.log(personasLikes[i]); */
   if(em==personasLikes[i]){
    emRep++;
    continue;
   }
   else if(personasLikes[i]!=''||personasLikes[i]!=','){
    newLikes+=personasLikes[i]+',';
    }
 

}
newLikes+=em+','
}
}
else{
  //sacamos el elemento
}

  try {
    console.log(aux)
   
    await axios.put(`https://eventoscientificos-nxmx.onrender.com/publications/api/v1/publications/${publicacionesV[aux].id}/`, {
      "nombreEvento":publicaciones[numPub].nombreEvento,
      "lugar": publicaciones[numPub].lugar,
      "fechaEvento": publicaciones[numPub].fechaEvento,
      "limiteEntrega": publicaciones[numPub].limiteEntrega,
      "emailEvento": publicaciones[numPub].emailEvento,
      "enlace": publicaciones[numPub].enlace,
      "tematicas":publicaciones[numPub].tematicas,
 
      "likes": newLikes,
      
      "publicacionesPer": publicaciones[numPub].publicacionesPer
    })
    
  } catch (err) {
    console.log(err);
  }

  /* console.log(publicaciones[numPub]); */
  /*  setTimeout(() => { */
       /*  window.location.href = "#slider-slidess" */
   /*       location.reload("#publicar");   */
    /*   }, 1000);     */
 }) 


 
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
  */let compartiendo = false;



  function share(e) {
    console.log(e.target)
    // Datos a compartir
  
  const url = "www.facebook.com";
const nombre = "Texto a compartir";
const foto = "../../images/cora.png";

 // Encode the parameters for the sharing URL
 const urlEncoded = encodeURIComponent(url);
const nombreEncoded = encodeURIComponent(nombre);
const fotoEncoded = encodeURIComponent(foto);
 let shareUrl='';
// Generate the personalized sharing URL for Facebook
const mensaje = "Hola amigos, se les invita a este evento";
const mensajeEncoded = encodeURIComponent(mensaje);

// Generar la URL de compartir personalizada para Facebook
/* const shareUrl = `https://api.whatsapp.com/send?text=Hola sea bienvenido a este Evento 🌟%0A%0APara más información, visita: _*http://localhost:5173/pages/eventos*_` */
/* const shareUrl = https://www.facebook.com/sharer/sharer.php?u=${urlEncoded}&quote=${nombreEncoded}&picture=${fotoEncoded}; */
if(e.target.classList.contains('facebook')){
    shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${urlEncoded}&quote=${nombreEncoded}&picture=${fotoEncoded}`;
}
else if(e.target.classList.contains('x')){
   shareUrl=`https://twitter.com/intent/tweet?text=Hola sea bienvenido a este Evento:${publicaciones[numPub].nombreEvento} 🌟&url=http://localhost:5173/pages/eventos&via=Eventos Científicos&hastags=#eventos_cientificos`
}
else if(e.target.classList.contains('linkedin')){
   shareUrl=`http://www.linkedin.com/shareArticle?url=http://localhost:5173/pages/eventos`
}
else if(e.target.classList.contains('whatsapp')){
   shareUrl = `https://api.whatsapp.com/send?text=Hola sea bienvenido a este Evento:${publicaciones[numPub].nombreEvento} 🌟%0A%0APara más información, visita: _*http://localhost:5173/pages/eventos*_`
}


/* const shareUrl=`http://www.linkedin.com/shareArticle?url=http://localhost:5173/pages/eventos` */

if (navigator.share) {
        navigator.share({
            title: nombre,
            url: url
        })
        .then(() => { 
            alert("Se ha compartido"); 
        }) 
        .catch(() => { 
            window.open(shareUrl, '_blank'); 
        });
    } else {
        window.open(shareUrl, '_blank'); 
    }
}

function share2(e,publication) {
  console.log(e.target)
  // Datos a compartir

const url = "www.facebook.com";
const nombre = "Texto a compartir";
const foto = "../../images/cora.png";

// Encode the parameters for the sharing URL
const urlEncoded = encodeURIComponent(url);
const nombreEncoded = encodeURIComponent(nombre);
const fotoEncoded = encodeURIComponent(foto);
let shareUrl='';
// Generate the personalized sharing URL for Facebook
const mensaje = "Hola amigos, se les invita a este evento";
const mensajeEncoded = encodeURIComponent(mensaje);

// Generar la URL de compartir personalizada para Facebook
/* const shareUrl = `https://api.whatsapp.com/send?text=Hola sea bienvenido a este Evento 🌟%0A%0APara más información, visita: _*http://localhost:5173/pages/eventos*_` */
/* const shareUrl = https://www.facebook.com/sharer/sharer.php?u=${urlEncoded}&quote=${nombreEncoded}&picture=${fotoEncoded}; */
if(e.target.classList.contains('facebook')){
  shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${urlEncoded}&quote=${nombreEncoded}&picture=${fotoEncoded}`;
}
else if(e.target.classList.contains('x')){
 shareUrl=`https://twitter.com/intent/tweet?text=Hola sea bienvenido a este Evento:${publication.nombreEvento} 🌟&url=http://localhost:5173/pages/eventos&via=Eventos Científicos&hastags=#eventos_cientificos`
}
else if(e.target.classList.contains('linkedin')){
 shareUrl=`http://www.linkedin.com/shareArticle?url=http://localhost:5173/pages/eventos`
}
else if(e.target.classList.contains('whatsapp')){
 shareUrl = `https://api.whatsapp.com/send?text=Hola sea bienvenido a este Evento:${publication.nombreEvento} 🌟%0A%0APara más información, visita: _*http://localhost:5173/pages/eventos*_`
}


/* const shareUrl=`http://www.linkedin.com/shareArticle?url=http://localhost:5173/pages/eventos` */

if (navigator.share) {
      navigator.share({
          title: nombre,
          url: url
      })
      .then(() => { 
          alert("Se ha compartido"); 
      }) 
      .catch(() => { 
          window.open(shareUrl, '_blank'); 
      });
  } else {
      window.open(shareUrl, '_blank'); 
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

let i=0;/* para cuando lleguemos a la final volver al principio y to eso */
const mover=async(e)=>{
  
  const $nextBtn=document.querySelector(".slider-btns .next"),
  $prevBtn=document.querySelector(".slider-btns .prev");
  
      if(e.target===$prevBtn){         
      
        let el = numPub -1;
          if(el<0){
              el=cantPubl-1;
          }
      setNumPub(el); 
   /*    cambDir(el);  */
      }
      if(e.target===$nextBtn){
      
    let el = numPub + 1;
    if (el == cantPubl) {
      el = 0; 
    }
    setNumPub(el); 
    /*   cambDir(el);  */
          

  }
  let personasLikes=publicaciones[numPub].likes.split(',');
  let cont=0;
  /*    console.log(personasLikes) */
    for(let i=0;i<personasLikes.length;i++){
        if(em==personasLikes[i]){
          cont++;
        document.querySelector(".azulGusta").classList.add("azul"); 
          activado=true;
      }}
  if(em==''||cont==0){
    document.querySelector(".azulGusta").classList.remove("azul"); 
    activado=false;
  }
 /*  setTimeout(() => {
    window.location.href = "#slider-btns"
  }, 100); */
/*   window.location.href=".slider-btns" */
}
const moverD=async(e)=>{
  
 
      
    let el = numPub + 1;
    if (el == cantPubl) {
      el = 0; 
    }
    setNumPub(el); 
   /*    cambDir(el);  */
          

  
  let personasLikes=publicaciones[numPub].likes.split(',');
  let cont=0;
  /*    console.log(personasLikes) */
  if(document.querySelector(".azulGusta")){

  
    for(let i=0;i<personasLikes.length;i++){
        if(em==personasLikes[i]){
          cont++;
        document.querySelector(".azulGusta").classList.add("azul"); 
          activado=true;
      }}
  if(em==''||cont==0){
    document.querySelector(".azulGusta").classList.remove("azul"); 
    activado=false;
  }}
  setVeces(1);
}

/*
const cambiar=()=>{
    const selecc=document.getElementById('foto1')
     selecc.setAttribute('src',publicaciones[0].foto); 
}
*/

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

const Comentariosd=(async(e,publication)=>{
  console.log(publication)
  updateElementt(publication)
/*   document.querySelector(".slider-slidesd").classList.add("opacity-0");
  document.querySelector(".slider-slidesd").classList.add("invisble");

  document.querySelector(".slider-desod").classList.remove("ocultar");  */
  

 
  try{
 const ree=await getAllComentarios();
 console.log(ree.data);
setComenPubB(ree.data);
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
  if(localStorage.getItem("email")==""){
    emailP='Invitado@gmail.com'
  } 
  else{
    emailP=localStorage.getItem("email");
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

const ComentarB=(async(e,publication)=>{
  console.log(publication)
  e.preventDefault();
  let fecha =new Date();
  let month=fecha.getMonth()+1;
  if(month<10){
    month=0+''+month;
  }
  console.log(month)
  let emailP="";
  if(em=="" || em==undefined || em==null){
    emailP='Invitado@gmail.com'
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
      "comPub": publication,
      "contenido":textCom
    });
    console.log('Comentario creado:', r.data);
    // Aquí puedes limpiar el formulario o redirigir al usuario
   
  } catch (error) {
    console.error('Error al crear el comentario:', error);
}

const elementos=document.querySelectorAll(".reiInpd");
elementos.forEach(elemento=>{
  elemento.value='';
})

Comentariosd(e,publication.id)
})


const Atras=(/* 2 atributos */)=>{
  setComentariosCards(false);
  document.querySelector(".slider-slides").classList.remove("opacity-0");
  document.querySelector(".slider-slides").classList.remove("invisble");

  document.querySelector(".slider-deso").classList.add("ocultar"); 
}
const Atrasd=(publication)=>{
  updateElementt(publication)
/*   document.querySelector(".slider-slidesd").classList.remove("opacity-0");
  document.querySelector(".slider-slidesd").classList.remove("invisble");

  document.querySelector(".slider-desod").classList.add("ocultar");  */
}

const Buscar=(e)=>{
  let input=document.querySelector('.valorBus');
  input=quitarTildes(input.value.toLowerCase());
  let resultados=[];
console.log(publicaciones)
  publicaciones.forEach((publicacion)=>{
    const nombreEvento=quitarTildes(publicacion.nombreEvento.toLowerCase());
    if(nombreEvento.includes(input)){
      resultados.push(publicacion);
    }
  })
  setPublicacioness(resultados)
  /*  publicaciones.forEach((el)=>{
     ja=el;
    console.log(el)
    const j=quitarTildes(el.nombreEvento);
    if(j.toLowerCase().includes(input)){
  jaj+=ja;
  console.log('si');
    }
  
}) */
console.log(publicacioness)
setBusquedaCards(true);
console.log(input)
if(input==''||input==' '||input==undefined||input==null){
  setBusquedaCards(false);
}}
const Participar=()=>{
  if(localStorage.getItem("email")==''){
     if( confirm("Para solicitar participación debe autenticarse")){
      navigate('/')
    return;}
    else{
      return
    }
  }

  document.querySelector('.opa').classList.add('opacity-70')

  setParticipaCard(true);
  
}
const pdfParP=(e)=>{
  
  
    const $docu=e.target.files[0];

    if($docu.name.slice(-3)!='pdf'){
            alert("Solo puedes subir pdfs para solicitudes")
            document.querySelector('.subPdf').value=null
            setTextoPdf('')
            return
    }
    
    const $pdfUrl=URL.createObjectURL($docu);
    setPdfPar(e.target.files[0])
    setTextoPdf($docu.name)
    
}
const  onSubmit=handleSubmit(async(data,e)=>{
let io;
 if((pdfPar==""||pdfPar==null||pdfPar==''||pdfPar==undefined)&&modo=="expositor"){
  alert("Si desea participar como expositor debe enviar un pdf para revisión")
  return
}
  document.querySelector('.opa').classList.remove('opacity-70')
  e.preventDefault();
  console.log(modo);
  
  setParticipaCard(false);

   let fecha =new Date();
   let month=fecha.getMonth()+1;
   if(month<10){
    month=0+''+month;
    
  }
  
  const formData=new FormData();
  formData.append("solPub",publicaciones[numPub].id);
  formData.append("emailPer",localStorage.getItem("email"));
  formData.append("pdf",pdfPar);
  formData.append("modalidad",modo);
  const ress=await fetch("https://eventoscientificos-nxmx.onrender.com/solicitud/api/v1/solicitud/",{
    method:"POST",
    body:formData,

}).then((ress)=>{
    ress.json() 
  /*    navigate("/pages/eventos")  */
  alert("Usted ha solicitado la participación a un evento, les responderemos en breve");
    })     .catch(error => {
            console.error(error);
            return;      
          });

   console.log(fecha.getDate()+'-'+month +'-'+fecha.getFullYear()>'24-03-2024');
          setPdfPar('')
          setTextoPdf('')

          for(let i=0;i<autores.length;i++){
            if(autores[i].email==localStorage.getItem("email")){
              io=autores[i].id;
              break;
            }
          }
          let iop=modo=="expositor"?"Expositor":"Invitado"
          try{
            await axios.post("https://eventoscientificos-nxmx.onrender.com/notifica/api/v1/notifica/",{
            "notificacionesPer":io,
          "title":"Solicitud de Participación",
           "contenido":`Usted ha solicitado la participación al evento ${publicaciones[numPub].nombreEvento} como ${iop}, le responderemos en breve`,
            "resumen":"Su solicitud de ...",
            "fechaNot":fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),
            "horaNot":fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()                 })
            
          }
         catch (error) {
          console.error('Error al crear la notificación:', error);
      }   
      const $sonido=document.createElement("audio");
      $sonido.src="../../audio/notifica.mp3";
      $sonido.play();

        })
const convAtr=()=>{
  document.querySelector('.opa').classList.remove('opacity-70')
  setParticipaCard(false)
}
const redVer=(num)=>{
  console.log(redSocial2)
  if(document.querySelector('.opas')){

  
  document.querySelector('.opas').classList.remove('opacity-70')
  }
  if(redSocial2!=undefined&&redSocial2.length>0){

  
  updateElementtt(num)
  }console.log(num)
}
const verAutor=()=>{
  let ayuw;
  for (let i = 0; i < autores.length; i++) {
    if(autores[i].email==localStorage.getItem("email")){
      ayuw=autores[i].id;
      break;
  }}
  

    if(ayuw==publicaciones[numPub].publicacionesPer){
      console.log(publicaciones[i].publicacionesPer);
      return false;
   
  }
return true;
}
  return (
    
    <div className=' w-[101vw] mt-4  bg-[#7498b6] h-[2000vh] min-[1000px]:h-[280vh]  ja'>
       
      <div className='inline-flex w-[100vw]'>
      <h1 className='w-[10vw] max-w-[100px]  h-[40px]    text-center  ml-auto mr-auto relative min-[1000px]:left-[20rem] max-[1000px]:left-[15rem] min-w-[94.5px] max-[800px]:left-[10rem] max-[571px]:left-[8rem] max-[467px]:left-[6rem]'>s</h1>
      <a href="#Busc" className=' relative right-4 min-[1000px]:right-16 ml-auto mt-4   cursor-pointer inline-block '  target="_self" rel="noopener noreferrer">
      <img className='h-[80px]' src="../../images/buscar.png" alt="Buscar" /></a></div>
      {participaCard&&(
      <form action="" onSubmit={onSubmit} id='formPar' className='formPar z-50 max-w-[350px] mt-[25vh] ml-[15vw] w-[30vw] h-32 min-h-[250px] bg-slate-500 absolute' noValidate>
  <img src="../../images/hacia-atras.png" className='h-8 convAtr cursor-pointer hover:h-10' onClick={convAtr} alt="" />
  <img src="https://eventoscientificos-nxmx.onrender.com/media/images/2024/11/14/comentario.png" alt="Comentario" />
  
      <div className="formPar opacity-100 mt-2 ml-1" >
      <label htmlFor="motivo" className="formPar mr-4  max-[372px]:text-[0.759rem] max-[372px]:ml-[13.2vw] text-amber-850  font-black min-[372px]:ml-[.7rem]">Motivo*</label>

      <select id='motivo' className='formPar text-2xl text-gray-600'  value={modo} onChange={(e)=>setModo(e.target.value)} 
       name="Motivo" >
      <option  value="invitado">Invitado</option> 
                 <option value="expositor">Expositor</option>
                  </select>
        
       
      
        </div>


            
            <div className=" formPar min-[641px]:ml-[1vw] inline">

<label htmlFor="pdfFile" id='formPar'  className="formPar opacity-100 inline-block mt-[40px]  max-[474px]:ml-0  bg-gray-300 cursor-pointer hover:bg-sky-900 hover:text-[#fff] ">
 Subir PDF
</label>
<input   
  accept=".pdf" 
   
 
  onChange={pdfParP} 
  type="file" 
  name="pdfFile" 
  id="pdfFile" 
  className="inline subPdf formPar custom-file-upload absolute opacity-0" 
  
/>
<span className='ml-2 formPar spanTextoPdf'>{textoPdf}</span>

<input type="submit" value="Participar"  className='formPar mt-4 block ml-auto mr-auto  bg-green-100 cursor-pointer hover:bg-sky-900 hover:text-[#fff] hover:w-[130px] text-2xl relative   ' />


</div>
         
        </form>      )}   
        <section className='mt-8 ml-4 mr-4 slider'>
      <div id='slider-slidess' className="opa slider-slides ml-[20vw] ">
      <h2 className='text-center min:665px:text-4xl mr-[1.754rem] text-2xl bg-[transparent] min-[1500px]:text-6xl  min-[1500px]:mr-60  font-mono min:665px:mr-48 max-[480px]:ml-[80px] max-[568px]:ml-[60px]  mb-12 '>Eventos Publicados</h2>
     
        <article className='padreEl  absolute slider-slide active max-[660px]:right-[10vw]   max-[500px]:right-[5vw]  max-[438px]:right-[3vw] max-[420px]:right-[2vw] max-[410px]:right-[1vw]  w-[60vw]   bg-[#6495ED]   min-w-[400px] max-[400px]:min-w-[100vw] '>
          <div className='flex max-h-[55px] bg-[#94b8d7] max-[1000px]:h-[110px] max-[1000px]:max-h-[110px]'>
         {/*    {publicaciones.length > 0 &&publicaciones[numPub]!=undefined &&(
              
            )

            } */}
            {!participaCard&& publicaciones.length>0&&publicaciones[numPub]!=undefined&&localStorage.getItem("email")!="erickmiralles362@gmail.com"&&publicaciones[numPub].limiteEntrega<=fechaA.getFullYear()+'-'+monthA +'-'+fechaA.getDate()&&verAutor()&&(
              <button onClick={Participar} className='relative h-[40px] border-double border-[5px] border-blue-400 left-8 w-[12%] text-xl cursor-pointer shadow-green-300 shadow-lg hover:text-blue-500 bg-white max-[800px]:text-xs max-[1400px]:text-lg max-[1200px]:text-sm max-[1000px]:text-xs max-[1000px]:left-2 min-w-[60px]'>Participar</button>
            
            )}
                <h2 className='inline-block nomEvent text-center ml-auto mr-auto text-3xl  mb-2  hover:w-[60%] text-[#000] cursor-pointer '>{publicaciones.length > 0 &&publicaciones[numPub]!=undefined ? publicaciones[numPub].nombreEvento : 'No hay publicaciones'} </h2>
                {cantPubl>0  &&publicaciones.length > 0 &&publicaciones[numPub]!=undefined &&(
                <img src="../../images/cambiar_foto_con.png" className="fotoCamb cursor-pointer w-[80px] mr-[10px] hover:h-[65px]   inline-block relative right-[0] " alt="" srcset="" onClick={foto_Txt} />
                 )} </div>
                {cantPubl>0 && !EventosCards &&publicaciones.length > 0 &&publicaciones[numPub]!=undefined &&(
        <div>        <img
            
        onChange={(e)=>setFotoFoto(e.target.value)}
          src={`https://eventoscientificos-nxmx.onrender.com/media/pdfs/${cambDirFoto(numPub)}`}
          alt="Imagen"
          className=' ml-auto mr-auto hiEl  h-[80vh] w-[100%] max-h-[744px]'  
        
        />

        <p>foto2</p>
        <img
            
            onChange={(e)=>setFotoFoto(e.target.value)}
              src={`https://eventoscientificos-nxmx.onrender.com/media/pdfs/${publicaciones[numPub].foto}`}
              alt="Imagen"
              className=' ml-auto mr-auto hiEl  h-[80vh] w-[100%] max-h-[744px]'  
            
            />
            <p>foto3</p>
        <img
            
            onChange={(e)=>setFotoFoto(e.target.value)}
              src="https://eventoscientificos-nxmx.onrender.com/media/pdfs/flecha_atras.png"
              alt="Imagen"
              className=' ml-auto mr-auto hiEl  h-[80vh] w-[100%] max-h-[744px]'  
            
            />
        </div>


      )}
      
      {EventosCards && cantPubl>0 && publicaciones.length > 0 &&publicaciones[numPub]!=undefined&& publicaciones[numPub]!=undefined&& <EventosCard key={publicaciones.id} publicaciones={publicaciones[numPub]} autores={saberAut()}/>}
      

{publicaciones.length > 0 &&publicaciones[numPub]!=undefined&&(
 <div className='fotos absolute inline-flex  min-h-[75px] justify-start    border-t  w-[inherit] border-orange-400 bg-white min-w-[400px] max-[400px]:min-w-[100vw]'>
                
 <div className="container">
   
 
<img
src="../../images/cora.png"
alt="Imagen"
className=" cursor-pointer max-h-[50px] max-[1129px]:block h-[200px]  block xl:inline"
onClick={(e) => Megusta(e)}
/>
{/*   <span className='relative bottom-[2.7rem] text-[#000080] left-[8vw] min-[350px]:left-[7.5vw] min-[390px]:left-[7.2vw] min-[400px]:left-[7vw] min-[425px]:left-[6.5vw] min-[480px]:left-[6vw] min-[500px]:left-[5.6vw] min-[540px]:left-[5vw] min-[600px]:left-[4.7vw] min-[650px]:left-[4.3vw] min-[700px]:left-[3.7vw] min-[800px]:left-[3.3vw] min-[860px]:left-[3vw] min-[900px]:left-[2.7vw] min-[1128px]:bottom-[.3rem] min-[1128px]:left-[-2.2rem] '>5</span> */}
<span   className='w-[20px] azulGusta ml-2 cursor-pointer '    onClick={(e) => Megusta(e)}>Me gusta</span> 
 </div>
 <div className="container inline cursor-pointer mr-[2vw] "onClick={(e)=>Comentarios(e)} >
  <img src="../../images/comentario.png"    className='max-[1129px]:block max-h-[50px] h-[200px]  block xl:inline '  alt=''></img>
 <span className='hover:text-blue-400 block xl:inline ml-1 cursor-pointer'>Comentarios</span>
 </div> 
 <div className="container block xl:inline cursor-pointer">
 <a href={publicaciones.length > 0 ? `https://eventoscientificos-nxmx.onrender.com/static/${cambDirPdf(numPub)}`:''} target='blank'  rel="noopener noreferrer" download="jornada_cientifica.pdf">
   <img src="../../images/icon_download.jpg" className='max-[1129px]:block max-h-[50px]  block xl:inline' alt="" /></a>
<span  className='ml-1 cursor-pointer  block xl:inline'>Descargar</span>
 </div>

 <div className="comp container block xl:inline cursor-pointer  max-[1129px]:block">              
    <img src="../../images/compartir.jpg"  className='comp max-h-[50px] block xl:inline cursor-pointer ' alt='' ></img> <span className='comp cursor-pointer ml-1 block xl:inline'>Compartir</span>

 </div>
 
</div>
)}
              
               
{redSocial&&(
<ul className='relative redSocial inline-flex    bg-gray-300 top-[4.8rem] max-[629px]:ml-[170px] max-[400px]:ml-[30vw] sm:ml-[29vw] md:ml-[36.6vw] lg:ml-[37.5vw]  xl:ml-[39vw] redes  '>
  <li onClick={(e)=>share(e)}   className='redSocial cursor-pointer list-none facebook'><img src="../../images/facebook.png" className='redSocial w-[5.5vw] min-w-10 h-16 hover:xl:w-[7vw] facebook' alt="" /></li>
                <li onClick={(e)=>share(e)} className='redSocial cursor-pointer list-none whatsapp' ><img src="../../images/whatsapp.png" className='whatsapp redSocial ml-4 h-[4rem] w-[4.5vw] min-w-10 hover:xl:w-[5.5vw]  ' alt="" /></li>
                <li onClick={(e)=>share(e)} className='redSocial cursor-pointer list-none x'> <img src="../../images/x.png" className='x redSocial min-w-6 ml-8 h-16  w-[4.5vw]  hover:xl:w-[5.5vw] ' alt="" /></li>
                <li onClick={(e)=>share(e)} className='redSocial cursor-pointer list-none linkedin'><img src="../../images/linkedin.png " className='linkedin redSocial ml-8 min-w-10 w-[4.5vw] h-16 hover:xl:w-[5.5vw] ' alt="" /></li></ul>
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
<h2 className='w-[200px] h-[150px]'>s</h2>
  </div>
  
  <div className='bg-white '>
  <input type="text" className="inline reiInp h-[6vh] mt-4 w-[87%] max-h-[844px] text-base min-[925px]:text-lg  min-[1116px]:ml-8 min:[414px]:ml-4 ml-2 min-[1300px]:text-2xl"    onChange={(e)=>setTextCom(e.target.value)}/>

  <img src="../../images/enviar.png" alt="fondo chat" className='ml-2 inline w-[7%] h-[50px]'  onClick={Comentar} />
  </div> 
  </article>

  </div> 
{publicaciones!=undefined&&publicaciones.length>0&&(
  <div className="slider-btns  slider-btnsE w-[92vw] relative top-[50vh] max-[1070px]:w-[93vw] max-[675px]:w-[91.5vw]   max-[655px]:w-[99vw] max-[410px]:w-[105vw] min-[1200px]:w-[93vw]">
                    <a className="prev text-[#87CEEB] inline-block w-auto ml-[20vw] max-[675px]:ml-[22.5vw]  max-[660px]:ml-[26vw] max-[572px]:ml-[17vw] max-[410px]:ml-[0vw]" onClick={mover} href="#">&laquo;</a>
                    <a className="next text-[#87CEEB]" onClick={mover} href="#">&raquo;</a>
                </div>
)}
 
</section>
<div id='Busc' className=' relative top-[120vh] max-h-[1000px] overflow-x-hidden  overflow-y-auto scroll-x-auto min-[1000px]:w-[98vw] '>
<div className='busqueda w-[80vw] ml-auto mr-auto bg-white '>
  <input type='search' className='valorBus inline-block w-[70vw] text-center ml-8 h-[50px] text-stone-900' onChange={(e)=>Buscar(e)} placeholder='Buscar Evento'></input>
<img className=' ml-4 mt-4 translate-y-[-50%]  cursor-pointer inline-block h-[30px]' src="../../images/buscar.png" alt="Buscar" onClick={(e)=>Buscar(e)}/></div>



<section className='mt-8 ml-4 mr-4 slider imp  relative    '>
      <div className='min-[900px]:grid min-[900px]:grid-cols-2'>
     
       { !BusquedaCards &&(
        <div className='w-[100vw] '>    <h3 className='text-center mt-40 text-6xl text-clip  ml-auto mr-auto w-[inherit] inline-block text-slate-800 '>Busca la publicación que desees </h3></div>

      )}
          { BusquedaCards &&publicacioness.length==0&&(
        <div className='w-[100vw] '>    <h3 className='text-center mt-40 text-6xl text-clip  ml-auto mr-auto w-[inherit] inline-block text-slate-800 '>No tenemos registrada ninguna publicación con ese nombre </h3></div>

      )}
       
       
      {BusquedaCards && cantPubl>0 && publicaciones[numPub]!=undefined&& publicacioness!=undefined&& publicacioness.map(publication=>publication.aprobada&&( 
       
       <div>
       <div className=''>
        <div className=" slider-slidesd   ">
       
          <article className='mt-32 relative ml-4   active max-[660px]:right-[10vw]   max-[500px]:right-[5vw]  max-[438px]:right-[3vw] max-[420px]:right-[2vw] max-[410px]:right-[1vw]  w-[47vw]   bg-[#6495ED]   min-w-[400px] max-[700px]:min-w-[90vw] max-[700px]:ml-12 max-[441px]:ml-8 max-[437px]:ml-4 max-[900px]:ml-auto max-[900px]:mr-auto'>
          <div className='flex  max-h-[55px] bg-[#94b8d7]'>
          {ComentariosCardsd[publication.id] &&(
            <img src="../../images/atras-a-la-izquierda.png" className="fotoCamb cursor-pointer w-[80px] mr-[10px] hover:h-[65px]    relative right-[0] " alt="" srcset="" onClick={(e)=>Atrasd(publication.id)} />
         )}
        <h2 className='inline-block nomEvent text-center ml-auto mr-auto text-3xl  mb-2  hover:w-[60%] text-[#000] cursor-pointer '>{publicaciones.length > 0 &&publication!=undefined ? publication.nombreEvento : ''} </h2>
        {!ComentariosCardsd[publication.id] &&(
                <img src="../../images/cambiar_foto_con.png" className="fotoCambBus cursor-pointer w-[80px] mr-[10px] hover:h-[65px]   inline-block relative right-[0] " alt="" srcset="" onClick={(e)=>foto_Txt_Bus(e,publication.id)} />    )}
                               </div>

                               <div className='h-[59vh]'>
                              
                {EventosCardsBus[publication.id]&&!ComentariosCardsd[publication.id]&&(     <BusquedasCard  className='  top block ' key={publication.id}   publicaciones={publication} autores={saberAut()
         } />)}
         {!EventosCardsBus[publication.id]&&!ComentariosCardsd[publication.id]&&(    <img
          src={`https://eventoscientificos-nxmx.onrender.com/static/${BusPdf(publication.foto)}`}
          alt="Imagen"
          className='opas ml-auto mr-auto hiEl  h-[100%] w-[100%] '  
        
         />)}
        
   {/*   {cantPubl>0 && !ComentariosCards &&(
    <h3 className='text-center mt-16 '>No hay Comentarios </h3>
      )} */}
      
      {
        
        ComentariosCardsd[publication.id]&&(
         
      <div className='fondo-chat block ml-auto mr-auto  overflow-y-auto   overflow-x-hidden   h-[100%] w-[100%] '>
    {/*  {cantPubl>0 && !ComentariosCardsd &&(
    <h3 className='text-center mt-16 '>No hay Comentarios </h3>
      )} */}
       
        {
        
        ComentariosCardsd[publication.id]&& cantPubl>0 && publication!=undefined&& comenPubB!=undefined&& comenPubB.length>0&& comenPubB.map(comentario=>(  
        <ComentariosCard className='relative top ' key={publication.id}   comentarios={comentario.comPub===publication.id?comentario:""} autores={saberAut()
         } />   )
         
                  ) }
       </div>
      
        )}
        
 



        
        </div>
        {!ComentariosCardsd[publication.id]&&(
         <div className='fotos absolute inline-flex  min-h-[75px] justify-start    border-t  w-[inherit] border-orange-400 bg-white min-w-[400px]  max-[700px]:min-w-[90vw]'>
                
                <div className="container">
                  
                
        <img
          src="../../images/cora.png"
          alt="Imagen"
          className=" cursor-pointer max-h-[50px] h-[200px] inline max-[1126px]:block"
          onClick={(e) => Megusta(e)}
        />
      {/*   <span className='relative bottom-[2.7rem] text-[#000080] left-[8vw] min-[350px]:left-[7.5vw] min-[390px]:left-[7.2vw] min-[400px]:left-[7vw] min-[425px]:left-[6.5vw] min-[480px]:left-[6vw] min-[500px]:left-[5.6vw] min-[540px]:left-[5vw] min-[600px]:left-[4.7vw] min-[650px]:left-[4.3vw] min-[700px]:left-[3.7vw] min-[800px]:left-[3.3vw] min-[860px]:left-[3vw] min-[900px]:left-[2.7vw] min-[1128px]:bottom-[.3rem] min-[1128px]:left-[-2.2rem] '>5</span> */}

      <span   className='w-[20px] azulGusta ml-2 cursor-pointer '    onClick={(e) => Megusta(e)}>Me gusta</span> 
                </div>
                <div className="container comUn inline cursor-pointer mr-[2vw] "onClick={(e)=>Comentariosd(e,publication.id)} >
                 <img src="../../images/comentario.png"    className='max-h-[50px] h-[200px] inline '  alt='s'></img>
                <span className='ml-1 cursor-pointer'>Comentarios</span>
                </div> 
                <div className="container inline cursor-pointer">
                <a href={publicaciones.length > 0 ? `https://eventoscientificos-nxmx.onrender.com/static/${BusPdf(publication.pdf)}`:''} target='blank'  rel="noopener noreferrer" download="jornada_cientifica.pdf">
                  <img src="../../images/icon_download.jpg" className='max-h-[50px] inline' alt="" /></a>
               <span  className='ml-1 cursor-pointer'>Descargar</span>
                </div>
                <div className="container inline cursor-pointer">                <img src="../../images/compartir.jpg"  className='max-h-[50px] inline cursor-pointer' alt=''  onClick={()=>redVer(publication.id)}></img> <span className='cursor-pointer ml-1'>Compartir</span>
                </div>
                </div>)}
                <div className='bg-white '>
  <input type="text" className="inline reiInpd h-[6vh] mt-4 w-[87%] max-h-[844px] text-base min-[925px]:text-lg  min-[1116px]:ml-8 min:[414px]:ml-4 ml-2 min-[1300px]:text-2xl"    onChange={(e)=>setTextCom(e.target.value)}/>

  <img src="../../images/enviar.png" alt="fondo chat" className='ml-2 inline w-[7%] h-[50px]'  onClick={(e)=>ComentarB(e,publication.id)} />
  </div> 
  

                </article>
                {redSocial2[publication.id]&&(
<ul className='relative redSocial2 inline-flex    bg-gray-300 top-[.4rem] max-[629px]:ml-[170px] max-[400px]:ml-[30vw] sm:ml-[29vw] md:ml-[36.6vw] lg:ml-[37.5vw]  xl:ml-[24.3vw] redes  '>
  <li onClick={(e)=>share2(e,publication)}   className='redSocial cursor-pointer list-none facebook'><img src="../../images/facebook.png" className='redSocial w-[5.5vw] min-w-10 h-16 hover:xl:w-[7vw] facebook' alt="" /></li>
                <li onClick={(e)=>share2(e,publication)} className='redSocial cursor-pointer list-none whatsapp' ><img src="../../images/whatsapp.png" className='whatsapp redSocial ml-4 h-[4rem] w-[4.5vw] min-w-10 hover:xl:w-[5.5vw]  ' alt="" /></li>
                <li onClick={(e)=>share2(e,publication)} className='redSocial cursor-pointer list-none x'> <img src="../../images/x.png" className='x redSocial min-w-6 ml-8 h-16  w-[4.5vw]  hover:xl:w-[5.5vw] ' alt="" /></li>
                <li onClick={(e)=>share2(e,publication)} className='redSocial cursor-pointer list-none linkedin'><img src="../../images/linkedin.png " className='linkedin redSocial ml-8 min-w-10 w-[4.5vw] h-16 hover:xl:w-[5.5vw] ' alt="" /></li></ul>
)}
                </div>
               
   </div>
   </div>
   )) }
  
      

 </div>



</section>
</div>

{/* <h2 className='relative top-[130vh]'>Ja</h2> */}
</div>

/* para buscar por fecha ,buscar en google date calendar react */
)


         
}

export default Eventos
