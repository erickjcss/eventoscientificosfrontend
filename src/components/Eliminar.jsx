
import {useState,useEffect, React} from 'react'
import { useNavigate} from "react-router-dom";
import { getAllPersonas } from '../api/personas.api';
import axios  from 'axios';
const Eliminar = () => {
  const navigate=useNavigate(); 
    let cont=0,cont2=0;
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleSubmit=async(e)=>{
      if(localStorage.getItem("email")!=""){
          alert("Debe cerrar sesión antes de poder eliminar su cuenta");
      }
      if(email=='erickmiralles362@gmail.com'){
        alert("No puede eliminar su cuenta,usted es el administrador.");
        return;
      }
        e.preventDefault();
        if([email,password].includes('')){
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
          /*   console.log(res.data);
            console.log(email==res.data[47].email) */
            if(res.data[i].email===email){
             
                cont2++;
              
                if(res.data[i].contr===password){
                      
         let ace= confirm("¿Usted está segur@ de eliminar su cuenta?")
         if(ace){
            await axios.delete(`https://eventoscientificos.onrender.com/personas/api/v1/personas/${res.data[i].id}/`)
         
          
 
                     localStorage.setItem('token','');
                     localStorage.setItem('email','');       

       
           try {

            const eliminadoResponse = await axios.post(`https://eventoscientificos-nxmx.onrender.com/us/api/v1/eliminar/`,{
                'username':email,
                'password':password,
                
        })
          
          
          
          
          
            console.log('Usuario eliminado:', eliminadoResponse);
            navigate('/autenticar')        
          } catch (error) {
            alert("No coinciden las credenciales")
            console.error('Error al eliminar:', error);
            alert("Error en la contraseña");
          }
           
        }
       break;
        }
        else{
          alert("No coinciden las credenciales");
        }
        
    }   }
  }
    else{
        return
    }
    if(cont2==0){
        alert("No se tiene registrada esa cuenta")
        return
}}
  return (
    <div>
       <div className="bg-[#94b8d7] divFor ">
            <h2 className="font-black text-xl md:text-3xl text-center  mt- 4">
               Eventos Científicos
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


      <div className="  w-full inline inputPrin ml-[140px]">
        <input type="submit" value="Eliminar" className=" max-[398px]:text-xl ent cursor-pointer text-gray-100  hover:text-white  bg-red-700 hover:text-2xl  hover:h-[5.5vh] w-[40%] text-2xl mt-12  min-[1000px]:ml-4 min-[1000px]:mr-4  "  />
     </div>
     </form>
    </div>
    </div>
  )
}

export default Eliminar
