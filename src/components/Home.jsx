import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CityAction } from "../Redux/Action"
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router"

export const Home = () => {
    const dispatch = useDispatch()
    const [pop,setPop] = useState("asc")
    const { city,country} = useSelector((store) => store)
    console.log('country', country);
    console.log('city', city);
    const countr = useSelector((store) => store)
    console.log('countr', countr);
    useEffect(() => {
        GetData()
    }, [pop])
    const GetData = () => {
        axios.get(`http://localhost:8080/city?_sort=populaton&_order=${pop}`).then(({ data }) => {
            dispatch(CityAction(data))
        })
    }
    const DeleteCity = (e) => {
        axios.delete(`http://localhost:8080/city/${e.target.id}`).then(() => {
            GetData()
        })
    }
    const handelSort = (e)=>{
        if(e.target.id==="asc"){
            setPop('asc')
        }
        if(e.target.id==="desc"){
            setPop('desc')
        }

    }
    
    return (
        <Box>
            <Box sx={{display: 'flex',justifyContent: 'space-evenly'}}>
                <select name="country" id="" onChange={handelSort}>
                    <option value="">select country</option>
                    {country?country.map((e)=>{
                        return <option  key={e.id} id="country" value={e.country}>{e.country}</option>
                    }):""}
                </select>
                <Button onClick={handelSort} id='asc'>Population Asc</Button>
                <Button onClick={handelSort} id='desc'>Population Desc</Button>
                

            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{bgcolor:"black"}}>
                            <TableCell sx={{color:"white"}} align="center">Sl.No</TableCell>
                            <TableCell sx={{color:"white"}} align="center">City</TableCell>
                            <TableCell sx={{color:"white"}} align="center">Country</TableCell>
                            <TableCell sx={{color:"white"}} align="center">Population</TableCell>
                            <TableCell sx={{color:"white"}} align="center">EDIT</TableCell>
                            <TableCell sx={{color:"white"}} align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {city?city.map((e, i) => {
                            return (
                                <TableRow key={e.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="center">{i + 1}</TableCell>
                                    <TableCell component="th" scope="row" align="center">{e.city}</TableCell>
                                    <TableCell align="center">{e.country}</TableCell>
                                    <TableCell align="center">{e.populaton}</TableCell>
                                    <TableCell align="center">Edit</TableCell>
                                    <TableCell id={e.id} onClick={DeleteCity} align="center">Delete</TableCell>
                                </TableRow>
                            )
                        }):<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }}}>
                                <TableCell align="center">Add City</TableCell>
                            </TableRow>}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    )
}