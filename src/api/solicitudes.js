import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://eventoscientificos-nxmx.onrender.com/solicitud/api/v1/solicitud/',
    headers: {
        'Content-Type': 'application/json', // Cambiado a JSON si solo envías datos JSON
    },
});

const urlSolicitudes=axios.create({

        headers: {
           'content-type': 'multipart/form-data',
        },
    baseURL:'https://eventoscientificos-nxmx.onrender.com/solicitud/api/v1/solicitud/'
})
const urlObtPub=axios.create({
 
    baseURL:'https://eventoscientificos-nxmx.onrender.com/solicitud/api/v1/solicitud/',
    /* headers: {
    'Content-Type': 'application/json',
 }, */

});
export const getAllSolicitudes=()=>{
   
   return urlSolicitudes.get('/')

}
export const createSolicitudes=(publicacion)=>{
    return urlSolicitudes.post('/',publicacion)
}
export const deleteSolicitudes=(id)=>{
    return urlSolicitudes.delete(`/${id}`)
}

export const updateSolicitudes = (id, valor) => {
    return apiClient.put(`/${id}/`, valor);
};

