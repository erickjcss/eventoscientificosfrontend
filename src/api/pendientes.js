import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'http://localhost:8000/publications/api/v1/publications/',
    headers: {
        'Content-Type': 'application/json', // Cambiado a JSON si solo envías datos JSON
    },
});

const urlPendientes=axios.create({

        headers: {
           'content-type': 'multipart/form-data',
        },
    baseURL:'http://localhost:8000/pendientes/api/v1/pendientes/'
})
const urlObtPendientes=axios.create({
 
    baseURL:'http://localhost:8000/pendientes/api/v1/pendientes/',
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

