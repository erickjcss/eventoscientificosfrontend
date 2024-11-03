import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'http://localhost:8000/comentarios/api/v1/comentarios/',
    headers: {
        'Content-Type': 'application/json', // Cambiado a JSON si solo envías datos JSON
    },
});

const urlComentarios=axios.create({

        headers: {
           'content-type': 'multipart/form-data',
        },
    baseURL:'http://localhost:8000/comentarios/api/v1/comentarios/'
})
const urlObtPub=axios.create({
 
    baseURL:'http://localhost:8000/comentarios/api/v1/comentarios/',
    /* headers: {
    'Content-Type': 'application/json',
 }, */

});
export const getAllComentarios=()=>{
   
   return urlComentarios.get('/')

}
export const createComentarios=(publicacion)=>{
    return urlComentarios.post('/',publicacion)
}
export const deleteComentarios=(id)=>{
    return urlComentarios.delete(`/${id}`)
}

export const updateComentarios = (id, valor) => {
    return apiClient.put(`/${id}/`, valor);
};
