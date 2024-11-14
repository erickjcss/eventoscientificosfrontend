import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://eventoscientificos-nxmx.onrender.com/publications/api/v1/publications/',
    headers: {
        'Content-Type': 'application/json', // Cambiado a JSON si solo envías datos JSON
    },
});

const urlPendientes=axios.create({

        headers: {
           'content-type': 'multipart/form-data',
        },
    baseURL:'https://eventoscientificos-nxmx.onrender.com/pendientes/api/v1/pendientes/'
})
const urlObtPendientes=axios.create({
 
    baseURL:'https://eventoscientificos-nxmx.onrender.com/pendientes/api/v1/pendientes/',
    /* headers: {
    'Content-Type': 'application/json',
 }, */

});
export const getAllPendientes=()=>{
   
   return urlPendientes.get('/')

}
export const createPendientes=(publicacion)=>{
    return urlPendientes.post('/',publicacion)
}
export const deletePendientes=(id)=>{
    return urlPendientes.delete(`/${id}`)
}

export const updatePendientes = (id, valor) => {
    return apiClient.put(`/${id}/`, valor);
};

