import { Box, Button } from '@mui/material'
import { Route, Routes, useNavigate } from 'react-router'
import './App.css'
import { CityForm } from './components/City'
import { CountryForm } from './components/Country'
import { EditForm } from './components/Edit'
import { Home } from './components/Home'

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Box sx={{display:'flex',justifyContent: 'space-around'}}>
      <Button onClick={() => {
          navigate("/")
        }}>Home</Button>
        <Button onClick={() => {
          navigate("/add-city")
        }}>Add City</Button>
        <Button onClick={() => {
          navigate("/add-country")
        }}>Add Country</Button>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-country" element={<CountryForm />} />
        <Route path="/add-city" element={<CityForm />} />
        <Route path="/edit/:id" element={<EditForm />} /> 
      </Routes>
    </div >
  )
}

export default App
