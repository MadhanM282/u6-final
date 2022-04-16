import { CITY, COUNTRY, ERROR, LOADING } from "./Action";

const initial = {
    city:[],
    country:[],
    loading:false,
    error:false
}

export const Reducer = (store=initial,{type,payload})=>{
    switch(type){
        case CITY: return {...store,loading:false,city:payload,error:false};
        case COUNTRY : return {...store,loading:false,country:payload,error:false};
        case LOADING: return{...store,loading:true,error:false};
        case ERROR: return {...store,loading:false,error:true};
        default: return {store}
    }
}