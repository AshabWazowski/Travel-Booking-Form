import { Divider, IconButton, InputLabel, Tooltip } from '@mui/material'
import React from 'react'
import { SharedBox, SharedTextField } from '../../Assets/SharedAssets'
import FlightDetails from './FlightDetails'
import RadioCheck from './RadioCheck'
import InfoIcon from '@mui/icons-material/Info';



const TravelForm = ({dpt, returnDate, }) => {
  
  
  return (
    <SharedBox display='block'>
      <SharedBox padding='0' flexDirection='column' alignItems='start' gap='0.5rem'>
      <SharedBox padding='0' alignItems='start' flexDirection='row'>
      <InputLabel sx={{fontSize:'25px'}}>Title</InputLabel>
      <Tooltip title="Title must be within 100 Letters" placement='right'>
      <IconButton>
      <InfoIcon/>
      </IconButton>
      </Tooltip>
      </SharedBox>
        <SharedTextField fullWidth label="Title" />
      </SharedBox>
        <RadioCheck/>
        <Divider/>
        <FlightDetails dpt={dpt} returnDate={returnDate}/>
    </SharedBox>
  )
}

export default TravelForm