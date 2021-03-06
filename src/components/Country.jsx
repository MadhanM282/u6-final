import { Button, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { CityAction, CountryAction, GetCountry, PostCountry } from "../Redux/Action"

export const CountryForm = () => {
    const [data,setData] = useState("")
    const dispatch = useDispatch()
    const PostData = ()=>{
        dispatch(PostCountry(data))
        dispatch(GetCountry())
    }
    const handelChange = (e)=>{
        setData(e.target.value)
    }
    const handelSubmit=(e)=>{
        e.preventDefault()
        PostData()
    }
    return (
        <div>
            <form onSubmit={handelSubmit} >
                <TextField onChange={(e)=>handelChange(e)} type="text" placeholder="Country Name" /> <br />
                <Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]} type="submit">Add Country</Button>
            </form>
        </div>
    )
}