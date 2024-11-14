import { useEffect,useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import EmContext from "../pages/eventos/EmContext";
import { getAllPersonas } from '../api/personas.api';
import axios from "axios";
const Header=()=>{
    const {em,setEm}=useContext(EmContext);
    const [menu,setMenu]=useState('');
    const [page,setPage]=useState('');

useEffect(() => {
    if(em==""){
        /*  navigate("/") */
     let valor=(localStorage.getItem("email"));
       setEm(valor?(valor):""); 
       }
console.log(em)
if(localStorage.getItem("email")=='erickmiralles362@gmail.com'){
    setMenu('Administrar');
    setPage('../pages/Administrar')
}
else{
    setMenu('Mis Eventos');
    setPage('../pages/misEventos')
}
getAllPersonas().then(response => {
for(let i=0;i<response.data.length;i++){
    if(response.data[i].email==localStorage.getItem("email")&&response.data[i].cantNotificaciones>0){
        const $sonido=document.createElement("audio");
  $sonido.src="../../audio/notifica.mp3";
  $sonido.play();
   axios.put(`https://eventoscientificos-nxmx.onrender.com/personas/api/v1/personas/${response.data[i].id}/`,{
        "nombrePer":response.data[i].nombrePer,
        "apellidos":response.data[i].apellidos,
        "email":response.data[i].email,
        "contr":response.data[i].contr,
        "cantNotificaciones":0      
  } )
            break;
    }
}
})
 }, 
      
      [menu]);
return (
    
    <div className="w-screen ">
                <div className='w-[101vw] bg-[#c4dafa]'>
        <nav className="principal bg-[#c4dafa] inline-flex w-[100vw]  justify-between  ">
        <img src="../../images/logotipo_uci.png" className="uci inline  min-[720px]:ml-10 max-[420px]:w-[50%]  max-[780px]:w-[80%]   max-[680px]:w-[60%] flex-initial" alt="" srcset="" />
        <ul className="lista inline-flex relative  flex-initial items-start mt-2 md:items-center "> 
        <Link to="/index">   <li className="menu1"><Link to="/index">Inicio</Link></li></Link>
        <Link to="/../pages/eventos"><li className="menu1"><Link to="../pages/eventos">Eventos</Link></li></Link>
        <Link to="../pages/misEventos"><li id='mis' className="menu1"><Link to={page}>{menu}</Link></li></Link>
        
        <Link to="/pages/Notificaciones"><li className="menu1-i"><Link to="/pages/Notificaciones"><img className="uciImg" src="../../images/icon.png" alt="" srcset="" /></Link></li></Link>
        
        </ul>
        </nav></div>
        <Outlet />   
</div>

)




}



export default Header; 