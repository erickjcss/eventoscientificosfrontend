import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'http://localhost:8000/publications/api/v1/publications/',
    headers: {
        'Content-Type': 'application/json', // Cambiado a JSON si solo envías datos JSON
    },
});

const urlPublicaciones=axios.create({

        headers: {
           'content-type': 'multipart/form-data',
        },
    baseURL:'http://localhost:8000/publications/api/v1/publications/'
})
const urlObtPub=axios.create({
 
    baseURL:'http://localhost:8000/publications/api/v1/publications/',
    /* headers: {
    'Content-Type': 'application/json',
 }, */

});
export const getAllPublicaciones=()=>{
   
   return urlPublicaciones.get('/')

}
export const createPublicaciones=(publicacion)=>{
    return urlPublicaciones.post('/',publicacion)
}
export const deletePublicaciones=(id)=>{
    return urlPublicaciones.delete(`/${id}`)
}

export const updatePublicaciones = (id, valor) => {
    return apiClient.put(`/${id}/`, valor);
};

