export function ComentariosCard({ comentarios,autores }){


  
    return(
      <div >
              {comentarios!=''&&(
                             
        <div className="ml-2 mb-4  mr-auto relative top-[100px] scroll-auto    max-h-[744px] " >
        <div className=" mb-8 bg-[#abc]  w-[40vw] ml-auto mr-auto max-[700px]:max-w-[300px] min-[700px]:w-[40vw] overflow-auto max-[400px]:w-[50vw]"> 
        <div className="inline-flex  justify-between  w-[inherit]  ">
        <span className="text-xs ml-4 min-[500px]:text-s min-[1000px]:text-base min-[1000px]:top-[-5px] inline-block relative top-[-6px] " >{comentarios!=undefined&&comentarios!=null&&comentarios!=''?comentarios.emailPer:''}</span>
        <span className="text-xs  right-0 min-[500px]:text-s min-[1000px]:text-base min-[1000px]:top-[-5px] inline-block relative top-[-6px] mr-4">{comentarios!=undefined&&comentarios!=null&&comentarios!=''?comentarios.fechaPub:''}</span>
        </div>
        <p
        className="text-s min-[1000px]:text-lg ml-4">
        {comentarios!=undefined&&comentarios!=null&&comentarios!=''?comentarios.contenido:''}
        </p>
        <span className=" text-end  w-[inherit] text-[#053] inline-block ">{comentarios!=undefined&&comentarios!=null&&comentarios!=''?comentarios.horaPub:''}</span>
   </div>
   
     </div>
                  )}
     </div>
    );
}