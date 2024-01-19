import React from 'react'
import { HotelControl, CarControl } from '.'
import {SharedPaper} from '../../Assets/SharedAssets'

const ExpensesControl = ({values, handleChange}) => {

  return (
    <SharedPaper elevation={3} overflow='hidden'>
        <HotelControl 
        values={values}
        handleChange={handleChange} 
        />
        <CarControl 
        values={values}
        handleChange={handleChange} 
        />

    </SharedPaper>
    
  )
}

export default ExpensesControl