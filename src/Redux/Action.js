export const CITY = 'CITY';
export const COUNTRY = 'COUNTRY';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export const CityAction = (payload) => ({type:CITY,payload});
export const CountryAction = (payload) => ({type:COUNTRY,payload});
export const LoadingAction = ()=>({type:LOADING});
export const ErrorAction =  ()=>({type:ERROR});