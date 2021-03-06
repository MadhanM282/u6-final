import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { CityAction, CountryAction, LoadingAction } from "../Redux/Action"
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router"

export const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [pop, setPop] = useState("")
    const [cont, SetCont] = useState("")
    const { city, country, load } = useSelector((store) => store)
    useEffect(() => {
        GetData()
        axios.get(' https://jsons-ervermock.herokuapp.com/country').then(({ data }) => {
            dispatch(CountryAction(data))
        })
    }, [pop, cont])
    const GetData = () => {
        dispatch(LoadingAction())
        axios.get(` https://jsons-ervermock.herokuapp.com/city?${cont}&_sort=populaton&${pop}`).then(({ data }) => {
            dispatch(CityAction(data))
        })
    }
    const DeleteCity = (e) => {
        dispatch(LoadingAction())
        axios.delete(` https://jsons-ervermock.herokuapp.com/city/${e.target.id}`).then(() => {
            GetData()
        })
    }
    const handelSort = (e) => {
        if (e.target.id === "country") {
            SetCont(`country=${e.target.value}`)
        }
        if (e.target.id === "asc") {
            setPop('_order=asc')
        }
        if (e.target.id === "desc") {

            setPop('_order=desc')
        }

    }

    return load ? <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" /> : (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <select name="country" id="country" onChange={handelSort}>
                    <option value="">select country</option>
                    {country ? country.map((e) => {
                        return <option key={e.id} id="country" value={e.country}>{e.country}</option>
                    }) : ""}
                </select>
                <Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]} onClick={handelSort} id='asc'>Population Asc</Button>
                <Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]} onClick={handelSort} id='desc'>Population Desc</Button>


            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: "black" }}>
                            <TableCell sx={{ color: "white" }} align="center">Sl.No</TableCell>
                            <TableCell sx={{ color: "white" }} align="center">City</TableCell>
                            <TableCell sx={{ color: "white" }} align="center">Country</TableCell>
                            <TableCell sx={{ color: "white" }} align="center">Population</TableCell>
                            <TableCell sx={{ color: "white" }} align="center">EDIT</TableCell>
                            <TableCell sx={{ color: "white" }} align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {city ? city.map((e, i) => {
                            return (
                                <TableRow key={e.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="center">{i + 1}</TableCell>
                                    <TableCell component="th" scope="row" align="center">{e.city}</TableCell>
                                    <TableCell align="center">{e.country}</TableCell>
                                    <TableCell align="center">{e.populaton}</TableCell>
                                    <TableCell onClick={() => {
                                        navigate(`/edit/${e.id}`)
                                    }} align="center">Edit</TableCell>
                                    <TableCell id={e.id} onClick={DeleteCity} align="center">Delete</TableCell>
                                </TableRow>
                            )
                        }) : <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center">Add City</TableCell>
                        </TableRow>}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    )
}