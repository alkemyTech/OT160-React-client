import {patch, post} from '../Services/privateApiService';


export const patchActivitie =(id, values)=>{
    patch(`https://ongapi.alkemy.org/api/docs#/activities/${id}`, values)
}

export const postActivitie =(values)=>{
    post('https://ongapi.alkemy.org/api/docs#/activities/create', values);
}