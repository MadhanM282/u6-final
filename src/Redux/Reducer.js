import { CITY, COUNTRY} from "./Action";

const initial = {
    city:[],
    country:[],
}

export const Reducer = (store=initial,{type,payload})=>{
    switch(type){
        case CITY: return {...store,city:payload};
        case COUNTRY : return {...store,country:payload};
        default: return {store}
    }
}