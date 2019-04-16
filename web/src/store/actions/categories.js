// import { push } from "connected-react-router";
import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3001/api/',
})

export function addCategorie(id_supermarket, name_categorie, description){
    return (dispatch) => {
        return api.post('category', { id_supermarket, name_categorie, description }, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response => {
            dispatch(newCategory(response.data))
        })
      }
}

export function getCategories(id_manager){
    console.log(id_manager)
    return (dispatch) => {
        api.get(`categories/${id_manager}`, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(response =>  {
            dispatch(getAllCategories(response.data))
        })
    }
}

export const getAllCategories = (data) => {
    return {
        type: 'GET_ALL_CATEGORY',
        data
    }
}

export const newCategory = (data) => {
    return {
        type: 'ADD_CATEGORY',
        data
    }
}

