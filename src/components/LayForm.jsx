import { useEffect, useState,useRef } from 'react'
import {Outlet,Link,useNavigate} from 'react-router-dom'
import { EmProvider } from '../pages/eventos/EmContext'

function LayForm  () {
  
  
    const [em,setEm]=useState('')
    const navigate=useNavigate();
      const [menuCard,setMenuCard]=useState(false);
      const imp=()=>{
        console.log(2+2)
      }
      const menuRef = useRef(null);
      const menuCardRef = useRef(true);
      document.addEventListener('click', (e) => {
    let val1=e.target.classList.contains('cerrar')
    let val2=e.target.classList.contains('cerrarr')
        if (!e.target.closest('.menu') &&!val1&&!val2 ) {
    
            setMenuCard(false);
        }
    });
      useEffect(() => {
        
    
    
    
    
      }, []);
    
        const cambMenu=()=>{
          setMenuCard(true);
        }
        const cambMenuu=()=>{
          setMenuCard(false);
        }
    const Registrarse=()=>{
   
      navigate('/autenticar')
    }
const Iniciar=()=>{
  localStorage.setItem('token','')
  localStorage.setItem('email','')
  navigate("/")
}

  return (
    <EmProvider >
    <div className=' bgh bg-[#7498b6] w-full h-[100vh]'>
      <h2 className= 'bg-[#02253d]  w-full h-4'></h2>
      <div className='absolute top-[15vh] opacity-0 invisible min-[1196px]:opacity-100 min-[1196px]:visible cursor-pointer'>
      {!menuCard&&(
        <img onClick={cambMenu} ref={menuRef} className='menu  h-[100px] max-[400px]:w-[50px] max-[600px]:w-[70px]' src='../../images/profile-user.png'></img>
      )}
      {menuCard&&(
        <nav>
        <li onClick={Iniciar}  className=' list-none hover:text-lg min-[500px]:ml-2 hover:text-green-400 cursor-pointer text-white '>
            <img src="../../images/iniciar-sesion.png" className='w-8  inline-block min-[500px]:mr-2' alt="" srcset="" />Iniciar Sesión</li>
            <Link className='cursor-pointer  text-white'  to="/change"><li className='min-[916px]:mt-4 hover:text-yellow-600 cursor-pointer list-none min-[500px]:ml-2 '>
          <img src="../../images/recargar.png" className='w-8 inline-block min-[500px]:mr-2 ' alt="" srcset="" />
            Cambiar Contraseña</li></Link>
          <li onClick={Registrarse} className='cerrar min-[916px]:mt-4 hover:text-green-200 cursor-pointer list-none min-[500px]:ml-2  text-white'>
          <img src="../../images/registrar.png" onClick={Registrarse} className='cerrarr w-8 inline-block min-[500px]:mr-2' alt="" srcset="" />
           Registrarse</li>
          
          
          <Link className='cursor-pointer' to="/eliminar"> <li className='cerrar min-[916px]:mt-4 hover:text-red-600 cursor-pointer list-none min-[500px]:ml-2  text-white'>
          <img src="../../images/quitar-usuario.png"  className='cerrarr w-8 inline-block min-[500px]:mr-2' alt="" srcset="" />
           Eliminar Cuenta</li></Link>
          <li onClick={cambMenuu} className=' text-white min-[916px]:mt-4 hover:text-yellow-600  cursor-pointer list-none min-[500px]:ml-2'>
          <img src="../../images/hacia-atras.png" className='w-8 inline-block cursor-pointer min-[500px]:mr-2' alt="" srcset="" />
            Atrás</li>
        </nav>
      )}
    </div>
      <Outlet />
      
    </div>
    </EmProvider>
  );
}

export default LayForm
