import React,{ useEffect, useState ,useContext} from 'react'
import { useForm } from "react-hook-form";
import axios  from 'axios';
import { useNavigate} from "react-router-dom";
import { createPublicaciones, deletePublicaciones } from '../api/publicaciones';
import EmContext from './eventos/EmContext';
import { getAllPersonas } from '../api/personas.api';
import { getAllPublicaciones,updatePublicaciones } from '../api/publicaciones'
import { EventosCard } from '../components/EventosCard';
import { ComentariosCard } from '../components/ComentariosCard';
import { createComentarios, getAllComentarios } from '../api/comentarios';
import { createPendientes, deletePendientes, getAllPendientes,updatePendientes } from '../api/pendientes';

/* Actualizar Pendientes */

const MisEventos = () => {
       /*  const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/; expresión regular enlace */
       const navigate=useNavigate(); 
       
  
    /*    const {em}=useContext(EmContext);
     */ 
    const [em,setEm]=useState(localStorage.getItem("email"));
    /* console.log(em); */
        const {register,handleSubmit,formState:{
                errors
            }}=useForm();
          let aut;                        
            let newCont = 0;
            const [ejecutado,setEjecutado]=useState(false);
            const [fileNamePdf,setFileNamePdf]=useState('');
            const [fileNameImg,setFileNameImg]=useState('');
            const [imge,setImg]=useState('');

            const [pdfE,setPdfE]=useState('');
            const [publicaciones,setPublicaciones]=useState('');
            
            const [cantPubl,setCantPubl]=useState('');
            const [mensaje, setMensaje] = useState('');
            const [dataLoaded, setDataLoaded] = useState(false);
            const [EventosCards, setEventosCards] = useState(false);
            const [numPub,setNumPub]=useState(0);
            const [autores,setAutores]=useState("");
            const [ComentariosCards,setComentariosCards]=useState(false);
            const [textCom,setTextCom]=useState('');
            const [comenPub,setComenPub]=useState('');
            let activado=false;
            let newLikes='';
            let emRep=0;

            const [publicacionesP,setPublicacionesP]=useState('');
            const [numPubP,setNumPubP]=useState(0);
            const [cantPublP,setCantPublP]=useState('');
            const [fileNamePdfP,setFileNamePdfP]=useState('');
            const [fileNameImgP,setFileNameImgP]=useState('');
            const [EventosCardsP, setEventosCardsP] = useState(false);
            const [imgeP,setImgP]=useState('');
            const [pdfP,setPdfP]=useState('');
            const [habEdicion,setHabEdicion]=useState(false);

            const [nombreEvento,setNombreEvento]=useState('');
            const [lugarEvento,setLugarEvento]=useState('');
            const [fechaEvento,setFechaEvento]=useState('');
            const [fechaFinEvento,setFechaFinEvento]=useState('');
            const [limiteEntrega,setLimiteEntrega]=useState('');
            const [emailEvento,setEmailEvento]=useState('');
            const [enlace,setEnlace]=useState('');
            const [tematicas,setTematicas]=useState('');
            const [filePdf,setPdf]=useState(null);
            const [foto,setFoto]=useState(null);
            const [pdfH,setPdfh]=useState('')    ;
            const [mostrado, setMostrado] = useState(false);
            const [dialogoMostrado, setDialogoMostrado] = useState(false);
            const [confirmacionMostrada, setConfirmacionMostrada] = useState(false);
            const [confirmacionCambiada, setConfirmacionCambiada] = useState(false);
            const [idPub,setIdPub]=useState(0);
            const [pNormal,setPNormal]=useState(false)
          let ayuda=[],ayuda2=[]
          function actualizar(){
            getAllPublicaciones().then(response => {
               
                  
                
                 
              for(let i=0;i<response.data.length;i++){
                console.log(response.data[i].publicacionesPer
                  ,aut)
                if(aut==response.data[i].publicacionesPer){
                  
                                    
                
                if(response.data[i].aprobada==true){
                    
                  ayuda.push(response.data[i])
               /*    console.log(response.data[i]) */
                }
                else{
                  ayuda2.push(response.data[i])
                
                }}
               }   
      
      
           
       console.log(ayuda)
      setPublicaciones(ayuda) 
       setCantPubl(ayuda.length);    
       setPublicacionesP(ayuda2) 
       setCantPublP(ayuda2.length) ;
       ayuda=[],ayuda2=[]; 
      })
      .catch(error => {
        console.error(error);
      }) 
          }   
            useEffect(() => {
           if(localStorage.getItem("email")=="erickmiralles362@gmail.com"){
            navigate("../pages/Administrar");
           }
              getAllPersonas().then(res=>{
             
                setAutores(res.data);
                console.log(autores);
                res.data.forEach(element => {
                  if(element.email==localStorage.getItem("email")){
                    aut=element.id;
                  }
            
                });
                            })
                            

          
                            
                                     
                if(em==""){
                 /*  navigate("/") */
              let valor=(localStorage.getItem("email"));
                setEm(valor?(valor):""); 
                }
                else{
                  localStorage.setItem("correo",JSON.stringify(em));
                }
                console.log(em);
             const fetchPub=()=>{
    
         
          
              getAllPublicaciones().then(response => {
               
                  
                
                 
                  for(let i=0;i<response.data.length;i++){
                    console.log(response.data[i].publicacionesPer
                      ,aut)
                    if(aut==response.data[i].publicacionesPer){
                      
                                        
                    
                    if(response.data[i].aprobada==true){
                        
                      ayuda.push(response.data[i])
                   /*    console.log(response.data[i]) */
                    }
                    else{
                      ayuda2.push(response.data[i])
                    
                    }}
                   }   
          
          
               
           console.log(ayuda)
          setPublicaciones(ayuda) 
           setCantPubl(ayuda.length);    
           setPublicacionesP(ayuda2) 
           setCantPublP(ayuda2.length) ;
           ayuda=[],ayuda2=[]; 
          })
          .catch(error => {
            console.error(error);
          }) 
          
           /*  getAllPendientes().then(responses => {
                 
              setPublicacionesP(responses.data);
              
            
              setCantPublP(responses.data.length);
                
             
             
              
            })
            .catch(error => {
              console.error(error);
            })
           console.log(publicacionesP)
              */
           setDataLoaded(true);

           ;};

            fetchPub()
           
         
      
          }, 
            
            []);
            
            useEffect(() => {
              if (dataLoaded){
             
   /*    moverD()
      moverDP() */
              /* cambDir(numPub);
               cambDirP(numPubP+1);
   */              setDataLoaded(true)
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
        //poner algo de q si llego al final empezo y no encontr'o convertir una variabla a falso y a trav'es de esta variable poner un cartel de Publicaci'on no Encontrada
       
      
      
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
          
          setPdfE(fileNamePdf);
          console.log(pdfE);}
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
        //poner algo de q si llego al final empezo y no encontr'o convertir una variabla a falso y a trav'es de esta variable poner un cartel de Publicaci'on no Encontrada
       
      }
      const cambDirP=(num)=>{
        if(publicacionesP[num]!=undefined){
         console.log(cantPubl>0?cantPubl:"");
        if(publicacionesP.length>0){
          if(publicacionesP[num].pdf ){
       const pdfUrl =
       publicacionesP[num].pdf;
       const urlPdf = new URL(pdfUrl);
       const pathPdf = urlPdf.pathname;
       const pathSegmentsPdf = pathPdf.split('/');
       
       setFileNamePdfP(pathSegmentsPdf[pathSegmentsPdf.length - 1]);
           
           setPdfP(fileNamePdfP);
           console.log(pdfE);}
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
         //poner algo de q si llego al final empezo y no encontr'o convertir una variabla a falso y a trav'es de esta variable poner un cartel de Publicaci'on no Encontrada
        
       }
          
            useEffect(() => {
                getAllPersonas()
                .then(resp => {
                    for (let i = 0; i < resp.data.length; i++) {
                        if (em === resp.data[i].email) {
                            setIdPub(resp.data[i].id);
                            break;
                        }
                    }
            
                   
                })
                .catch(error => {
                    console.error(error);
                    return;
                });    
       
              if (localStorage.getItem("email") === "" && !mostrado && !confirmacionMostrada && confirmacionCambiada) {
                setMostrado(true); // Marca que el cuadro de diálogo ya se ha mostrado
                setConfirmacionMostrada(true); // Marca que la confirmación ya se ha mostrado
                if (confirm("No puedes publicar, pues no estás autenticado, ¿Quieres ir a autenticarte?")) {
                  navigate("/");
                } else {
                  navigate("../../pages/eventos");
                }
              }
            }, [em, mostrado, navigate, confirmacionMostrada, confirmacionCambiada]);
            useEffect(() => {
              console.log(idPub)
            }, [idPub]);
            useEffect(() => {
              if (!confirmacionCambiada) {
                setConfirmacionCambiada(true); 
              }
              
              
            }, [confirmacionMostrada,autores,publicaciones,numPub]);
    const pdf=(e)=>{
        const $docu=e.target.files[0];
        if($docu.name.slice(-3)!='pdf'){
                alert("Solo puedes subir pdfs como convocatorias")
                return
        }
        
        const $pdfUrl=URL.createObjectURL($docu);
        setPdf(e.target.files[0])
     
        const pdfH=document.getElementById('previa');pdfH.setAttribute('src',$pdfUrl);
        
        }
        const img=(e)=>{
                const $docu=e.target.files[0];
               
                if($docu.name.slice(-3)!='jpg'&&$docu.name.slice(-3)!='png'){
                        alert("Solo puedes subir imágenes jpg y pngs como portadas")
                        return
                }
                
                const $pdfUrl=URL.createObjectURL($docu);
                setFoto(e.target.files[0])
            console.log($docu)
                document.getElementById('previaFot').setAttribute('src',$pdfUrl);
              
                
                }
                
           
           
                const  onSubmit=handleSubmit(async(data,e)=>{
                        let cont=0;        
                        e.preventDefault();
                        const formData=new FormData();
                       
                        let fechaE =new Date(fechaEvento);
                        let fechaL=new Date(limiteEntrega);
                        let fechaF=new Date(fechaFinEvento);
                        console.log(fechaE);
                        console.log(fechaL==fechaE);
                        /* alert(fechaE>fechaF) */
                        if(fechaE>fechaF){
                          alert("La fecha del inicio del evento no puede ser posterior a la fecha fin del evento")                       
                                return;
                        }
                        if (fechaL  >fechaE) {
                                alert("La fecha límite de entrega no puede ser posterior a la fecha de evento")                       
                                return
                        }
                        else if(!(fechaL<fechaE)){
                                alert("La fecha límite de entrega no puede ser el mismo día de la fecha inicio del evento")
                                return       
                        }      
                    
                        if(filePdf==null||filePdf==undefined||foto==null||filePdf==undefined){
                          alert("Rellene todos los campos");
                          return;
                        }
                        if([nombreEvento,emailEvento,lugarEvento,fechaEvento,fechaFinEvento,limiteEntrega,enlace,tematicas,filePdf,foto].includes('')){

                                alert(" Rellene todos los campos obligatorios");
                                
               
                               
                                return;
                               
                        
                            }
                             
                        let regex=new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

                            if(!regex.test(emailEvento)){
                                alert("Email inválido");
                                cont++;
                            }
                            regex=  /^https:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(\/\S*)?$/;
                                if(!regex.test(enlace)){
                                  alert("El enlace tiene que ser una Url y por motivo de seguridad se exige que sea https, introdúzcalo correctamente");
                                  return;
                                }
                                if(lugarEvento.length>50){
                                  alert("El lugar del evento no puede sobrepasar los 50 caracteres")
                                cont++;
                                }
                                if(nombreEvento.length>30){
                                  alert("El nombre del evento no puede sobrepasar los 30 caracteres")
                                cont++;
                                }
                                if(tematicas.length>100){
                                  alert("La descripción de las temáticas del evento no puede sobrepasar los 100 caracteres")
                                cont++;
                                }
                            if(cont==0){

                                        
                        

                               
                          
                              
                                  
                                              
                                             
                      
                       /*  if(newCont==0){
                                alert("Ehm no puedes subir sin estar registrado")
                                return
                                navigate("/")
                        } */

                       
                                    formData.append("nombreEvento",nombreEvento);
                                    formData.append("lugar",lugarEvento);
                                    formData.append("fechaEvento",fechaEvento);
                                    formData.append("fechaFinEvento",fechaFinEvento);
                                    formData.append("limiteEntrega",limiteEntrega);
                                    formData.append("emailEvento",emailEvento) ;
                                    formData.append("enlace",enlace)       ;
                                    formData.append("tematicas",tematicas);
                                    formData.append("foto",foto) ;
                                    formData.append("pdf",filePdf);
                                    formData.append("likes","");
                                    formData.append("publicacionesPer",idPub);
                                    formData.append("aprobada",false);
                                   
                                if(habEdicion!=true){
                                  const res=await fetch("https://eventoscientificos-nxmx.onrender.com/pendientes/api/v1/pendientes/",{
                                    method:"POST",
                                    body:formData,
    
                            }).then((res)=>{
                                    res.json() 
                                  /*    navigate("/pages/eventos")  */
                                  /* alert("Usted ha subido una publicación, pero por problemas de seguridad primero pasara por un proceso de revisión, se le informará de la decisión tomada"); */
                                    })     .catch(error => {
                                            console.error(error);
                                            return;      
                                          });
                                          formData.append("aprobada",false);
                                          const ress=await fetch("https://eventoscientificos-nxmx.onrender.com/publications/api/v1/publications/",{
                                    method:"POST",
                                    body:formData,
    
                            }).then((ress)=>{
                                    ress.json() 
                                  /*    navigate("/pages/eventos")  */
                                  alert("Usted ha subido una publicación, pero por problemas de seguridad primero pasará por un proceso de revisión, se le informará de la decisión tomada");
                                 
                                return    
                                })     .catch(error => {
                                            console.error(error);
                                            return;      
                                          });
                                          let fecha =new Date();
                                          let month=fecha.getMonth()+1
                                          const formData2=new FormData();
                                          let ayuu;
                                          autores.forEach(element => {
                                            if(element.email==localStorage.getItem("email")){
                                              ayuu=element.id;
                                            }
                                          });
                                         
                                         
                                          formData2.append("notificacionesPer",ayuu)
                                          formData2.append("title","Publicación subida")
                                           formData2.append("contenido",`Usted ha subido una publicación llamada ${nombreEvento},esté atento, le responderemos en breve`,)
                                            formData2.append("resumen","Usted ha subid...")
                                            formData2.append("fechaNot",fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),)
                                            formData2.append("horaNot",fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds())    
                                          const ressa=await fetch("https://eventoscientificos-nxmx.onrender.com/notifica/api/v1/notifica/",{
                                    method:"POST",
                                    body:formData2})
                                }
                                else{
                                  console.log(autores)
                                  let dire;
                                  if(pNormal==true){
                                    dire=publicaciones[numPub].id;
                                  }
                                  else{
                                    dire=publicacionesP[numPubP].id;
                                  }
                                  try {
    
                                    await axios.put(`https://eventoscientificos-nxmx.onrender.com/publications/api/v1/publications/${dire}/`, formData)
                                    setHabEdicion(false);
                                    alert("Usted ha editado su publicación,espere la revisión")
                                  } catch (err) {
                                    console.log(err);
                                  }
                                  let fecha =new Date();
                                          let month=fecha.getMonth()+1
                                          const formData2=new FormData();
                                          let ayuu;
                                          autores.forEach(element => {
                                            if(element.email==localStorage.getItem("email")){
                                              ayuu=element.id;
                                            }
                                          });
                                          formData2.append("notificacionesPer",ayuu)
                                          formData2.append("title","Publicación editada")
                                           formData2.append("contenido",`Usted ha editado la publicación ${nombreEvento},esté atento le responderemos en breve`,)
                                            formData2.append("resumen","Usted ha subid...")
                                            formData2.append("fechaNot",fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),)
                                            formData2.append("horaNot",fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds())    
                                          const ressa=await fetch("https://eventoscientificos-nxmx.onrender.com/notifica/api/v1/notifica/",{
                                    method:"POST",
                                    body:formData2})
                                    const $sonido=document.createElement("audio");
                            $sonido.src="../../audio/notifica.mp3";
                            $sonido.play();
                                }
                               
                              /*   alert(JSON.stringify(`${res.message},status:${res.status}`));
                                 */
                              
                            }
                            else{
                                return
                            } 
                            const $sonido=document.createElement("audio");
                            $sonido.src="../../audio/notifica.mp3";
                            $sonido.play();
                            setTimeout(() => {
                              location.reload("#publicar");      
                            }, 800);
                                              
                                           }       ) 
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
                                                if(localStorage.getItem("email")=="" || localStorage.getItem("email")==undefined || localStorage.getItem("email")==null){
                                                  navigate("/index")
                                                  return;
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
const moverD = async () => {
  let el2=0,contt=0;
  console.log(numPub);
  if (numPub !== undefined) {
    let el = 0;
    
    
      if (el == 0) {
        el = numPub + 1;
      }
      if (el == cantPubl) {
        el = 0;
      } 
      el2=el;
      while (!mapAutPub(autores, publicaciones[el2])) {
        el2++;
        if (el2 == cantPubl) {
          contt++;
          el2 = 0;
        }
        if(contt==2){
          break;
        }
      }
      el=el2;
         
      
      
      setNumPub(el);
      cambDir(el);
    }
  
  if(document.querySelector('.azulGusta')){
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
  }}
 /*  setTimeout(() => {
        window.location.href = "#slider"
      }, 0); */
}
const moverDP = async () => {
  let el2=0,contt=0;
  console.log(numPubP);
  if (numPubP !== undefined) {
    let el = 0;
    
    
      if (el == 0) {
        el = numPubP + 1;
      }
      if (el == cantPublP) {
        el = 0;
      } 
      el2=el;
      while (!mapAutPub(autores, publicacionesP[el2])) {
        el2++;
        if (el2 >= cantPublP) {
          contt++;
          el2 = 0;
        }
        if(contt==2){
          break;
        }
      }
      el=el2;
         
      
      
      setNumPubP(el);
      cambDirP(el);
    }
  
  
 /*  setTimeout(() => {
        window.location.href = "#slider"
      }, 0); */
}
const mover = async (e, aut, publ, numPu) => {
  let el2=0,contt=0;
  console.log(numPub);
  if (numPub !== undefined) {
    let el = 0;
    const $nextBtn = document.querySelector(".slider-btns .next");
    const $prevBtn = document.querySelector(".slider-btns .prev");

    if (e.target === $prevBtn) {
     
      let el = numPub -1;
      if(el<0){
          el=cantPubl-1
         
      }


      el2=el;
      while (!mapAutPub(autores, publicaciones[el2])) {
        el2--;
        if (el2 <0) {
          contt++;
          el2 =cantPubl-1;
        }
        if(contt==2){
          break;
        }
      }
      el=el2
      setNumPub(el);
      
      }
     
      
    if (e.target === $nextBtn) {
      
        el = numPub + 1;
      
      if (el == cantPubl) {
        el = 0;
      } 
      el2=el;
      while (!mapAutPub(autores, publicaciones[el2])) {
        el2++;
        if (el2 == cantPubl) {
          contt++;
          el2 = 0;
        }
        if(contt==2){
          break;
        }
      }
      el=el2;
         
      
      
      setNumPub(el);
      cambDir(el);
    }
  }

  if(document.querySelector('.azulGusta')){
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
  }}
  setTimeout(() => {
    document.getElementById('moverte').scrollIntoView();
      }, 0);
}
const moverP = async (e, aut, publ, numPu) => {
  let el2=0,contt=0;
  console.log(numPubP);
  if (numPubP !== undefined) {
    let el = 0;
    const $nextBtn = document.querySelector(".slider-btns .nextP");
    const $prevBtn = document.querySelector(".slider-btns .prevP");

    if (e.target === $prevBtn) {
     
      let el = numPubP -1;
      if(el<0){
          el=cantPublP-1;
         
          
      }
     
      cambDirP(el)
      setNumPubP(el);
    }
    if (e.target === $nextBtn) {
  
        el = numPubP + 1;
      
      if (el == cantPublP) {
        el = 0;
      } 
      el2=el;
      while (!mapAutPub(autores, publicacionesP[el2])) {
        el2++;
        if (el2 >= cantPublP) {
          contt++;
          el2 = 0;
        }
        if(contt==2){
          break;
        }
      }
      el=el2;
         
      
      
      setNumPubP(el);
      cambDirP(el);
    }
  }

  setTimeout(() => {
    document.getElementById('moverteP').scrollIntoView();
      }, 0);
}

const mapAutPub=(aut,publicacion)=>{
/*   numPubP!=undefined?  console.log(publicacion.id):''; */
        return true;

        
  }
const foto_Txt=(e)=>{
        const $foto_publ=document.querySelector(".fotoCamb");
        if(e.target===$foto_publ){
          setEventosCards(!EventosCards)
        
         
          const currentSrc = $foto_publ.getAttribute("src");
    
          let newSrc = currentSrc === "../../images/cambiar_conv_foto.png" ? "../../images/cambiar_foto_con.png" : "../../images/cambiar_conv_foto.png";
    
          $foto_publ.setAttribute("src", newSrc);
      }}
      
const foto_TxtP=(e)=>{
  const $foto_publ=document.querySelector(".fotoCambP");
  if(e.target===$foto_publ){
    setEventosCardsP(!EventosCardsP)
  
   
    const currentSrc = $foto_publ.getAttribute("src");

    let newSrc = currentSrc === "../../images/cambiar_conv_foto.png" ? "../../images/cambiar_foto_con.png" : "../../images/cambiar_conv_foto.png";

    $foto_publ.setAttribute("src", newSrc);
}}

      const Eliminar=(async()=>{
        const accepted=confirm("¿Quieres borrar tu publicación?")
        if(accepted){
          await deletePublicaciones(publicaciones[numPub].id)
          
          /* agregar una notificaci'on a la persona */
          /* agregar los datos a notificaciones y crear una notificación */
          alert("Publicación Borrada");
         
        }
        else{
         /*  alert("Algo falló"); */
        }
        location.reload("#elPub")
/* actualizar() */
             })
             const EliminarP=(async()=>{
              let otraAyuda;
              const accepted=confirm("¿Quieres borrar tu publicación pendiente?")
              if(accepted){
                await deletePublicaciones(publicacionesP[numPubP].id)
              
                /* agregar una notificaci'on a la persona */
                /* agregar los datos a notificaciones y crear una notificación */
                alert("Publicación Borrada");
               
              }
              else{
               /*  alert("Algo falló"); */
              } 
             setTimeout(() => {
               location.reload("#elPen")
            }, 0);  
        
          })
                   const Megusta =(async (e)=>{
  
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
                      
                      await axios.put(`https://eventoscientificos-nxmx.onrender.com/publications/api/v1/publications/${publicaciones[numPub].id}/`, {
                        "nombreEvento":publicaciones[numPub].nombreEvento,
                        "lugar": publicaciones[numPub].lugar,
                        "fechaEvento": publicaciones[numPub].fechaEvento,
                        "limiteEntrega": publicaciones[numPub].limiteEntrega,
                        "fechaFinEvento":publicaciones[numPub].fechaFinEvento,     
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
                  })

                  const Editar=()=>{
                    setHabEdicion(true);
                    setFechaEvento(publicacionesP[numPubP].fechaEvento);
                    setLimiteEntrega(publicacionesP[numPubP].limiteEntrega);
                    setNombreEvento(publicacionesP[numPubP].nombreEvento);
                    setEmailEvento(publicacionesP[numPubP].emailEvento);
                    setLugarEvento(publicacionesP[numPubP].lugar);
                    setEnlace(publicacionesP[numPubP].enlace);
                    setTematicas(publicacionesP[numPubP].tematicas);
                  setFechaFinEvento(publicacionesP[numPubP].fechaFinEvento);   
                  console.log(numPubP);
                 
                    if (document.getElementById("publicar")) {
                      document.getElementById("publicar").scrollIntoView({ behavior: 'smooth' });
                    
                    }
                  
               }
               const EditarN=()=>{
                setHabEdicion(true);
                setPNormal(true)
                setFechaEvento(publicaciones[numPub].fechaEvento);
                setLimiteEntrega(publicaciones[numPub].limiteEntrega);
                setNombreEvento(publicaciones[numPub].nombreEvento);
                setEmailEvento(publicaciones[numPub].emailEvento);
                setLugarEvento(publicaciones[numPub].lugar);
                setEnlace(publicaciones[numPub].enlace);
                setTematicas(publicaciones[numPub].tematicas)
                setFechaFinEvento(publicaciones[numPub].fechaFinEvento);   
                
                if (document.getElementById("publicar")) {
                  document.getElementById("publicar").scrollIntoView({ behavior: 'smooth' });
                
                }
              
           }
               const quiEdi=()=>{
                setHabEdicion(false);
                setFechaEvento("");
                setLimiteEntrega("");
                setNombreEvento("");
                setEmailEvento("");
                setLugarEvento("");
                setEnlace("");
                setTematicas("")
                setFechaFinEvento("");
                document.getElementById("previaFot").setAttribute("src","");
                document.getElementById("previa").setAttribute("src","");

               }
               /* const Editarr=(async()=>{
                try {
    
                  await axios.put(`https://eventoscientificos-nxmx.onrender.com/pendientes/api/v1/pendientes/${publicacionesP[numPubP].id}/`, {
                    "nombreEvento":nombreEvento,
                    "lugar": lugar,
                    "fechaEvento": fechaEvento,
                    "limiteEntrega": limiteEntrega,
                    "emailEvento":emailEvento,
                    "enlace": enlace,
                    "tematicas":tematicas,
               
                    "likes": publicacionesP[numPubP].likes,
                    "pdf":filePdf,
                   
                    
                    "publicacionesPer": publicaciones[numPub].publicacionesPer
                  })
                  
                } catch (err) {
                  console.log(err);
                }
               }) */
      return (
        
    <div className='bg-[#94b8d7] h-[800vh]  w-[101vw] min-[1000px]:h-[440vh]'>    

      
<div className='divConv w-[40vw]  h-[50vh] relative top-[200px] '>
    <h1 className='    lg:text-4xl  text-center w-[100vw]  hover:text-center cursor-pointer   text-[#02152b] min-[440px]:ml-16 min-[380px]:text-xl text-base ml-8  '>Suba su Convocatoria Científica</h1>
   
   <div className='w-[100vw]'>
    <form noValidate onSubmit={onSubmit} id='publicar' className='ml-[3vw]  encType="multipart/form-data"   mr-[3vw]  w-[95vw]  mt-11 bg-[#000a23] '/* onSubmit={handleSubmit} */>
      
<div className='min-[641px]:grid min-[641px]:grid-cols-2 min-[641px]:grid-rows-2 min-[918px]:grid-cols-3'>
     <div className="mt-2 ml-1">
         
     
        <label htmlFor="nameEvent" noValidate className=' text-[#fcffff]  min-[521px]:ml-[12vw] min-[918px]:ml-[6.5vw] '>Nombre del Evento</label>
<input type="text" placeholder='Nombre del Evento' name="nameEvent" id="nameEvent" className='mt-4  inMis  h-[50px] bg-gray-300 max-[368px]:ml-[0.23rem] min-[641px]:ml-[2.5rem] border-fuchsia-400 ml-4 xl:text-xl'
value={nombreEvento} 

onChange={(e)=>setNombreEvento(e.target.value)}

/>
</div>
<div className="mt-8 min-[641px]:mt-2 ml-1">
        <label htmlFor="lugarEvent"  className=' text-[#fcffff] min-[521px]:ml-[12vw] min-[918px]:ml-[4vw]'>Lugar del Evento</label>
<input type="text" placeholder='Lugar del evento' name="lugarEvent" id="lugarEvent" className='mt-4  inMis  h-[50px] bg-gray-300 max-[368px]:ml-5  ml-9 border border-fuchsia-400  max-[356px]:block max-[356px]:ml-0  min-[641px]: xl:text-xl'
value={lugarEvento}


onChange={(e)=>setLugarEvento(e.target.value)}
/>

</div>
<div className="mt-8 ml-1 min-[918px]:mt-2">
        <label htmlFor="fecha" className=' text-[#fcffff] min-[521px]:ml-[12vw] min-[918px]:ml-[6vw]'>Fecha del Evento</label>
<input type="date" name="fechaEvent" id="fechaEvent" className='mt-4 min-[641px]:mb-2  inMis  h-[50px] bg-gray-300 max-[368px]:ml-5  ml-10 border border-fuchsia-400  w-[191.667px] max-[356px]:block max-[356px]:ml-0  min-[918px]:ml-[2vw] xl:text-xl'
value={fechaEvento}
onChange={(e)=>setFechaEvento(e.target.value)}
/>
</div><div className="mt-8 ml-1 min-[918px]:mt-2">
        <label htmlFor="fecha" className=' text-[#fcffff] min-[521px]:ml-[12vw] min-[918px]:ml-[7vw]'>Fecha Fin del Evento</label>
<input type="date" name="fechaEvent" id="fechaEvent" className='mt-4 min-[641px]:mb-2  inMis  h-[50px] bg-gray-300 max-[368px]:ml-5  ml-5 border border-fuchsia-400  w-[191.667px] max-[356px]:block max-[356px]:ml-0  min-[918px]:ml-[2vw] xl:text-xl'
value={fechaFinEvento}
onChange={(e)=>setFechaFinEvento(e.target.value)}
/>
</div>
<div className="mt-8 ml-1 min-[1000px]:mt-2">
        <label htmlFor="fecha" className=' text-[#fcffff] min-[521px]:ml-[12vw] min-[918px]:ml-[4vw] '>Límite de Entrega</label>
<input type="date" name="limitEvent" id="limitEvent" className='mt-4 w-[191.667px]  inMis  h-[50px] bg-gray-300 max-[368px]:ml-5  ml-9 border border-fuchsia-400  max-[356px]:block max-[356px]:ml-0 xl:text-xl'
value={limiteEntrega}

onChange={(e)=>setLimiteEntrega(e.target.value)}
/>
</div>
<div className="mt-8  ml-1 min-[1000px]:mt-2">
            <label htmlFor="email" className=' text-[#fcffff] min-[356px]:ml-[3.5rem] min-[521px]:ml-[17vw] min-[918px]:ml-[10vw] '>E-mail</label>
<input type="email" name="email" placeholder='Email' id="emailEvent" className=' min-[642px]:ml-10 mt-4  inMis  h-[50px] min-[521px]:ml-[5.5rem]  min-[356px]:ml-[3.8rem] bg-gray-300 max-[368px]:ml-5  ml-3 border border-fuchsia-400  max-[356px]:block max-[356px]:ml-0  xl:text-lg  '
value={emailEvento}

onChange={(e)=>setEmailEvento(e.target.value)}
/>
</div>
<div className="mt-8  ml-1">
        <label htmlFor="lugarEvent" className='text-[#fcffff] min-[356px]:ml-[3.5rem] min-[521px]:ml-[17vw] min-[918px]:ml-[14vw] '>Enlace</label>
<input type="text" name="lugarEvent" id="lugarEvent" className='min-[642px]:ml-10 mt-4  inMis  h-[50px] min-[521px]:ml-[5.5rem]   min-[356px]:ml-[3.8rem] bg-gray-300 max-[368px]:ml-5  ml-3 border border-fuchsia-400  max-[356px]:block max-[356px]:ml-0 min-[917px]:ml-5 xl:text-lg '
value={enlace}

onChange={(e)=>setEnlace(e.target.value)}
/>
</div>
</div>
<div className="mt-4 ml-1 min-[641px]:ml-[20vw]">
        <label htmlFor="fecha" className='ml-[20vw] max-[520px]:ml-0 text-xl max-[641px]:ml-[14vw] min-[641px]:text-2xl text-[#fcffff] text-center '> Temáticas</label>
<textarea   id="fechaEvent" className=' max-[641px]:ml-16 mt-4 min-[641px]:w-[60vw]   inMis  h-[50px] bg-gray-300 max-[368px]:ml-5  max-[520px]:ml-[4.75rem]  border border-fuchsia-400  max-[356px]:block max-[356px]:ml-0  xl:text-2xl'
value={tematicas}

onChange={(e)=>setTematicas(e.target.value)}
/>
</div>

<div className="  min-[641px]:ml-[10vw] inline min-[1000px]:ml-[5vw]">

<label htmlFor="pdfFile" className="custom-file-upload inline-block mt-[80px] ml-4 max-[474px]:ml-0   bg-slate-500 cursor-pointer hover:bg-sky-900 hover:text-[#fff] min-[900px]:w-[200px] text-center text-2xl">
 Subir PDF
</label>
<input   
  accept=".pdf" 

 
  onChange={pdf} 
  type="file" 
  name="pdfFile" 
  id="pdfFile" 
  className="inline absolute opacity-0" 
  
/>
<embed id='previa' type="application/pdf" className='mt-12 ml-4 w-[30vw] inline-block min-w-[250px] max-[474px]:ml-2 max-[390px]:w-[200px] max-[390px]:min-w-[200px] min-h-[400px] mb-[20px]'
/>


</div>
<label htmlFor="imgFile" className="custom-file-upload inline-block mt-[80px] ml-4 max-[474px]:ml-0   bg-slate-500 cursor-pointer hover:bg-sky-900 hover:text-[#fff] min-[900px]:w-[200px] text-center text-2xl" >
  Foto de Portada
</label>
<input
  accept="image/*" 
 
  
  onChange={img} 
  type="file" 
  name="imgFile" 
  id="imgFile" 
  className="inline absolute opacity-0" 
  
/>
<embed id='previaFot' type="" className='mt-12 ml-4 w-[30vw] inline-block min-w-[250px] max-[474px]:ml-2 max-[390px]:w-[200px] max-[390px]:min-w-[200px] min-h-[400px] mb-[20px] min-[1000px]:max-w-[800px] min-[1000px]:min-h-[400px]'

/>  
{habEdicion&&(
<div>
<img src="../../images/flecha_atras.png" className='atras inline-block ml-4 max-[474px]:ml-0   cursor-pointer hover:bg-sky-900  hover:w-28    w-24 ' onClick={quiEdi} alt="" srcset="" />
 <button  /* onClick={Editarr} */ className='inline-block mt-[80px] ml-4 max-[474px]:ml-0   bg-slate-500 cursor-pointer hover:bg-sky-900 hover:text-[#fff] w-[15rem] hover:w-[17rem] text-6xl relative left-[50vw] max-[1100px]:left-[20vw] mb-4'>Editar </button>
 </div>
)
}
{!habEdicion&&(
  <input type="submit" value="Enviar"  className='inline-block mt-[80px] ml-4 max-[474px]:ml-0   bg-slate-500 cursor-pointer hover:bg-sky-900 hover:text-[#fff] w-[15rem] hover:w-[20rem] text-6xl relative left-[30vw] max-[1100px]:left-[20vw] min-[1000px]:left-[80rem] mb-4' />
)}
</form> </div>
    </div>



    <section id='slider' className='mt-8  ml-4 mr-4 slider relative top-[1800px] max-[340px]:top-[1900px] min-[1500px]:top-[1000px]'>
      
      <div id='elPub' className="slider-slides ml-[20vw] ">
      <h2 className='text-center min:665px:text-4xl mr-[1.754rem] text-2xl bg-[transparent] min-[1500px]:text-6xl  min-[1500px]:mr-60  font-mono min:665px:mr-48  mb-8 '>Eventos Publicados</h2>
        <article id='moverte' className='padreEl  absolute slider-slide active max-[660px]:right-[10vw]   max-[500px]:right-[5vw]  max-[438px]:right-[3vw] max-[420px]:right-[2vw] max-[410px]:right-[1vw]  w-[60vw]   bg-[#6495ED]   min-w-[400px] max-[400px]:min-w-[100vw] '>
    
          <div className='flex max-h-[55px] bg-[#f5f5f5]'>
                <h2 className='inline-block nomEvent text-center ml-auto mr-auto text-3xl  mb-2   text-[#000] cursor-pointer max-[1000px]:text-2xl max-[800px]:text-xl max-[600px]:text-lg max-[400px]:text-base '>{ publicaciones!=undefined && publicaciones.length>0&& autores!=undefined&& autores.length > 0 && mapAutPub(autores,publicaciones[numPub]) &&publicaciones[numPub]!=undefined ? publicaciones[numPub].nombreEvento : 'Usted no tiene publicaciones aprobadas,Suba una'} </h2>
             {publicaciones.length>0&&(
              <img src="../../images/cambiar_foto_con.png" className="fotoCamb cursor-pointer w-[80px] mr-[10px] hover:h-[65px]   inline-block relative right-[0] " alt="" srcset="" onClick={foto_Txt} />
             )

             }   
                </div>
                {publicaciones.length > 0&& autores!=undefined&& autores.length > 0 && mapAutPub(autores,publicaciones[numPub]) &&publicaciones[numPub]!=undefined  && !EventosCards &&(
        <img
          src={`https://eventoscientificos-nxmx.onrender.com/static/${cambDirFoto(numPub)}`}
          alt="Imagen"
          className=' ml-auto mr-auto hiEl  h-[80vh] w-[100%] max-h-[744px]'  
        
        />
      )}

      {EventosCards && publicaciones.length > 0&& autores!=undefined&& autores.length > 0 && mapAutPub(autores,publicaciones[numPub]) &&publicaciones[numPub]!=undefined && mapAutPub(autores,publicaciones[numPub])&& publicaciones[numPub]!=undefined&& <EventosCard key={publicaciones.id} publicaciones={publicaciones[numPub]} autores={saberAut()}/>}
                


              {publicaciones.length > 0&& autores!=undefined&& autores.length > 0 && mapAutPub(autores,publicaciones[numPub]) &&publicaciones[numPub]!=undefined&& (
<div className='fotos absolute inline-flex  min-h-[75px] justify-start    border-t  w-[inherit] border-orange-400 bg-white min-w-[400px] max-[400px]:min-w-[100vw]'>
                
                <div className="container hover:text-pink-300">
                  
                
        <img
          src="../../images/edit.png"
          alt="Imagen"
          className=" cursor-pointer max-h-[50px] h-[200px] inline max-[1126px]:block"
          onClick={(e) => EditarN(e)}
        />
      {/*   <span className='relative bottom-[2.7rem] text-[#000080] left-[8vw] min-[350px]:left-[7.5vw] min-[390px]:left-[7.2vw] min-[400px]:left-[7vw] min-[425px]:left-[6.5vw] min-[480px]:left-[6vw] min-[500px]:left-[5.6vw] min-[540px]:left-[5vw] min-[600px]:left-[4.7vw] min-[650px]:left-[4.3vw] min-[700px]:left-[3.7vw] min-[800px]:left-[3.3vw] min-[860px]:left-[3vw] min-[900px]:left-[2.7vw] min-[1128px]:bottom-[.3rem] min-[1128px]:left-[-2.2rem] '>5</span> */}
      <span   className='w-[20px] azulGusta ml-2 cursor-pointer '     onClick={(e) => EditarN(e)}>Editar</span> 
                </div>
                <div className="container  hover:text-blue-400 inline cursor-pointer mr-[2vw] " onClick={(e)=>Comentarios(e)}  >
                 <img src="../../images/comentario.png"    className='max-h-[50px] h-[200px] inline '  ></img>
                <span className='ml-1 cursor-pointer '>Comentarios</span>
                </div> 
                <div className="container inline cursor-pointer">
                <a href={publicaciones.length > 0 ? `https://eventoscientificos-nxmx.onrender.com/static/${cambDirPdf(numPub)}`:''} target='blank'  rel="noopener noreferrer" download="jornada_cientifica.pdf">
                  <img src="../../images/icon_download.jpg" className='max-h-[50px] inline' alt="" /></a>
               <span  className='ml-1 cursor-pointer'>Descargar</span>
                </div>
                <div className="container inline hover:text-red-400 cursor-pointer" onClick={Eliminar}>                <img src="../../images/cancelar3.png"  className='max-h-[50px] inline cursor-pointer'  /* onClick={share} */></img> <span className='cursor-pointer ml-1 hover:text-red-400'>Eliminar</span>
                </div>
</div>
              )}
                
</article>
</div>
<div className="slider-deso ml-[20vw] ocultar ">
     
     <article  className='padreEl absolute slider-slide2 active max-[660px]:right-[10vw]   max-[500px]:right-[5vw]  max-[438px]:right-[3vw] max-[420px]:right-[2vw] max-[410px]:right-[1vw]  w-[60vw]   bg-[#6495ED]   min-w-[400px] max-[400px]:min-w-[100vw] '>
<div className='absolute flex max-h-[55px]  bg-[#6495ED]    min-w-[400px] max-[400px]:min-w-[100vw] w-[60vw]'>
<img src="../../images/atras-a-la-izquierda.png" className="fotoCamb cursor-pointer w-[80px] mr-[10px] hover:h-[65px]    relative right-[0] " alt="" srcset=""  onClick={Atras}  />
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
  {publicaciones.length > 0&& autores!=undefined&& autores.length > 0&&numPub!=undefined && mapAutPub(autores,publicaciones[numPub]) &&publicaciones[numPub]!=undefined&& (
  <div className="slider-btns w-[92vw] relative top-[50vh] max-[1070px]:w-[93vw] max-[675px]:w-[91.5vw]   max-[655px]:w-[99vw] max-[410px]:w-[105vw]">
                    <a className="prev text-[#87CEEB] inline-block w-auto ml-[20vw] max-[675px]:ml-[22.5vw]  max-[660px]:ml-[26vw] max-[572px]:ml-[17vw] max-[410px]:ml-[0vw]" onClick={mover} href="#">&laquo;</a>
                    <a className="next text-[#87CEEB]" onClick={mover} href="#">&raquo;</a>
                </div>)}
</section>
<section id='sliderP' className='mt-16  ml-4 mr-4 slider relative top-[2800px] max-[340px]:top-[2800px] min-[1500px]:top-[2000px]'>
      
      <div   id='elPen' className="slider-slides ml-[20vw] ">
      <h2 className='text-center min:665px:text-4xl mr-[1.754rem] text-2xl bg-[transparent] min-[1500px]:text-6xl  min-[1500px]:mr-60  font-mono min:665px:mr-48  mb-8 '>Eventos Pendientes</h2>
        <article id='moverteP' className='padreEl  absolute slider-slide active max-[660px]:right-[10vw]   max-[500px]:right-[5vw]  max-[438px]:right-[3vw] max-[420px]:right-[2vw] max-[410px]:right-[1vw]  w-[60vw]   bg-[#6495ED]   min-w-[400px] max-[400px]:min-w-[100vw] '>
   
          <div className='flex max-h-[55px] bg-[#f5f5f5]'>
            {publicacionesP!=undefined&&publicaciones>0&& autores!=undefined&& autores.length > 0 &&publicacionesP[numPubP]!=undefined(
              
            )}
                <h2 className='inline-block nomEvent text-center ml-auto mr-auto text-3xl max-[769px]:text-2xl max-[367px]:text-xl mb-2  hover:w-[60%] text-[#000] cursor-pointer '>{publicacionesP.length > 0&& publicacionesP!=undefined && publicacionesP!=undefined&&publicacionesP.length>0&& autores!=undefined&& autores.length > 0 && mapAutPub(autores,publicacionesP[numPubP]) &&publicacionesP[numPubP]!=undefined ? publicacionesP[numPubP].nombreEvento : 'Usted no tiene eventos pendientes'} </h2>
                {publicacionesP.length > 0 && publicacionesP!=undefined&&publicacionesP.length>0&& autores!=undefined&& autores.length > 0 &&publicacionesP[numPubP]!=undefined&&(
                <img src="../../images/cambiar_foto_con.png" className="fotoCambP cursor-pointer w-[80px] mr-[10px] hover:h-[65px]   inline-block relative right-[0] " alt="" srcset="" onClick={foto_TxtP} />
                )}</div>
                {publicacionesP.length > 0&& autores!=undefined&& autores.length > 0 && mapAutPub(autores,publicacionesP[numPubP]) &&publicacionesP[numPubP]!=undefined  && !EventosCardsP &&(
        <img
          src={`https://eventoscientificos-nxmx.onrender.com/static/${cambDirFotoP(numPubP)}`}
          alt="Imagen"
          className=' ml-auto mr-auto hiEl  h-[80vh] w-[100%] max-h-[744px]'  
        
        />
      )}

      {EventosCardsP && publicacionesP.length > 0&& autores!=undefined&& autores.length > 0&&publicacionesP!=undefined &&publicacionesP[numPubP]!=undefined && mapAutPub(autores,publicacionesP[numPubP])&& publicacionesP[numPubP]!=undefined&& <EventosCard  key={publicaciones.id} publicaciones={publicacionesP[numPubP]} autores={saberAutP()}/>}
                


              {publicacionesP.length > 0&& autores!=undefined&& autores.length > 0  &&publicacionesP[numPubP]!=undefined  && (
<div className='fotos absolute inline-flex  min-h-[75px] justify-start    border-t  w-[inherit] border-orange-400 bg-white min-w-[400px] max-[400px]:min-w-[100vw]'>
                
                <div className="container hover:text-green-700">
                  
                
        <img
          src="../../images/edit.png"
          alt="Imagen"
          className=" cursor-pointer max-h-[50px] h-[200px] inline max-[1126px]:block"
          onClick={(e) => Editar(e)}
        />
      {/*   <span className='relative bottom-[2.7rem] text-[#000080] left-[8vw] min-[350px]:left-[7.5vw] min-[390px]:left-[7.2vw] min-[400px]:left-[7vw] min-[425px]:left-[6.5vw] min-[480px]:left-[6vw] min-[500px]:left-[5.6vw] min-[540px]:left-[5vw] min-[600px]:left-[4.7vw] min-[650px]:left-[4.3vw] min-[700px]:left-[3.7vw] min-[800px]:left-[3.3vw] min-[860px]:left-[3vw] min-[900px]:left-[2.7vw] min-[1128px]:bottom-[.3rem] min-[1128px]:left-[-2.2rem] '>5</span> */}
      <span   className='w-[20px] azulGusta ml-2 cursor-pointer '    onClick={(e) => Editar(e)}>Editar</span> 
                </div>
                
                <div className="container inline cursor-pointer">
                <a href={publicacionesP.length > 0 ? `https://eventoscientificos-nxmx.onrender.com/static/${cambDirPdfP(numPubP)}`:''} target='blank'  rel="noopener noreferrer" download="jornada_cientifica.pdf">
                  <img src="../../images/icon_download.jpg" className='max-h-[50px] inline max-[1128px]:block' alt="" /></a>
               <span  className='ml-1 cursor-pointer'>Descargar</span>
                </div>
                <div className="container hover:text-red-400  inline cursor-pointer" onClick={EliminarP}>                <img src="../../images/cancelar3.png"  className='max-h-[50px] max-[1128px]:block inline cursor-pointer'  /* onClick={share} */></img> <span className='cursor-pointer ml-1'>Eliminar</span>
                </div>
</div>
              )}
                
</article>
</div>

  { publicacionesP.length > 0&& autores!=undefined&& autores.length > 0 && mapAutPub(autores,publicacionesP[numPubP]) &&publicacionesP[numPubP]!=undefined && (
  <div  className="slider-btns w-[93vw] relative top-[50vh]   ">
                    <a className="prevP text-[#87CEEB] inline-block w-auto ml-[20vw] max-[675px]:ml-[22.5vw]  max-[660px]:ml-[26vw] max-[572px]:ml-[17vw] max-[410px]:ml-[0vw]" onClick={moverP} href="#">&laquo;</a>
                    <a className="nextP text-[#87CEEB]" onClick={moverP} href="#">&raquo;</a>
                </div>)}
</section>
    </div>
    
    )
}

export default MisEventos
