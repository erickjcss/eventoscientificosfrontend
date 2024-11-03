export function EventosCard({ publicaciones,autores }){
    
    return(
        <div className="ml-2 mr-auto min-[1600px]:mt-8 h-[80vh] w-[100%] max-h-[744px] " >
            <div className="max-[755px]:mb-[5vh] min-[755px]:flex  min-[755px]:h-[261px] min-[1152px]:h-[40vh] min-[1252px]:h-[35vh]">
        <h2 className=" font-[Roboto] text-[0.6rem] max-[745px]:mb-[8px]  mr-4 min-[889px]:14px  min-[755px]:w-[46%] min-[1000px]:w-[47%]  min-[755px]:inline-block min-[755px]:text-[1.6vw] min-[919px]:text-[14.8px] text-justify text-[#F5F5F5] min-[1000px]:relative min-[1000px]:top-[8rem] min-[1000px]:text-4xl"><span className="ml-[15vw] min-[1000px]:text-4xl text-lg min-[755px]:ml-[3vw]  ">Lugar :</span> {publicaciones.lugar}</h2>
        <p className="min-[1000px]:top-[8rem] min-[1000px]:relative min-[1000px]:w-[35vw] min-[1000px]:text-4xl max-[755px]:mt-[5vh] font-[Roboto]  min-[755px]:text-[1.6vw] min-[919px]:text-[14.8px] text-xs max-[745px]:mb-[8px] min-[889px]:14px  mr-4 min-[755px]:w-[46%]  min-[755px]:inline-block text-justify text-[#F5F5F5]"><span className="ml-[15vw] text-lg min-[755px]:ml-[3vw] min-[1000px]:text-4xl ">Temáticas :</span>         {publicaciones.tematicas}</p>
        </div>  
        <div className="max-[755px]:mb-[5vh] min-[755px]:flex  min-[755px]:h-[51px] min-[1152px]:h-[9vh] min-[1252px]:h-[10vh]">

         <p className="min-[1000px]:text-2xl  max-[745px]:mb-[8px] font-[Roboto]   min-[755px]:text-[1.6vw] min-[919px]:text-[14.8px] text-xs min-[889px]:14px   mr-4 min-[755px]:w-[46%] min-[1000px]:w-[47%] min-[755px]:inline-block text-justify text-[#F5F5F5]"><span className="ml-[15vw] text-lg min-[755px]:ml-[2vw] max-[342px]:ml-[19vw]  min-[1000px]:ml-[55px] min-[1000px]:text-2xl ">Fecha de inicio del Evento: </span>{publicaciones.fechaEvento}</p>
        <p className="min-[1000px]:text-2xl min-[1000px]:right-[30px]  min-[1000px]:relative max-[755px]:mt-[5vh] max-[745px]:mb-[8px] font-[Roboto] text-xs min-[889px]:14px mr-4 min-[755px]:w-[46%] min-[1000px]:w-[47%] min-[755px]:inline-block text-justify text-[#F5F5F5]  min-[755px]:text-[1.6vw] min-[919px]:text-[14.8px] "><span className="ml-[15vw] text-lg min-[755px]:ml-[3vw] min-[1000px]:text-2xl  min-[1000px]:relative">Fecha fin del Evento: </span>{publicaciones.fechaFinEvento}</p>
        </div>  
        <div className="min-[755px]:flex max-[755px]:mb-[5vh] min-[755px]:h-[51px] min-[1152px]:h-[6vh] min-[1252px]:h-[7vh] min-[1000px]:relative min-[1000px]:top-12  ">

       
        <p className=" max-[745px]:mb-[8px] font-[Roboto]   min-[755px]:text-[1.6vw] min-[919px]:text-[14.8px] text-xs min-[889px]:14px   mr-4 min-[755px]:w-[46%] min-[1000px]:w-[47%] min-[755px]:inline-block text-justify text-[#F5F5F5] min-[1000px]:left-[1px] min-[1000px]:relative min-[1000px]:text-2xl"><span className="ml-[15vw] text-lg min-[755px]:ml-[3vw] min-[1000px]:text-2xl">Límite de Entrega: </span>{publicaciones.limiteEntrega}</p>
        <p className=" max-[745px]:mb-[8px] font-[Roboto]   min-[755px]:text-[1.6vw] min-[919px]:text-[14.8px] text-xs min-[889px]:14px   mr-4 min-[755px]:w-[46%] min-[1000px]:w-[47%] min-[755px]:inline-block text-justify text-[#F5F5F5] min-[1000px]:text-2xl"><span className="ml-[15vw] text-lg min-[755px]:ml-[2vw] min-[754px]:w-[160px] min-[754px]:inline-block min-[1324px]:inline min-[1000px]:text-2xl min-[1000px]:ml-[1.6vw] min-[1000px]:w-[290px]">Correo Evento:</span> {publicaciones.emailEvento}</p>




        
    </div>
    <div className="min-[755px]:flex max-[755px]:mb-[5vh] min-[755px]:h-[51px] min-[1152px]:h-[6vh] min-[1252px]:h-[7vh]">
        <a href={publicaciones.enlace} target="blank" className="min-[1000px]:relative min-[1000px]:top-24 min-[1000px]:left-6 min-[1000px]:text-2xl max-[745px]:mb-[8px] font-[Roboto]   min-[755px]:text-[1.6vw] min-[919px]:text-[14.8px] text-xs min-[889px]:14px   mr-4 min-[755px]:w-[46%] min-[1000px]:w-[47%] min-[755px]:inline-block text-justify text-[#D3D3D3]">
    <p className=""><span className="ml-[15vw] text-lg min-[755px]:ml-[2vw] min-[754px]:w-[160px] min-[754px]:inline-block min-[1324px]:inline min-[1000px]:text-2xl text-[#F5F5F5]">Enlace:</span>{publicaciones.enlace}</p></a>
    <p className="hyphens-auto max-[755px]:mt-[5vh] font-[Roboto]  min-[755px]:text-[1.6vw] min-[919px]:text-[14.8px] text-xs max-[745px]:mb-[8px] min-[889px]:14px  mr-4 min-[755px]:w-[46%] min-[1000px]:w-[47%] min-[755px]:inline-block text-justify text-[#F5F5F5] min-[1000px]:relative min-[1000px]:top-24 min-[1000px]:text-2xl"><span className="ml-[15vw] text-lg min-[755px]:ml-[3vw] min-[1000px]:text-2xl min-[1000px]:ml-[2vw] hyphens-auto">Autor del Evento:</span> {autores}</p>
      </div>
         </div>
    );
}