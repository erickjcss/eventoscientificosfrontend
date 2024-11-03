import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Formulario from './components/Formulario';
import Header from './components/Header';

import Lay from './components/Lay';
import Persona from './pages/Persona';
import Index,{loader as personasLoader}from './pages/Index';
import Eventos from './pages/Eventos';
import Comentarios from './pages/eventos/Comentarios';
import Autenticar from './components/Autenticar';
import MisEventos from './pages/MisEventos';
import PersonasPage from './pages/PersonasPage';
import  Appa from './pages/eventos/Appa'
import Administrar from './pages/Administrar';
import LayForm from './components/LayForm';
import ChangePassword from './components/ChangePassword';
import Eliminar from './components/Eliminar';
import Notificaciones from './pages/eventos/Notificaciones';


const router=createBrowserRouter([
  {
    path:'/',
    element:<LayForm/ >,
    children: [
  { 
    path:'/',
    element:<div className="formulario container h-screen mt-6  mt-10vh  max-h-[350px] min-[633px]:mx-auto  flex  justify-center "><Formulario/>  </div>
  },
  { 
    path:'/change',
    element:<div className="formulario container h-screen mt-6  mt-10vh  max-h-[350px] min-[633px]:mx-auto  flex  justify-center "><ChangePassword/>  </div>
  },
  {
    path:'/autenticar',
    element:<div className="formulario container h-screen mt-6  mt-10vh  max-h-[450px] min-[633px]:mx-auto  flex  justify-center "><Autenticar/>  </div>,
  },
  {
    path:'/eliminar',
    element:<div className="formulario container h-screen mt-6  mt-10vh  max-h-[450px] min-[633px]:mx-auto  flex  justify-center "><Eliminar/>  </div>,
  },
]},
  {
    path:'/',
    element:<Lay/ >,
    children: [
     
     
     /*  {
        path:'/persona',
        element:<div className="formulario container h-screen mt-6  bg-black mt-10vh  min-[633px]:mx-auto  flex  justify-center "><Formulario/>  </div>
      }
    */ 
  {
    path:'/personas',
        element:<div className="formulario container h-screen mt-6  mt-10vh  max-h-[450px] min-[633px]:mx-auto  flex  justify-center "><PersonasPage/>  </div>,
  },
  {
    path:'/probar',
        element:<div className="formulario container h-screen mt-6  mt-10vh  max-h-[450px] min-[633px]:mx-auto  flex  justify-center "><Appa/>  </div>,
  },
    
  {
    path:'/',
    element:<div className="w-screen "><Header/></div>,
    children: [
  {
    path:'/index',
    element:<Index/>,
   /*  loader:personasLoader, */
  },
  {
    path:'/pages/eventos',
    element:<Eventos />,
  },{
      path:'/pages/eventos/comentarios',
      element:<Comentarios/>,
  
  },
 {
  path:'/pages/misEventos',
  element:<MisEventos/>,
 },
 {
  path:'/pages/Administrar',
  element:<Administrar/>,
 },
 {
  
  path:'/pages/Notificaciones',
  element:<Notificaciones/>,
 },
]},

]
},
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
)
