import { useEffect, useState,useRef } from 'react'
import {Outlet,Link,useNavigate} from 'react-router-dom'
import { EmProvider } from '../pages/eventos/EmContext'
import { getAllPersonas } from '../api/personas.api';
import axios  from 'axios';


function Lay  () {
  
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
const CerrarSesion=(async()=>{
  let fecha =new Date();
  let month=fecha.getMonth()+1
 let aux=0;
 let ema=localStorage.getItem("email")!=''?localStorage.getItem("email"):'invitado@gmail.com'
if(localStorage.getItem("email")==''){
  ema='invitado@gmail.com';
}
 await axios.post(`https://eventoscientificos-nxmx.onrender.com/sesi/api/v1/sesi/`,{
  'hora':fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds(),
  'fecha':fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),
  'email':ema,
  'accion':'Cerrar Sesión',
 })

  const ja= await axios.get(`https://eventoscientificos-nxmx.onrender.com/sesion/api/v1/sesion/`)
 ja.data.forEach(element => {
    if(element.email==localStorage.getItem("email")&&element.horaInicio==element.horaCierre&&element.fechaInicio==element.fechaCierre){
        aux=element.id
    
    
 axios.put(`https://eventoscientificos-nxmx.onrender.com/sesion/api/v1/sesion/${element.id}/`,{
    
       'horaInicio':element.horaInicio ,
        'fechaInicio':element.fechaInicio,
        'email':element.email,
        'horaCierre':fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds(),
        'fechaCierre':fecha.getFullYear()+'-'+month +'-'+fecha.getDate(),
    })
 } });
  
  if(localStorage.getItem("email")!=''){
    console.log('ja')
  }
  localStorage.setItem("email",'');
  localStorage.setItem("token",'');
  
  navigate('/')
})
const Iniciar=()=>{
  localStorage.setItem('token','')
  localStorage.setItem('email','')
  navigate("/")
}

  return (
    <EmProvider >
    <div className=' bg-[#7498b6] w-[101vw] h-[100vh]'>
      
      <h2 className= 'bg-[#02253d]  w-full h-4'></h2>
      <div className='absolute top-[15vh]'>
      {!menuCard&&(
        <img onClick={cambMenu} ref={menuRef} className='menu  cursor-pointer h-[100px] max-[400px]:w-[50px] max-[600px]:w-[70px]' src='../../images/profile-user.png'></img>
      )}
      {menuCard&&(
        <nav>
          <li  onClick={Iniciar}  className='list-none hover:text-lg min-[500px]:ml-2 hover:text-white cursor-pointer'>
            <img src="../../images/iniciar-sesion.png" className='w-8  inline-block min-[500px]:mr-2' alt="" srcset="" />Iniciar Sesión</li>
            <Link className='cursor-pointer'  to="/change"><li className='min-[916px]:mt-4 hover:text-white cursor-pointer list-none min-[500px]:ml-2'>
          <img src="../../images/recargar.png" className='w-8 inline-block min-[500px]:mr-2' alt="" srcset="" />
            Cambiar Contraseña</li></Link>
          <li onClick={CerrarSesion} className='cerrar min-[916px]:mt-4 hover:text-white cursor-pointer list-none min-[500px]:ml-2'>
          <img src="../../images/cerrar_sesion.png" onClick={CerrarSesion} className='  cursor-pointer cerrarr w-8 inline-block min-[500px]:mr-2' alt="" srcset="" />
            Cerrar Sesión</li>
          <li onClick={cambMenuu} className='z-50 min-[916px]:mt-4 hover:text-white cursor-pointer list-none min-[500px]:ml-2'>
          <img src="../../images/hacia-atras.png" className=' w-8 inline-block cursor-pointer min-[500px]:mr-2' alt="" srcset="" />
            Atrás</li>
        </nav>
      )}
    </div>
      <Outlet />
      
    </div>
    </EmProvider>
  );
}

export default Lay
