import { useState , useEffect} from "react";

import { useNavigate} from "react-router-dom";
import { getAllPersonas } from "../api/personas.api";
import EmContext from "../pages/eventos/EmContext";

import axios  from 'axios';
const ChangePassword = () => {
    const navigate=useNavigate(); 
    /* const {em,setEm}=useContext(EmContext); */
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
     const [newPassword,setNewPassword]=useState('');
     const [newPassword2,setNewPassword2]=useState('');
     const [error,setError]=useState(false);
     const [equivocaciones,setEquivocaciones]=useState();
     /* 
             let i=equivocaciones+1;
             setEquivocaciones(i);
             if(quivoaciones==6){
                  const regex = /^[A-ZÁÉÍÓÚÜÑ][a-záéíóúüñ\s]+$/;
     } */
     
     let cont=0,cont2=0,newNew;
     
   
     const handleSubmit=async(e)=>{
         e.preventDefault();
         if([email,password,newPassword,newPassword2].includes('')){
             alert(" Rellene todos los campos obligatorios");
             
             setError(true);
             return;
         }
         let regex=new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
 
         if(!regex.test(email)){
             alert("Email inválido");
             cont++;
         }
       
     regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
     if(!regex.test(password)){
         alert("Contraseña inválida,las contraseñas deben tener 1 mayúscula,1minúscula,8 caracteres,1 número y 1 caracter especial");
         cont++;
     }
     if(cont==0){
         const res=await getAllPersonas();
      
         for(let i=0;i<res.data.length;i++){
             
             if(res.data[i].email===email){
                 
                 if(res.data[i].contr===password){
                 
                   
               
 
          let ja=password
           
           
              try {
                const camb = await axios.put('https://eventoscientificos-nxmx.onrender.com/us/api/v1/cambiar_contr/', {
               'username':email,
               
               'contrasena_actual':password,
               'contrasena_nueva':newPassword,
            } ) 
            console.log(camb) 
            
          newNew=camb.data.password
        }catch (error) {
          console.error(error); 
          alert("La contraseña antigua no coincide con la almacenada en la base de datos")
           cont2++;
        } 
           
try{


   
    await axios.put(`https://eventoscientificos.onrender.com/personas/api/v1/personas/${res.data[i].id}/`, {
      "nombrePer":res.data[i].nombrePer,
      "apellidos":res.data[i].apellidos,
      "email":res.data[i].email,
      "contr":newPassword,    
      'esTrabajador':res.data[i].esTrabajador ,
     'catDoc':res.data[i].catDoc,
      
    })}
    catch(error){
        
    }
    console.log('Usuario cambio la contraseña');


            

         cont2==0?navigate("/"):alert("Mala contraseña")
                     
                     return;
                 }
                 else{
                   
                     alert("La contraseña no coincide con esa cuenta de correo") 
                    
                     return}    
             }
         }          
         alert("No existe esa cuenta, Regístrese por favor")
             
         }
       
         
             
     else{
         return
     }
  
            }
            const Regis=()=>{
                navigate("/autenticar");
               }
  return (
    <div className="bg-[#94b8d7] divFor min-[759px]:w-[768px] min-w-[695px]   max-[895px]:mr-4 max-[759px]:max-w-[98vw] max-[759px]:w-[98vw] max-[759px]:min-w-[98vw] max-[748px]:min-h-[619px] max-[755px]:h-[700px]    ">
    <h2 className="font-black text-xl md:text-3xl text-center  mt-4">
       Eventos Científicos
    </h2>

    <p className="text-xl text-center font-black mt-2 mb-2 ml-2 mr-2
     ">
        Mira,participa y opina sobre Eventos Científicos
    </p>

    <form noValidate onSubmit={handleSubmit} className="  ">
{/* 
    {error &&<p className="bg-red-800 text-orange-100 text-center font-bold mb-2">"Rellene los campos obligatorios"</p>} */}

    <div className="min-[755px]:inline-flex">
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
placeholder="contraseña antigua"
className=" mt-1  ml-[1.4rem] h-[5vh] min-[624px]:mr-2"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/></div>
</div>

<div className="min-[755px]:inline-flex">
<div className="mt-8 min-[755px]:mt-16 ml-1 " >
<label htmlFor="newpass" className="  text-amber-850  font-black  uppercase ">Nueva Contraseña*</label>

<input type="password" id="newpass" 
placeholder="nueva contraseña"
className=" mt-1 text-xs ml-[.27rem] h-[5vh] min-[624px]:mr-2"
value={newPassword}
onChange={(e)=>setNewPassword(e.target.value)}
/></div>
<div className="mt-8 min-[755px]:mt-16 ml-1 " >
<label htmlFor="newpass2" className="max-[385px]:text-[0.9rem]  text-amber-850  font-black  uppercase ">Confirmar Contraseña*</label>

<input type="password" id="newpass2" 
placeholder="confirme contraseña"
className=" mt-1 text-xs ml-[.27rem] h-[5vh] min-[624px]:mr-2 max-[385px]:w-[122px] "
value={newPassword2}
onChange={(e)=>setNewPassword2(e.target.value)}
/></div></div>

<div className=" ml-2 mr-2 w-full inline inputPrin max-[436px]:ml-1 max-[436px]:mr-1" >
<input type="submit" value="Cambiar Contraseña" className=" hover:text-white hover:text-2xl max-[398px]:text-xl ent cursor-pointer  bg-green-300 hover:h-[6.5vh] w-[50%] text-2xl mt-12  min-[1000px]:ml-4 min-[1000px]:mr-4 min min-w-[223.92px]"  />
</div>
<div className="inputPrin ml-2 mr-2 w-full inline max-[436px]:ml-1 max-[436px]:mr-1" >
<input type="button" onClick={Regis} className=" max-[398px]:text-xl cursor-pointer hover:text-white hover:text-2xl  hover:h-[6.5vh] bg-[#00BFFF]   w-[40%] text-2xl mt-12 max-[409px]:w-[120px] max-[373px]:w-[90px]"  value="Regístrate"/>
</div>



    </form>

</div>
  )
}

export default ChangePassword
