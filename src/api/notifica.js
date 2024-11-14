import axios from 'axios'

const urlNotifica=axios.create({
    baseURL:'https://eventoscientificos-nxmx.onrender.com/notifica/api/v1/notifica/'
})

export const getAllNotifica=()=>{
   /*  return axios.get('https://eventoscientificos-nxmx.onrender.com/notifica/api/v1/notifica/') */
   return urlNotifica.get('/')

}
export const createNotifica=(persona)=>{
    return urlNotifica.post('/',persona)
}

export const deleteNotifica=(id)=>{
    return urlNotifica.delete(`/${id}`)
}

export const updateNotifica = (id, valor) => {
    return apiClient.put(`/${id}/`, valor);
};
