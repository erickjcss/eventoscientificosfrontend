import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { createPersona, getAllPersonas } from "../api/personas.api";
import { getAllPublicaciones } from "../api/publicaciones";

import axios  from 'axios';

/* import {useHistory,useLocation} from "react-router"


 */
const Autenticar=()=>{
    const {register,handleSubmit,formState:{
        errors
    }}=useForm();
    const [personas,setPersonas]=useState([]);
    const navigate=useNavigate(); 
    const [nombre, setNombre] = useState('');
    const [apellidos,setApellidos]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cPass,setCPass]=useState('');
    const [esTrabajador,setTrabajador]=useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [catDoc,setCatDoc]=useState('');
    const [error,setError]=useState(false);
    const [existeEmail,setExisteEmail]=useState(false);
    
    let cont=0;
    
    const  onSubmit=handleSubmit(async(data,e)=>{
        e.preventDefault();
        const datPer=await getAllPersonas();
        
        for (let i=0;i<datPer.data.length;i++){
            
            console.log(datPer.data[i].email) 
            if(email==datPer.data[i].email){
                alert("Ya se tiene registrado ese email");
                return;
            }
            
        };
          
            
         
            
            
       
        if([nombre,email,apellidos,password,cPass].includes('')){
            alert(" Rellene todos los campos obligatorios");
           
            setError(true);
            return;
        }
        if(nombre.length>20){
            alert("El nombre solo puede tener 20 caracteres como máximo");
            return;
        }
        if(apellidos.length>20){
            alert("Los apellidos solo puede tener 20 caracteres como máximo");
            return
        }
        getAllPersonas().then(response => {
            setPersonas(response.data);
        })
      .catch(error => {
        console.error(error);
      })
      for(let i=0;i<personas.length;i++){

      if(email==personas[i].email){
        alert("El email ya se encuentra registrado");
        return;
      }
              } 
                   if(cPass!=password){
            
            alert("La contraseña no coincide");
            return
        }
        let regex=new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);

        if(!regex.test(email)){
            alert("Email inválido");
            cont++;
        }
       regex=/^[A-Za-zÁÉÍÓÚáéíóúüÜÑñ][A-Za-zÁÉÍÓÚáéíóúüÜÑñ\sA-Z]{1,19}$/;
       if(!regex.test(nombre)){
        alert("Nombre inválido,los nombres deben empezar con mayúscula y no deben tener ni números ni caracteres especiales y entre 2 y 20 caracteres");
        cont++;
    }
    if(!(regex.test(apellidos))){
        alert("Apellidos inválidos,los apellidos deben empezar con mayúscula y no deben tener ni números ni caracteres especiales y entre 2 y 20 caracteres");
        cont++;
    }
    regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
    if(!regex.test(password)){
        alert("Contraseña inválida,las contraseñas deben tener 1 mayúscula,1minúscula,8 caracteres,1 número y 1 caracter especial");
        cont++;
        return
    }
    if(cont==0){
        console.log(esTrabajador);
        console.log(catDoc);
        const datos = {
            
            nombrePer: nombre,
            apellidos:apellidos,
            email: email,
            contr: password,
            esTrabajador:esTrabajador ,
            
            catdoc:esTrabajador==true?catDoc:"",
        };
        let e;
     await createPersona(datos);
     try {
        const response = await axios.post('https://eventoscientificos-nxmx.onrender.com/us/api/v1/crear_contr/',{
            'password':password,
        });
        console.log('Contraseña creada:', response.data);
        setPassword(response.data)
        e=response.data

    } catch (error) {
        console.error('Error al crear la contraseña:', error.response.data);
    }
     try {
        console.log(e.password)
        console.log(password)
        const response = await axios.post('https://eventoscientificos-nxmx.onrender.com/us/api/v1/us/', {
            "username": email,
            "email": email,
            "first_name": "",
            "last_name": "",
            "password":e.password,

        });
        console.log('Usuario creado:', response.data);
        console.log(response.data.token)
   
    } catch (error) {
        console.error('Error al crear el usuario:', error.response.data);
    }
  
    navigate("/");
    }
    else{
        return
    }
    })
    const habCat=(e)=>{
        setIsChecked(!isChecked);
         setTrabajador(!isChecked); 
        console.log(e)
        if(e==true){
            catDoc.disabled=false;
        }
           }

    return(
        <div className=" bg-[#bcbfc6] tamanoAu">
            <h2 className="font-black text-xl md:text-3xl text-center mt- 4">
              Eventos Científicos
            </h2>

            <p className="text-xl text-center font-black mt-2 mb-2 ml-2 mr-2
             ">
                Mira,participa y opina sobre Eventos Científicos
            </p>

            <form noValidate onSubmit={onSubmit} className=" min-[766px]:grid grid-cols-2  grid-rows-4 ">
{/* 
            {error &&<p className="bg-red-800 text-orange-100 text-center font-bold mb-2">"Rellene los campos obligatorios"</p>} */}
        <div className="mt-2 ml-1" >
        <label htmlFor="nombre" className="  max-[372px]:text-[0.759rem] max-[372px]:ml-[13.2vw] text-amber-850  font-black min-[372px]:ml-[.7rem]">Nombre*</label>

        <input type="text" id="nombre" 
        placeholder="Introduza su nombre"
        className=" mt-1  ml-[2.8rem] min-[766px]:ml-[1rem]  h-[4.5vh] md:h-[5vh] max-[372px]:w-[55%] max-[372px]:text-xs  min-[372px]:w-[206.8px] min-[372px]:ml-[5rem]"
        value={nombre}
      
        onChange={(e)=>setNombre(e.target.value)}
        /></div>

<div className="mt-2 ml-1 " >
        <label htmlFor="apellidos" className="  text-amber-850  font-black max-[372px]:text-xs max-[372px]:ml-[13.3vw] min-[372px]:ml-[.7rem] min-[766px]:ml-[0rem] ">Apellidos*</label>

        <input type="text"  id="apellidos" 
        placeholder="Introduza sus apellidos"
        className=" mt-1  ml-[1.9rem]   h-[4.5vh] md:h-[5vh] min-[766px]:mr-3 max-[372px]:ml-[11vw] max-[372px]:w-[55%] max-[372px]:text-xs  min-[372px]:w-[206.8px] min-[372px]:ml-[4.4rem] min-[766px]:ml-[.9555rem]"
        value={apellidos}
        onChange={(e)=>setApellidos(e.target.value)}
        /></div>
            
            <div className="mt-2 ml-1 min-[766px]:mt-4" >
        <label htmlFor="email" className=" text-amber-850   font-black  max-[372px]:text-[0.759rem] max-[372px]:ml-[14vw] min-[372px]:ml-[.7rem]">Email*</label>

        <input type="email"  id="email" 
        placeholder="Introduza su email"
        className=" mt-1 ml-[4.2rem] h-[4.5vh] md:h-[5vh] min-[766px]:ml-[2.4rem] max-[372px]:ml-[18vw] max-[372px]:w-[55%] max-[372px]:text-xs  min-[372px]:w-[206.8px] min-[372px]:ml-[6.5rem]"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        /></div>
         
         
         <div className="mt-2 ml-1  min-[766px]:mt-4 " >
        <label htmlFor="password" 
        className=" max-[372px]:text-xs  text-amber-850  font-black max-[372px]:ml-[13.7vw]   min-[372px]:text-sm min-[372px]:ml-[3vw]  mt  min-[766px]:ml-[0rem] min-[766px]:text-base ">Contraseña*</label>

        <input type="password" id="pass" 
        placeholder="Introduza su contraseña"
        className=" mt-1  ml-[5.7rem] h-[5vh] min-[766px]:mr-2 max-[372px]:ml-[7.5vw] max-[372px]:w-[55%]  min-[372px]:ml-[4.2rem]  min-[372px]:w-[206.8px] min-[766px]:ml-[.30559rem] "
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        /></div>
                 <div className="mt-2 ml-1 min-[1000px]:mt-4" >
        
        <label htmlFor="cPass" className="  text-amber-850  font-black max-[372px]:text-xs max-[372px]:ml-[2vw] min-[373px]:text-sm min-[766px]:text-base   min-[766px]:ml-[-4px] min-[766px]:relative min-[766px]:top-[2vh] ">Confirmar Contraseña*</label>

        <input type="password" id="cPass" 
        placeholder="Confirme su contraseña"
       
        className=" mt-1 w-[55%] ml-1 h-[5vh] min-[766px]:mr-2  min-[372px]:w-[206.8px] min-[766px]:w-[130px] min-[766px]:ml-[0px] min-[766px]:absolute min-[766px]:w-[170px]"
        value={cPass}
        onChange={(e)=>setCPass(e.target.value)}
        /></div>


<div className="ml-1  min-[766px]:mt-4 "  >
        <label htmlFor="esTrabajador"  className="   text-amber-850 font-black  max-[372px]:text-[0.759rem] min-[766px]:ml-[5vw]">¿Usted es trabajador?</label>

        <input type="checkbox" id="esTrabajador" 
        className="ml-[.5vw] inline-block
      w-4 max-[372px]:ml-[3vw] md:w-4  h-4 relative bottom-[-.8vh]  bg-gray-300 rounded cursor-pointer min-[766px]:mt-[15px] "
      value={!isChecked}
      
      onChange={(e) => habCat(e.target.value)}
    
        />
 
        </div>

        <div className="ml-1  max-[488px]:inline md:mr-1 "  >
        <label htmlFor="catDoc"  className="   text-amber-850 font-black max-[372px]:text-[0.759rem]  "
       
        >Categoría Docente</label>

        <textarea cols="3000" rows="100" disabled={!isChecked} id="catDoc" 
  className="mt-3 w-[10vw] h-[4vh] ml-2  max-[488px]:inline min-[766px]:mt-4 min-[766px]:w-[20vw] min-[1000px]:relative min-[1000px]:top-3" 
  value={catDoc}  
  onChange={(e) => setCatDoc(e.target.value)}
></textarea> 
        </div>

      
       
      <div className="  text-center mt-4   mr-auto ml-auto w-[0vw]  max-[488px]:text-right max-[422px]:text-left  max-[692px]:mr-[300px] max-[470px]:mr-[230px] min-[763px]:mr-[400px] min-[1000px]:mt-6 " >
        <input type="submit" value="Registrarse" id="regis" className=" regis text-xl text-center text-amber-850 font-black text-[3vh] cursor-pointer hover:text-neutral-500 hover:text-[200%] max-w-[300px] bg-green-300 max-[652px]:relative max-[692px]:mr-[300px] max-[692px]:top-[-6vh] top-[-2.2vh] right-[-15vw]  max-[422px]:w-[20vw] max-[422px]:text-[3vw] max-[400px]:right-[-33vw] max-[500px]:hover:text-[110%] max-[500px]:hover:w-[7rem] max-[500px]:top-[-10vh]  hover:w-[30vw]  hover:h-[50px] min-[766px]:ml-8  min-[1000px]:hover:w-[15rem] min-[1000px]:hover:h-[42px]"  />
     </div>
     
            </form>

        </div>
    
  )  }

  export default Autenticar