import { CITY, COUNTRY, LOADING} from "./Action";

const initial = {
    city:[],
    country:[],
    load:false
}

export const Reducer = (store=initial,{type,payload})=>{
    switch(type){
        case CITY: return {...store,city:payload,load:false};
        case COUNTRY : return {...store,country:payload,load:false};
        case LOADING: return {...store,load:true}
        default: return {store}
    }
}