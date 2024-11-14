import { useState , useEffect} from "react";

import { useNavigate} from "react-router-dom";
import { getAllPersonas } from "../api/personas.api";
import EmContext from "../pages/eventos/EmContext";
import { getAllPublicaciones } from "../api/publicaciones";
import axios  from 'axios';
import "react-toastify/dist/ReactToastify.css"
import { toast, ToastContainer} from "react-toastify";
import CustomConfirmToast from "../api/confirmToast";
import Overlay from '../api/Overlay';

//Para configurar los estilos por defecto de los toast ES NECESARIO Importar import { toast, configure } from 'react-toastify';

/* configure({
  position: 'top-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
  style: {
    background: '#000000',
    color: '#ffffff',
    fontSize: '1.2rem',
    borderRadius: '0.5rem',
    padding: '0.5rem 1rem',
    top: '2rem',
  },
}); */
const Formulario=()=>{
   const navigate=useNavigate(); 
   /* const {em,setEm}=useContext(EmContext); */
    const [email,setEmail]=useState('');
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [password,setPassword]=useState('');
    const [error,setError]=useState(false);
    const [equivocaciones,setEquivocaciones]=useState();
    /* 
            let i=equivocaciones+1;
            setEquivocaciones(i);
            if(quivoaciones==6){
                 const regex = /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ\s]+$/;
    } */
    
    let cont=0;
    
  
    const handleSubmit=async(e)=>{

      e.preventDefault();
     
      setIsOverlayVisible(true);
      toast.info(
        <CustomConfirmToast
        
          message="¿Estás seguro de que quieres continuar?"
          onConfirm={() => {
            toast.dismiss(); 
     
            setIsOverlayVisible(false);
          }}
          onCancel={() => {
            toast.dismiss();
            setIsOverlayVisible(false);
          }}
          
        />,
        {
          autoClose: false,
          closeOnClick: false,

          pauseOnFocusLoss: false, // Evita que se cierre el toast si se pierde el foco
          draggable: true, // Permite arrastrar el toast
          hideProgressBar: true, // Oculta la barra de progreso
         
          position: "top-center",
          style: {
            className:"  white  rounded-[5.5rem] mt-4  ",
                
            }
            ,onClose: () => {
              setIsOverlayVisible(false); // Ocultar el Overlay
             
              console.log('Toast cerrado');
            }
        }
      );
    
        
      
        if([email,password].includes('')){
            //alert(" Rellene todos los campos obligatorios");
            toast.error("Rellene todos los campos obligatorios",{position:"top-center", 
            style: {
            className:"bg-red  white text-[1.2rem]  p-[1rem] rounded-[.5rem] mt-4  ",
                
            }})
            
            setError(true);
            return;
        }
        let regex=new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        if(!regex.test(email)){
            toast.error("Email Inválido",{position:"top-center"})
            cont++;
        }
    regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    if(!regex.test(password)){
      toast.error("Contraseña inválida,las contraseñas deben tener 1 mayúscula,1minúscula,8 caracteres,1 número y 1 caracter especial", { position: "top-center" });  
         cont++;
    }
    if(cont==0){
        const res=await getAllPersonas();
        for(let i=0;i<res.data.length;i++){
            if(res.data[i].email===email){
                if(res.data[i].contr===password){
                    let token,username;
           try {
            const loginResponse = await axios.post('https://eventoscientificos-nxmx.onrender.com/us/api/v1/iniciar_sesion/', {
              "username": email,
              "password": password,
            });
           token = loginResponse.data.token;
           username=loginResponse.data.username 
            console.log('Usuario autenticado:', loginResponse);
          } catch (error) {
            console.error('Error al autenticar:', error);
          }
          let fecha =new Date();
          let month=fecha.getMonth()+1
          
 await axios.post(`https://eventoscientificos-nxmx.onrender.com/sesi/api/v1/sesi/`,{
  'hora':fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds(),
  'fecha':fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),
  'email':username,
  'accion':'Iniciar Sesión',
 })
          await axios.post('https://eventoscientificos-nxmx.onrender.com/sesion/api/v1/sesion/',{
               'idPer': res.data[i].id,
               'horaInicio':fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds() ,
                'fechaInicio':fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),
                'email':res.data[i].email,
                'horaCierre':fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds(),
                'fechaCierre':fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),
          })
                     localStorage.setItem('token',token);
                     localStorage.setItem('email',username);       
                     
                     toast.success("Autenticado correctamente", { position: "top-center" });
               
                      navigate("/index")
                   
                    return;
                }
                else{
                
                    if(res.data[i].equivocaciones>5){
                      toast.error("Su cuenta será bloqueada por 30 segundos por demasiados errores en contraseña", { position: "top-center" }); 
                      console.log()
                        document.querySelector(".ent").disabled=true;  
                        document.querySelector(".ent").classList.add("disa");
                        setTimeout(() => {
                            document.querySelector(".ent").classList.remove("disa");
                            document.querySelector(".ent").classList.add("cursor-pointer hover:text-gray-600 hover:text-4xl  hover:h-[6.5vh] bg-fuchsia-300  w-[40%] text-2xl mt-12")
                            document.querySelector(".ent").disabled=false;  
                      
                        }, 30000);
                       await axios.put(`https://eventoscientificos-nxmx.onrender.com/personas/api/v1/personas/${res.data[i].id}/`,{
                            ...res.data[i],"equivocaciones": 0                   })
                            document.querySelector(".ent").disabled=false;
                        return
                    }
                  

                    toast.error("La contraseña no coincide con esa cuenta de correo",{ position: "top-center" })
                   await axios.put(`https://eventoscientificos-nxmx.onrender.com/personas/api/v1/personas/${res.data[i].id}/`,{
                    ...res.data[i],"equivocaciones": res.data[i].equivocaciones+1
                   })
                    return}    
            }
        }    
        toast.error("No existe esa cuenta, Registrese por favor",{position:"top-center"});
            
        }
      
        
            
    else{
        return
    }
 
           }
           const Regis=()=>{
            navigate("/autenticar");
           }
         const Invitado=()=>{
          localStorage.setItem('token','');
          localStorage.setItem('email','');
          navigate('/index')
         }  
         const Resetear=()=>{
          navigate('/change')
         }

    return(
      
        <div className="bg-[#94b8d7] divFor ">
         {isOverlayVisible==true&&(
 <Overlay />
         )
}
     
            <h2 className="font-black text-xl md:text-3xl text-center  mt- 4">
               Eventos Científicos
               <ToastContainer className="text-xs w-[100vw] inline-block text-center ml-auto mr-auto"/>
            </h2>

            <p className="text-xl text-center font-black mt-2 mb-2 ml-2 mr-2
             ">
                Mira,participa y opina sobre Eventos Científicos
            </p>

            <form noValidate onSubmit={handleSubmit} className="  ">
{/* 
            {error &&<p className="bg-red-800 text-orange-100 text-center font-bold mb-2">"Rellene los campos obligatorios"</p>} */}
       
            
            <div className="mt-8 ml-3" >
        <label htmlFor="email" className=" text-amber-850 text-xl   font-black  uppercase ">Email*</label>

        <input type="email" id="email" 
        placeholder="Introduza su email"
        className=" mt-1 ml-[4.2rem] h-[5.5vh] md:h-[6vh] min-[624px]:ml-[4.4rem]"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        /></div>
         
         
         <div className="mt-8 ml-3 " >
        <label htmlFor="password" className="  text-amber-850  font-black  uppercase ">Contraseña*</label>

        <input type="password" id="pass" 
        placeholder="Introduza su contraseña"
        className=" mt-1  ml-[1.4rem] h-[5vh] min-[624px]:mr-2"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        /></div>


      <div className=" ml-2 mr-2 w-full inline inputPrin" >
        <input type="submit" value="Entrar" className=" max-[398px]:text-xl ent cursor-pointer  hover:text-white  bg-green-300 hover:text-2xl  hover:h-[5.5vh] w-[40%] text-2xl mt-12  min-[1000px]:ml-4 min-[1000px]:mr-4  "  />
     </div>
     <div className="inputPrin ml-2 mr-2 w-full inline" >
     <input type="button" onClick={Regis} className=" max-[398px]:text-xl cursor-pointer  hover:text-white  bg-[#00BFFF]   w-[40%] text-2xl mt-12 hover:text-2xl  hover:h-[5.5vh]"  value="Regístrate"/>
     </div>
     <div onClick={Invitado} className=" ml-2 mr-2 max-[419px]:ml-0 inputPrin max-[419px]:mr-0 w-full inline" >
        <input type="submit"  value="Modo Invitado" className=" max-[398px]:text-xl max-w-[419px]:ml-0 cursor-pointer  hover:text-white hover:text-2xl  hover:h-[5.5vh] bg-green-300  w-[38%] min-w-[159.22px] text-2xl mt-12 max-[398px]:min-w-[140px] max-[340px]:min-w-[130px]  max-[335px]:min-w-[125px] min-[1000px]:ml-4 min-[1000px]:mr-4"  />
     </div>
     <div onClick={Resetear} className="inputPrin ml-2 max-[430px]:ml-1  mr-2 w-full inline" >
     <input type="button"  className=" cursor-pointer max-[398px]:text-xl  hover:text-white hover:text-2xl  hover:h-[5.5vh] bg-[#00BFFF]   w-[45%] text-2xl mt-12 min-w-[223.25px] max-[398px]:min-w-[190px]"  value="Resetear Contraseña"/>
     </div>
     
            </form>

        </div>
    
  )  }

  export default Formulario