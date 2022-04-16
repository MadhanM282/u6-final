import { Button, TextField } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CityAction, CountryAction } from "../Redux/Action"

export const CityForm = () => {
    const [country, SetCountry] = useState([])
    const dispatch = useDispatch()
    const [data, setData] = useState({
        city: "",
        populaton: 0,
        country: ""
    })

    useEffect(() => {
    }, [])
    const PostForm = () => {
        axios.post(' https://jsons-ervermock.herokuapp.com/city', data).then(({ data }) => {
            console.log('res', data);
        })
        axios.get(' https://jsons-ervermock.herokuapp.com/city').then(({ data }) => {
            dispatch(CityAction(data))
        })
    }

    const handelChange = (e) => {
        const { id, value } = e.target;
        setData({ ...data, [id]: value })
    }
    const handelCountry = (e) => {
        setData({ ...data, country: e.target.value })
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        PostForm()
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <TextField onChange={(e) => handelChange(e)} type="text" id="city" placeholder="City Name" /> <br />
                <TextField onChange={(e) => handelChange(e)} type="number" id="populaton" placeholder="Population" /> <br />
                <select onChange={(e) => {
                    handelCountry(e)
                }} name="country" id="">
                    <option value="---">---</option>
                    {country.map((e) => {
                        return <option key={e.id} id="country" value={e.country}>{e.country}</option>
                    })}
                </select>
                <Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]} type="submit">submit</Button>
            </form>
        </div>
    )
}