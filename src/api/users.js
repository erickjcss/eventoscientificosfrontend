import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'http://localhost:8000/users/crear-usuario',
    headers: {
        'Content-Type': 'application/json', // Cambiado a JSON si solo envías datos JSON
    },
});

const urlUsers=axios.create({

        headers: {
           'content-type': 'multipart/form-data',
        },
    baseURL:'http://localhost:8000/users/crear-usuario'
})
const urlObtPub=axios.create({
 
    baseURL:'http://localhost:8000/users/crear-usuario',
    /* headers: {
    'Content-Type': 'application/json',
 }, */

});
export const getAllUsers=()=>{
   
   return urlUsers.get('/')

}
export const createUsers=(publicacion)=>{
    return urlUsers.post('/',publicacion)
}
export const deleteUsers=(id)=>{
    return urlUsers.delete(`/${id}`)
}

export const updateUsers = (id, valor) => {
    return apiClient.put(`/${id}/`, valor);
};
