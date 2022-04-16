import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { CountryAction } from "../Redux/Action"

export const CountryForm = () => {
    const [data,setData] = useState("")
    const dispatch = useDispatch()
    const PostData = ()=>{
        axios.post('http://localhost:8080/country',{country:data}).then(({data})=>{
            console.log('data', data);
            
        })
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
                <input onChange={(e)=>handelChange(e)} type="text" placeholder="Country Name" />
                <input type="submit" value="Add Country" />
            </form>
        </div>
    )
}