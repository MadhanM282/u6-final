export const CITY = 'CITY';
export const COUNTRY = 'COUNTRY';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
import axios from "axios"
export const CityAction = (payload) => ({ type: CITY, payload });
export const CountryAction = (payload) => ({ type: COUNTRY, payload });
export const LoadingAction = () => ({ type: LOADING });
export const ErrorAction = () => ({ type: ERROR });

export const GetCity = () => (dispatch) => (
    axios.get(' https://jsons-ervermock.herokuapp.com/city').then(({ data }) => {
        dispatch(CityAction(data))
    })
)
export const PostCity = (data) => (dispatch) => (
    axios.post(' https://jsons-ervermock.herokuapp.com/city', data).then(({ data }) => {
        console.log('res', data);
    })
)
export const PutCity = (id, data) => (dispatch) => (
    axios.put(` https://jsons-ervermock.herokuapp.com/city/${id}`, data).then(({ data }) => {
        console.log('res', data);
    })
)

export const GetCountry = () => (dispatch) => (
    axios.get(' https://jsons-ervermock.herokuapp.com/country').then(({ data }) => {
        dispatch(CityAction(data))
    })
)
export const PostCountry = (data) => (dispatch) => (
    axios.post(' https://jsons-ervermock.herokuapp.com/country', { country: data })
)