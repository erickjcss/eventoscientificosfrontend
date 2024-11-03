import axios from 'axios'

const urlPersonas=axios.create({
    baseURL:'http://localhost:8000/personas/api/v1/personas/'
})

export const getAllPersonas=()=>{
   /*  return axios.get('http://localhost:8000/personas/api/v1/personas/') */
   return urlPersonas.get('/')

}
export const createPersona=(persona)=>{
    return urlPersonas.post('/',persona)
}

export const deletePersonas=(id)=>{
    return urlPersonas.delete(`/${id}`)
}

export const updatePersonas = (id, valor) => {
    return apiClient.put(`/${id}/`, valor);
};
