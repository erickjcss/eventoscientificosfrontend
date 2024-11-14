import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'https://eventoscientificos-nxmx.onrender.com/users/crear-usuario',
    headers: {
        'Content-Type': 'application/json', // Cambiado a JSON si solo envías datos JSON
    },
});

const urlUsers=axios.create({

        headers: {
           'content-type': 'multipart/form-data',
        },
    baseURL:'https://eventoscientificos-nxmx.onrender.com/users/crear-usuario'
})
const urlObtPub=axios.create({
 
    baseURL:'https://eventoscientificos-nxmx.onrender.com/users/crear-usuario',
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
