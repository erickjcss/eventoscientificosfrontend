import React, { useState } from "react";
import { useForm } from "react-hook-form";


function Appa(){
    const { register,handleSubmit}=useForm();
    const [f,setF]=useState('');

    const onSubmit=async(data)=>{
        
        const formData=new FormData();
        formData.append("pdf",f);

        const res=await fetch("http://localhost:8000/usuarios/api/v1/usuarios/",{
            method:"POST",
            body:formData,

}).then((res)=>res.json());
    alert(JSON.stringify(`${res.message},status:${res.status}`));
    };


return(
    <div className="App">
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file"
         onChange={(e) => setF(e.target.files[0])}
       
        />

        <input type="submit"  />


        </form>
    </div>
);
}
export default Appa;