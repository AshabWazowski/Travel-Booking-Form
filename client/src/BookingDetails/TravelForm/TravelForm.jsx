import { Divider, InputLabel } from '@mui/material'
import React from 'react'
import { SharedBox, SharedTextField } from '../../Assets/SharedAssets'
import FlightDetails from './FlightDetails'
import RadioCheck from './RadioCheck'

const TravelForm = ({dpt, returnDate, }) => {
  return (
    <SharedBox display='block'>
      <SharedBox flexDirection='column' alignItems='start' gap='1rem'>
        <InputLabel sx={{fontSize:'25px'}}>Title</InputLabel>
        <SharedTextField fullWidth label="Title" />
      </SharedBox>
        <RadioCheck/>
        <Divider/>
        <FlightDetails dpt={dpt} returnDate={returnDate}/>
    </SharedBox>
  )
}

export default TravelForm