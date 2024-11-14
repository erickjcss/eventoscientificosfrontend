import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://eventoscientificos-nxmx.onrender.com/comentarios/api/v1/comentarios/',
    headers: {
        'Content-Type': 'application/json', // Cambiado a JSON si solo envías datos JSON
    },
});

const urlComentarios=axios.create({

        headers: {
           'content-type': 'multipart/form-data',
        },
    baseURL:'https://eventoscientificos-nxmx.onrender.com/comentarios/api/v1/comentarios/'
})
const urlObtPub=axios.create({
 
    baseURL:'https://eventoscientificos-nxmx.onrender.com/comentarios/api/v1/comentarios/',
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
